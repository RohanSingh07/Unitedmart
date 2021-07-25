from django.shortcuts import render
from django.views.generic import ListView,DetailView, View
from django.contrib.auth.decorators import login_required
from django.shortcuts import render , get_object_or_404 ,redirect,reverse
from django.contrib import messages
from Seller.models import SellerProfile,Market,Mall
from Base.models import Order,Product
from Seller.views import create_random_unique_slug
import random,string

# Create your views here.
def Explore_Home(request):
    if request.method=='GET':
        shops = SellerProfile.objects.all()
        try:
            order = Order.objects.get(user=request.user,
                                      ordered=False)  # get the order of the person if it already exists

        except :
            order = False
        content = {
            'shops':shops,
            'order':order,

        }
        return render(request,'Explore/explore_homepage.html',content)

# Public Profile of Seller Shop
def Seller_Detail(request, slug):
        try:
            order = Order.objects.get(user=request.user,ordered=False)  # get the order of the person if it already exists
        except :
            order = False
        profile = get_object_or_404(SellerProfile,unique_id=slug)   # here slug is the field name and UID is the field inside slug
        products = profile.products.all()
        # Is the user the seller of the shop
        seller = False
        if request.user == profile.user:
            seller = True

        content = {
            'order':order,
            'profile': profile,
            'products':products,
            'seller':seller
        }
        return render(request, 'Explore/seller-page.html', content)


def Marketplace_Detail(request, slug):
    # order for cart
    try:
        order = Order.objects.get(user=request.user, ordered=False)  # get the order of the person if it already exists
    except:
        order = False
    # Check if the user is Seller
    try:
        profile = SellerProfile.objects.get(user=request.user)
        Seller = True
    except:
        Seller = False
        profile = False

    # Get the market
    belongs = False
    try:
        market = Market.objects.get(unique_id=slug)
        # Check if the seller belongs here
        if Seller:
            if profile.market_to == market:
                belongs = True
            else:
                belongs = False
    # Or get the mall
    except:
        market = Mall.objects.get(unique_id=slug)
        # Check if the seller belongs here
        if Seller:
            if profile.mall_to == market:
                belongs = True
            else:
                belongs = False
    if request.method == 'GET':

        content = {
            'market': market,
            'seller':Seller,
            'profile':profile,
            'order':order,
            'belongs':belongs
        }
        return render(request, 'Explore/Mall_Market_page.html', content)
    else:
        # Image 1
        if request.FILES.get('First_image_market_input', False):
            image1 = request.FILES['First_image_market_input']
            market.shop_photo1 = image1
        # Image 2
        if request.FILES.get('Second_image_market_input', False):
            image2 = request.FILES['Second_image_market_input']
            market.shop_photo2 = image2
        # Image 3
        if request.FILES.get('Third_image_market_input', False):
            image3 = request.FILES['Third_image_market_input']
            market.shop_photo3 = image3
        # Image 4
        if request.FILES.get('Fourth_image_market_input', False):
            image4 = request.FILES['Fourth_image_market_input']
            market.shop_photo4 = image4
        # Image 5
        if request.FILES.get('Fifth_image_market_input', False):
            image5 = request.FILES['Fifth_image_market_input']
            market.shop_photo5 = image5
        # Image 6
        if request.FILES.get('Sixth_image_market_input', False):
            image6 = request.FILES['Sixth_image_market_input']
            market.shop_photo6 = image6
        # Image 7
        if request.FILES.get('Seventh_image_market_input', False):
            image7 = request.FILES['Seventh_image_market_input']
            market.shop_photo7 = image7
        # Image 8
        if request.FILES.get('Eighth_image_market_input', False):
            image8 = request.FILES['Eighth_image_market_input']
            market.shop_photo8 = image8
        # Image 9
        if request.FILES.get('Ninth_image_market_input', False):
            image9 = request.FILES['Ninth_image_market_input']
            market.shop_photo9 = image9
        # Image 10
        if request.FILES.get('Tenth_image_market_input', False):
            image10 = request.FILES['Tenth_image_market_input']
            market.shop_photo10 = image10
        market.save()
        return redirect(reverse(('Explore:Marketplace-page'), kwargs={
            'slug': market.unique_id
        }))

# Seller can join Market or Mall
def Join_Market(request,slug):
    profile = SellerProfile.objects.get(user=request.user)
    try:
        market = Market.objects.get(unique_id=slug)
    # Or get the mall
    except :
        market = Mall.objects.get(unique_id=slug)
        # Check if the seller belongs here
    market.shops.add(profile)
    try:
        profile.market_to = market
    except:
        profile.mall_to = market
    profile.save()
    messages.success(request,'Congratulations,Your Shop has been added to this Marketplace')
    return redirect(reverse(('Explore:Marketplace-page'), kwargs={
        'slug': slug
    }))
# Seller can Leave Market
def Leave_Market(request,slug):
    profile = SellerProfile.objects.get(user=request.user)
    try:
        market = Market.objects.get(unique_id=slug)
        profile.market_to = None
    # Or get the mall
    except:
        market = Mall.objects.get(unique_id=slug)
        profile.mall_to = None
        # Check if the seller belongs here
    market.shops.remove(profile)
    profile.save()
    messages.success(request, 'You have left this Marketplace :(')
    return redirect(reverse(('Explore:Marketplace-page'), kwargs={
        'slug': slug
    }))