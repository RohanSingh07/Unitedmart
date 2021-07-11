from django.shortcuts import render, redirect, reverse
from django.http import HttpResponseRedirect
from django.views.generic import View
from .models import Account, MyAccountManager
from twilio.rest import Client
from django.contrib import messages
from .forms import signup, OTPForm, PasswordForm
from random import randint

# required for login and logout
from django.contrib.auth.models import auth, User

# for seller profile
from Seller.views import create_random_unique_slug
from Seller.models import SellerProfile
# After verifying pincode of the seller
from django.core.mail import send_mail
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from .tokens import account_activation_token
from django.contrib.auth.models import User
from django.core.mail import EmailMessage

# Create your views here.
class Signup(View):
    def get(self, *args, **kwargs):
        form = signup()
        content = {
            'form': form
        }
        return render(self.request, 'account/signup.html', content)

    def post(self, *args, **kwargs):
        form = signup(self.request.POST or None)
        if form.is_valid():
            phone = form.cleaned_data.get('phone_number')
            username = form.cleaned_data.get('username')  # we don't need this

            if Account.objects.filter(phone=phone).exists():
                messages.info(self.request, 'Phone number already in use !')
                return redirect('users:signup')
            else:
                # # random 6 digit OTP
                # otp = randint(100000,999999)
                # # Send OTP
                # account_sid = 'AC4fee79de778c40fc8ee85cc6fdb4f382'
                # auth_token = '1160813d2df068dc4c4da7da35b90639'
                # client = Client(account_sid, auth_token)
                # string_number = str(phone)
                # message = client.messages.create(
                #     body=f'Your OTP is {otp}',
                #     from_='+12057843167',
                #     to='+91' + string_number
                # )
                otp=123456
                # in order to redirect and to pass parameters to that view we need to use both of these,
                # also if we pass something here we have to receive that in the view we are redirecting it to
                return redirect(reverse('users:confirm-mobile', kwargs={
                    'number': phone,
                    'otp': otp,
                    'username': username
                }))
                # else:
                #     messages.error(self.request, "Password do not match ")

        else:
            messages.error(self.request, "Form is not valid ")


def OTP_Singup(request, *args, **kwargs):
    number = kwargs['number']
    username = kwargs['username']
    otp = kwargs.get("otp")
    if request.method == 'GET':

        form = OTPForm()
        content = {
            'form': form,
        }
        return render(request, 'account/success.html', content)

    else:
        otp_form = OTPForm(request.POST or None)
        if otp_form.is_valid():
            user_otp = otp_form.cleaned_data.get('otp_user')
            real_otp = otp
            number = number
            username = username
            if user_otp == real_otp:
                messages.success(request, 'Phone number verified successfully :)')
                return redirect(reverse('users:final-signup', kwargs={
                    'number': number,
                    'username': username
                }))

            else:
                messages.error(request, 'OTP DID NOT MATCH ')
                return redirect('users:signup')


def set_password(request, number, username):
    if request.method == "GET":
        form = PasswordForm()
        content = {
            'form': form
        }
        return render(request, 'account/set_password.html', content)
    else:
        form = PasswordForm(request.POST or None)
        if form.is_valid():
            password1 = form.cleaned_data.get('password1')
            password2 = form.cleaned_data.get('password2')
            if password1 == password2:
                user = Account(
                    phone=number,
                    username=username
                )
                user.set_password(password1)
                user.save()
                user = auth.authenticate(phone=number, password=password1)
                if user is not None:
                    auth.login(request, user)
                    # if the user is seller then redirect it to the seller homepage
                    if user.is_seller:
                        return redirect('Seller:dashboard')
                    else:
                        return redirect('Base:Homepage')
                # redirect the user to the same page where logged in
                return redirect('users:login')
            else:
                messages.error(request, 'The password did not match ')
                return redirect('users:final-signup')
        else:
            messages.error(request, 'There was some problem while filling the form')
            return redirect('users:final-signup')


def login_new(request):
    if request.method == 'POST':
        phone = request.POST['phone']
        password = request.POST['password']
        user = auth.authenticate(phone=phone, password=password)
        if user is not None:
            auth.login(request, user)
            # if the user is seller then redirect it to the seller homepage
            if user.is_seller:
                return redirect('Seller:dashboard')
            else:
                # redirect the user to the same page where logged in
                # for get request redirect
                if request.GET.get('next')!=None:
                    next = request.GET.get('next')
                    return HttpResponseRedirect(next)
                # for post request redirect when a user is registered
                else:
                    next = request.POST.get('next', '/')
                    return redirect('Base:Homepage')
        else:
            messages.info(request, 'invalid username or password')
            return redirect('users:login')
    else:
        return render(request, 'account/login.html')

def logout_new(request):
    auth.logout(request)
    return redirect('/')

##### SELLER AUTHENTICATION SYSTEM STARTS ####
def Seller_login(request):
    if request.method == 'POST':
        phone = request.POST['phone']
        password = request.POST['password']
        user = auth.authenticate(phone=phone, password=password)
        if user is not None:
            auth.login(request, user)
            # if the user is seller then redirect it to the seller homepage
            if user.is_seller:
                return redirect('Seller:dashboard')
            else:
                # redirect the user to the same page where logged in
                # for get request redirect
                if request.GET.get('next')!=None:
                    next = request.GET.get('next')
                    return HttpResponseRedirect(next)
                # for post request redirect
                else:
                    next = request.POST.get('next', '/')
                    return HttpResponseRedirect(next)
        else:
            messages.info(request, 'invalid username or password')
            return redirect('users:login')
    else:
        return render(request, 'account/seller_login.html')

#----# Seller signup #-----#

# To send otp to the user for registration
def Seller_Signup_1(request):
    mobile = request.POST.get('mobile')
    # Check if the phone number is already in use in a seller account
    if Account.objects.filter(phone=mobile).exists():
        Account_Object = Account.objects.filter(phone=mobile)
        if Account_Object[0].is_seller:
            messages.info(request, 'Phone number already in use !')
            return redirect('Seller:seller-home')
    # random 6 digit OTP
    # otp = randint(100000, 999999)
    # Send OTP
    # account_sid = 'AC4fee79de778c40fc8ee85cc6fdb4f382'
    # auth_token = '1160813d2df068dc4c4da7da35b90639'
    # client = Client(account_sid, auth_token)
    # string_number = str(mobile)s
    # message = client.messages.create(
    #     body=f'Your OTP is {otp}',
    #     from_='+12057843167',
    #     to='+91' + string_number
    # )
    otp = 123456
    return render(request, 'account/seller_signup.html', {'mobile':mobile,'otp':otp})

# Verify The OTP
def Seller_Signup_2(request):
    mobile = request.POST.get('mobile')
    otp = request.POST.get('O')
    user_otp = request.POST.get('otp')
    # if the otp is genuine
    if user_otp == otp:
        messages.success(request, 'Phone number verified successfully :)')
        return render(request,'account/seller_signup_2.html',{
            'mobile':mobile
        })
    else:
        messages.info(request,'OTP DID NOT MATCH !')
        return redirect('Seller:seller-home')

from Seller.models import Pincodes
# To verify pincode of the seller
def Seller_Signup_3(request):
    # When the pincode is submitted
        mobile = request.POST.get('mobile')
        pincode = request.POST.get('pincode')
        if Pincodes.objects.filter(pincode=pincode).exists():
            messages.success(request,'Congratulations ! We can pick up any product from your pincode :)')
            # Send the pincode object
            pincode = Pincodes.objects.filter(pincode=pincode)[0]
            return render(request,'account/seller_success.html',{
                'mobile':mobile,
                'pincode':pincode,
            })
        else:
            messages.error(request,"Sorry,we don't pick up products here at time. Hopefully we will cover this area very soon :)")
            return redirect('Seller:seller-home')


def Seller_Singup_4(request):
    # Verify email
        try:
            mobile = request.POST.get('mobile')
            pincode = request.POST.get('pincode')
            email = request.POST.get('email')
            username = request.POST.get('name')
            address = request.POST.get('address')
            area = request.POST.get('area')
            landmark = request.POST.get('landmark')
            district = request.POST.get('district')
            state = request.POST.get('state')
            shop_name = request.POST.get('shop_name')
            password1 = request.POST.get('password1')
            password2 = request.POST.get('password2')
            # Create the user and the seller
            if password1 == password2:
                # Check if the user is already created
                if Account.objects.filter(phone=mobile).exists():
                    user = Account.objects.get(phone=mobile)
                    user.username = username
                    user.email = email
                    user.is_seller = True
                else:
                    user = Account(
                        phone=mobile,
                        username=username,
                        email=email,
                        is_seller = True,
                    )
                user.is_active=False
                user.set_password(password1)
                user.save()
                Seller = SellerProfile(
                    user=user,
                    unique_id = create_random_unique_slug(),
                    name_of_owner = username,
                    email_of_owner=email,
                    mobile_number = mobile,
                    shop_name= shop_name,
                    address = address,
                    Area = area,
                    landmark = landmark,
                    zipcode = pincode,
                    district = district,
                     state= state,
                )
                Seller.save()
            else:
                messages.error(request,'Password do not match !')
                return redirect('users:seller-signup-4')
            current_site = get_current_site(request)
            message = render_to_string('account/activate_seller_email.html', {
                'user': user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': account_activation_token.make_token(user),
            })
            send_mail(
              'Unitedmart : Verify your email ', # Subject
               message,             # msg
              'singhrohanss007@gmail.com',# from
              [email],
              fail_silently=False,
            )
            messages.success(request,'Please check your gmail account and verify your email to finish the registration !')
            return redirect("Seller:seller-home")
        except Exception as e:
            print(e)
            messages.error(request,'Something was wrong with the information you provided , Please try again !')
            return redirect('Seller:seller-home')

# For verification of email
def activate_email(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = Account.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, user.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.is_email_verified = True
        user.save()
        login(request, user)
        # return redirect('home')
        messages.success(request,'Congratulations your email has been verified ! Welcome abroad :)')
        return redirect('Seller:dashboard')
    else:
        return HttpResponse('Activation link is invalid!')







