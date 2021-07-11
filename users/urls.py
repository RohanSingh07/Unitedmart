from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import Signup,OTP_Singup,set_password,login_new,logout_new,Seller_Singup_4,Seller_Signup_2,Seller_login,\
    Seller_Signup_1,Seller_Signup_3,activate_email

from django.contrib.auth import views 
app_name = 'users'

urlpatterns=[
            # Signup view of buyers
            path('accounts/sign-up/',Signup.as_view(),name='signup'),
            # Confirm mobile view for buyers
            path('accounts/confirm-mobile/2873198725621<number>uhru1bn89c18r4bc21734012312823043423<otp>90324903231906lklk<username>asdyausaxnsi',OTP_Singup,name='confirm-mobile'),
            # Set password for buyers
            path('accounts/set-password/12039uwaxn412<number>1232138aoidhq02321<username>23152ewd1234',set_password,name='final-signup'),
            # login url
            path('accounts/login/',login_new,name='login'),
            # logout url
            path('accounts/logout/',logout_new,name='logout'),
            #Seller
            path('seller/login/',Seller_login,name='seller-login'),
            # For sending otp to the mobile
            path('accounts/confirm-mobile/',Seller_Signup_1,name='seller-signup-1'),
            # seller-signup-2
            path('accounts/seller-signup/',Seller_Signup_2,name='seller-signup-2'),
            # seller-signup-3
            path('accounts/seller-verify-pincode/',Seller_Signup_3,name='seller-signup-3'),
            # seller-signup-4
            path('accounts/verify-email/',Seller_Singup_4, name='seller-signup-4'),
            # path('accounts/seller-final-signup/',Seller_Signup_5, name='seller-signup-5'),
            # Verify email
            path('activate/<uidb64>/<token>/', activate_email, name='activate'),


]

