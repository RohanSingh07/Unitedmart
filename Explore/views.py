from django.shortcuts import render
from django.views.generic import ListView,DetailView, View
from django.contrib.auth.decorators import login_required
from django.shortcuts import render , get_object_or_404 ,redirect
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

def Seller_Detail(request, slug):
        try:
            order = Order.objects.get(user=request.user,ordered=False)  # get the order of the person if it already exists
        except :
            order = False

        profile = get_object_or_404(SellerProfile,unique_id=slug)   # here slug is the field name and UID is the field inside slug
        products = Product.objects.filter(UID = profile)  # same case as above
        # Is the user the seller of the shop
        seller = False
        if request.user == profile.user:
            seller = True

        content = {
            'order':order,
            'object': profile,
            'products':products,
            'seller':seller
        }
        return render(request, 'Explore/seller-page.html', content)


def Marketplace_Detail(request, slug):
    try:
        market = get_object_or_404(Market, unique_id=slug)
    except :
        market = get_object_or_404(Mall,unique_id=slug)

    content = {
        'market': market,
    }
    return render(request, 'Explore/Marketplace.html', content)

def Mall_Detail(request,slug):
    return render(request,'Explore/Mall.html',{})