#
# Pending
# Automatically reduce the number or quantity of items when they are purchased and show out of stock when they are finished

from django.shortcuts import render, get_object_or_404 ,redirect,reverse
from django.views.generic import ListView,DetailView, View
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.template.defaultfilters import slugify
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import SellerProfile
from Base.models import Product,Order,Order_Item
from .forms import AddProduct
# Create your views here.

# creating random and unique slug for items upload
import random,string
# this is for explore slugs
def create_random_unique_slug():
    slug = 'UNIM'+str(random.randint(0,9999999999))
    return slug

def create_random_unique_product_slug(name):
    slug = name+'-' + str(random.randint(0, 99999999999999999999999))
    return slug
# basic custom validation to check empty
def is_valid_form(values):
    valid = True
    for fields in values:
        if fields == '':
            valid= False
    return valid

# View for seller homepage

def Seller_Home(request):
    if request.user.is_authenticated:
        if request.user.is_seller:
            return redirect("Seller:dashboard")
    return render(request,'Seller/seller_home.html', {})


# View for seller dashboard

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from calendar import monthrange
# Array for the year dates by month
import pandas as pd
import datetime,calendar
from datetime import date
import seaborn as sns


number_of_days =date(2020,12,31)- date(2020,1,1)
start_date = date(2020,1,1)
date_array = [(start_date + datetime.timedelta(days = day)).isoformat() for day in range(number_of_days.days)]

from Base.models import Order_Item
@login_required
def ProfileView(request):
        try:
            profile = SellerProfile.objects.get(user = request.user)
            Seller = True
        except SellerProfile.DoesNotExist:
            messages.error(request,"This is not a Seller Account !")
            return redirect("Base:Homepage")
        products = Product.objects.filter(user = request.user)
        if products.count() == 0:
            Noproduct = True
        else:
            Noproduct=False
        # My Orders
        PreOrders = Order_Item.objects.filter(items__UID=profile)
        Orders = PreOrders.filter(ordered=True, delivered=False)
        day = datetime.date.today()

        content = {
            'profile':profile,
            'products':products,
            'Seller':Seller,
            'Noproduct':Noproduct,
            'today':day,
            'orders':Orders,
        }
        return render(request,'Seller/index.html',content)


# View for editing seller profile
@login_required
def profile_edit(request):
    profile = SellerProfile.objects.get(user=request.user)
    if request.method == 'GET':
        return render(request, 'Seller/seller_profile_edit.html', {
            'profile': profile,
        })
    else:
        name_of_owner = request.POST.get('name_of_owner')
        profile.name_of_owner = name_of_owner
        profile.save()
        return redirect('Seller:dashboard')


@login_required
def AddProductView(request):
    if request.method=='GET':
        profile = SellerProfile.objects.get(user = request.user)
        # if profile.bank_account_number:
        form = AddProduct()
        content = {
            'profile':profile,
            'form':form
        }
        return render(request , 'Seller/Add-product.html',content)
        # else:
        #     return redirect('Seller:bank-details')
    else:
        profile = SellerProfile.objects.get(user=request.user)
        form = AddProduct(request.POST or None,request.FILES) # we have to add request.FILES to store the files uploaded
        if form.is_valid():
            Name = form.cleaned_data.get('Name')
            price = form.cleaned_data.get('price')
            discount_price = form.cleaned_data.get('discount_price')
            category = form.cleaned_data.get('category')
            Brand = form.cleaned_data.get('Brand')
            slug = create_random_unique_slug(Name)                  # automatically generating slugs
            description = form.cleaned_data.get('description')
            image = form.cleaned_data.get('image')                  # To associate an image with the product
            image1 = form.cleaned_data.get('image1')
            image2 = form.cleaned_data.get('image2')
            image3 = form.cleaned_data.get('image3')
            image4 = form.cleaned_data.get('image4')
            image5 = form.cleaned_data.get('image5')
            image6 = form.cleaned_data.get('image6')
            image7 = form.cleaned_data.get('image7')
            image8 = form.cleaned_data.get('image8')
            image9 = form.cleaned_data.get('image9')
            video = form.cleaned_data.get('video')
            if is_valid_form([Name,price,discount_price,category,Brand,slug,description,image]):
                new_product = Product.objects.create(
                    Name = Name,
                    price = price,
                    discount_price=discount_price,
                    category = category,
                    Brand = Brand,
                    slug = slug,
                    description = description,
                    image = image,
                    image1=image1,
                    image2=image2,
                    image3=image3,
                    image4=image4,
                    image5=image5,
                    image6=image6,
                    image7=image7,
                    image8=image8,
                    image9=image9,
                    video = video,
                    user=request.user,
                    UID = profile,
                )

                new_product.save()
                profile.products.add(new_product)
            profile.save()
            return redirect("Seller:dashboard")
        else:
            messages.error(request, "Form is not valid ")
            return redirect('Seller:dashboard')
@login_required
def AddProduct2(request):
    if request.method=='GET':

        profile = SellerProfile.objects.get(user=request.user)
        return render(request,'Seller/Add-product-2.html',{
            'profile': profile
        })
    else:
        pass

@login_required
def AddProduct3(request):
    profile = SellerProfile.objects.get(user=request.user)
    if request.method=='GET':
        quantity = request.GET.get('Quantity')
        main_cat = request.GET.get('main_cat')
        sub_cat = request.GET.get('sub_cat')
        sub_sub_cat = request.GET.get('sub_sub_cat')
        sub_sub_sub_cat = request.GET.get('sub_sub_sub_cat')
        Single = False

        if quantity == '1':
            Single = True
        # Check category and give form accordingly
        Tshirt = False
        Mobiles = False
        Tablets = False
        Mobile_Accessories = False

        # Mobile Accessories
        MobileCameraLensProtectors=False
        Mobile_Accessories_CasesAndCover = False
        Mobile_PowerBanks = False
        Mobile_Smart_Keys = False
        Mobile_Holders = False
        Mobile_Body_Panels = False
        Mobile_Pouches = False
        Mobile_Spare_Parts = False
        Mobile_Cables = False
        Mobile_Enhancements = False
        Mobile_Charging_Pads = False
        Mobile_Styling_Maintenance = False
        Mobile_Selfie_Sticks = False
        Mobile_SIM_Adapters = False
        Mobile_Headphone_Amplifiers = False
        Mobile_Headphone_Splitters = False
        Mobile_Mobile_Batteries = False
        Mobile_Screen_Gaurds = False
        Mobile_Displays = False
        Mobile_Phone_Lens = False
        Mobile_Charging_Pad_Receivers = False
        Mobile_Headphone_Cushions_Earbuds = False
        Mobile_Chargers = False
        Mobile_Anti_Dust_Plugs = False
        Tablet_Accessories = False


        if sub_sub_cat == 'Mobiles':
            Mobiles = True
        elif sub_sub_cat == 'Tablets':
            Tablets = True
        elif sub_sub_cat == 'Mobile Accessories':
            if sub_sub_cat == "Mobile Accessories" and sub_sub_sub_cat == "":
                Mobile_Accessories = True
            elif sub_sub_sub_cat == "Mobile Camera Lens Protectors":
                MobileCameraLensProtectors = True
            elif sub_sub_sub_cat == "Cases & Covers":
                Mobile_Accessories_CasesAndCover = True
            elif sub_sub_sub_cat == "Power Banks":
                Mobile_PowerBanks = True
            elif sub_sub_sub_cat == "Smart Keys":
                Mobile_Smart_Keys = True
            elif sub_sub_sub_cat == "Mobile Holders":
                Mobile_Holders = True
            elif sub_sub_sub_cat == "Mobile Body Panels":
                Mobile_Body_Panels = True
            elif sub_sub_sub_cat == "Mobile Batteries":
                Mobile_Mobile_Batteries = True
            elif sub_sub_sub_cat == "Mobile Pouches":
                Mobile_Pouches = True
            elif sub_sub_sub_cat == "Mobile Spare Parts":
                Mobile_Spare_Parts = True
            elif sub_sub_sub_cat == "Mobile Cables":
                Mobile_Cables = True
            elif sub_sub_sub_cat == "Mobile Enhancements":
                Mobile_Enhancements = True
            elif sub_sub_sub_cat == "Charging Pads":
                Mobile_Charging_Pads = True
            elif sub_sub_sub_cat == "Styling & Maintenance":
                Mobile_Styling_Maintenance = True
            elif sub_sub_sub_cat == "Selfie Sticks":
                Mobile_Selfie_Sticks = True
            elif sub_sub_sub_cat == "SIM Adapters":
                Mobile_SIM_Adapters = True
            elif sub_sub_sub_cat == "Headphone Amplifiers":
                Mobile_Headphone_Amplifiers = True
            elif sub_sub_sub_cat == "Headphone Splitters":
                Mobile_Headphone_Splitters = True
            elif sub_sub_sub_cat == "Screen Gaurds":
                Mobile_Screen_Gaurds = True
            elif sub_sub_sub_cat == "Mobile Displays":
                Mobile_Displays = True
            elif sub_sub_sub_cat == "Mobile Phone Lens":
                Mobile_Phone_Lens = True
            elif sub_sub_sub_cat == "Charging Pad Receivers":
                Mobile_Charging_Pad_Receivers = True
            elif sub_sub_sub_cat == "Mobile Chargers":
                Mobile_Chargers = True
            elif sub_sub_sub_cat == "Headphone Cushions & Earbuds":
                Mobile_Headphone_Cushions_Earbuds = True
            elif sub_sub_sub_cat == "Anti Dust Plugs":
                Mobile_Anti_Dust_Plugs = True

        elif sub_sub_cat == 'Tablet Accessories':
            Tablet_Accessories = True
        elif sub_sub_cat == 'T-Shirt':
            Tshirt = True
        # Render for single product uploads
        if Single:
            return render(request,'Seller/Add-product-3.html',{
                'profile': profile,
                'Quantity':quantity,  # Quantity of the products
                'single':Single,     # For single listing
                'Mobiles':Mobiles,
                'Tablets':Tablets,
                'Tshirt':Tshirt,
                'Mobile_Accessories':Mobile_Accessories,

                'MobileCameraLensProtectors':MobileCameraLensProtectors,'Mobile_Accessories_CasesAndCover':Mobile_Accessories_CasesAndCover,'Mobile_PowerBanks':Mobile_PowerBanks,

                'Mobile_Smart_Keys':Mobile_Smart_Keys,'Mobile_Holders':Mobile_Holders,'Mobile_Body_Panels':Mobile_Body_Panels,

                'Mobile_Pouches':Mobile_Pouches,'Mobile_Spare_Parts':Mobile_Spare_Parts,

                'Mobile_Cables':Mobile_Cables,'Mobile_Enhancements':Mobile_Enhancements,

                'Mobile_Charging_Pads':Mobile_Charging_Pads,'Mobile_Styling_Maintenance':Mobile_Styling_Maintenance,'Mobile_Selfie_Sticks':Mobile_Selfie_Sticks,

                'Mobile_SIM_Adapters':Mobile_SIM_Adapters,'Mobile_Headphone_Amplifiers':Mobile_Headphone_Amplifiers,

                'Mobile_Headphone_Splitters':Mobile_Headphone_Splitters,'Mobile_Screen_Gaurds':Mobile_Screen_Gaurds,

                'Mobile_Displays':Mobile_Displays,'Mobile_Phone_Lens':Mobile_Phone_Lens,

                'Mobile_Charging_Pad_Receivers':Mobile_Charging_Pad_Receivers,

                'Mobile_Headphone_Cushions_Earbuds':Mobile_Headphone_Cushions_Earbuds,'Mobile_Chargers':Mobile_Chargers,

                'Mobile_Mobile_Batteries':Mobile_Mobile_Batteries,'Mobile_Anti_Dust_Plugs':Mobile_Anti_Dust_Plugs,

                'Tablet_Accessories':Tablet_Accessories,

            })
        else:
            return render(request,'Seller/Add-multi-product-3.html',{'profile': profile,
                'Quantity':quantity,  # Quantity of the products
                'Listing_quantity':[i for i in range(1,int(quantity)+1)],# For giving number of input rows for product
                'single':Single,     # For single listing
                'Mobiles':Mobiles,
                'Tablets':Tablets,
                'Tshirt':Tshirt,
                'Mobile_Accessories':Mobile_Accessories,

                'MobileCameraLensProtectors':MobileCameraLensProtectors,'Mobile_Accessories_CasesAndCover':Mobile_Accessories_CasesAndCover,'Mobile_PowerBanks':Mobile_PowerBanks,

                'Mobile_Smart_Keys':Mobile_Smart_Keys,'Mobile_Holders':Mobile_Holders,'Mobile_Body_Panels':Mobile_Body_Panels,

                'Mobile_Pouches':Mobile_Pouches,'Mobile_Spare_Parts':Mobile_Spare_Parts,

                'Mobile_Cables':Mobile_Cables,'Mobile_Enhancements':Mobile_Enhancements,

                'Mobile_Charging_Pads':Mobile_Charging_Pads,'Mobile_Styling_Maintenance':Mobile_Styling_Maintenance,'Mobile_Selfie_Sticks':Mobile_Selfie_Sticks,

                'Mobile_SIM_Adapters':Mobile_SIM_Adapters,'Mobile_Headphone_Amplifiers':Mobile_Headphone_Amplifiers,

                'Mobile_Headphone_Splitters':Mobile_Headphone_Splitters,'Mobile_Screen_Gaurds':Mobile_Screen_Gaurds,

                'Mobile_Displays':Mobile_Displays,'Mobile_Phone_Lens':Mobile_Phone_Lens,

                'Mobile_Charging_Pad_Receivers':Mobile_Charging_Pad_Receivers,

                'Mobile_Headphone_Cushions_Earbuds':Mobile_Headphone_Cushions_Earbuds,'Mobile_Chargers':Mobile_Chargers,

                'Mobile_Mobile_Batteries':Mobile_Mobile_Batteries,'Mobile_Anti_Dust_Plugs':Mobile_Anti_Dust_Plugs,

                'Tablet_Accessories':Tablet_Accessories})


    # Post requests
    else:
        Quantity = request.POST.get('Quantity')
        main_cat = request.POST.get('main_cat')
        sub_cat = request.POST.get('sub_cat')
        sub_sub_cat = request.POST.get('sub_sub_cat')
        sub_sub_sub_cat = request.POST.get('sub_sub_sub_cat')
        if Quantity =='1':
            product_name = request.POST.get('product_name')
            price = request.POST.get('price')
            discount_price = request.POST.get('discount_price')
            number_of_pieces = request.POST.get('number_of_pieces')
            product_brand = request.POST.get('product_brand')
            Product_weight = request.POST.get('Product_weight')
            Product_length = request.POST.get('Product_length')
            Product_breadth = request.POST.get('Product_breadth')
            Product_height = request.POST.get('Product_height')
            ProductImages = request.FILES.getlist('ProductImage[]')
            productimages=[]
            for imgs in ProductImages:
                productimages.append(imgs)
            Product_warranty = request.POST.get('Product_warranty')
            Product_warranty_summary = request.POST.get('Product_warranty_summary_value')
            Colors = request.POST.getlist('Colors[]')
            colors = []
            for clrs in Colors:
                colors.append(clrs)
            Product_description = request.POST.get('Product_description')
            stock = request.POST.get('Stock')
            Video_link = request.POST.get('Video_link')
            slug = create_random_unique_product_slug(product_name)
            product = Product.objects.create(
                user = request.user,
                UID = profile,
                slug = slug,
                Name = product_name,
                price = price,
                discount_price = discount_price,
                NumberOfPieces = number_of_pieces,
                Brand = product_brand,
                description = Product_description,
                main_category = main_cat,
                sub_category = sub_cat,
                sub_sub_category = sub_sub_cat,
                sub_sub_sub_category = sub_sub_sub_cat,
                Stock = stock,
                video = Video_link,
                weight_of_product = Product_weight,
                product_length = Product_length,
                product_breadth = Product_breadth,
                product_height = Product_height,
                Product_warranty = Product_warranty,
                Warranty_summary = Product_warranty_summary,

            )
            try:
                product.image = productimages[0]
                product.image1 = productimages[1]
                product.image2 = productimages[2]
                product.image3 = productimages[3]
                product.image4 = productimages[4]
                product.image5 = productimages[5]
                product.image6 = productimages[6]
                product.image7 = productimages[7]
                product.image8 = productimages[8]
                product.image9 = productimages[9]
            except:
                pass

            try:
                product.color = colors[0]
                product.color2 = colors[1]
                product.color3 = colors[2]
                product.color4 = colors[3]
                product.color5 = colors[4]
                product.color6 = colors[5]
                product.color7 = colors[6]
                product.color8 = colors[7]
                product.color9 = colors[8]
                product.color10 = colors[9]
                product.color11 = colors[10]
                product.color12 = colors[11]
            except:
                pass

            product.save()
            profile.products.add(product)

        # For Multi Product Upload
        else:

            for i in range(1,int(Quantity)+1):
                str_i = str(i)
                product_name = request.POST.get('product_name_'+str_i)
                price = request.POST.get('price_'+str_i)
                discount_price = request.POST.get('discount_price_'+str_i)
                number_of_pieces = request.POST.get('number_of_pieces_'+str_i)
                product_brand = request.POST.get('product_brand_'+str_i)
                Product_images = request.FILES.getlist('ProductImage_'+str_i+'[]')
                Product_images_array = []
                for imgs in Product_images:
                    Product_images_array.append(imgs)
                Stock = request.POST.get('Stock_'+str_i)
                Product_description = request.POST.get('Product_description_'+str_i)
                colors = request.POST.getlist('Colors_'+str_i+'[]')
                colors_array = []
                for color in colors:
                    colors_array.append(color)
                Video_link = request.POST.get('Video_link_'+str_i)
                slug = create_random_unique_product_slug(product_name)
                product = Product.objects.create(
                    user=request.user,
                    UID=profile,
                    slug=slug,
                    Name=product_name,
                    price=price,
                    discount_price=discount_price,
                    NumberOfPieces=number_of_pieces,
                    Brand=product_brand,
                    description=Product_description,
                    main_category=main_cat,
                    sub_category=sub_cat,
                    sub_sub_category=sub_sub_cat,
                    sub_sub_sub_category=sub_sub_sub_cat,
                    Stock=Stock,
                    video= Video_link
                )
                try:
                    product.image = Product_images_array[0]
                    product.image1 = Product_images_array[1]
                    product.image2 = Product_images_array[2]
                    product.image3 = Product_images_array[3]
                    product.image4 = Product_images_array[4]
                    product.image5 = Product_images_array[5]
                    product.image6 = Product_images_array[6]
                    product.image7 = Product_images_array[7]
                    product.image8 = Product_images_array[8]
                    product.image9 = Product_images_array[9]
                except:
                    pass

                try:
                    product.color = colors[0]
                    product.color2 = colors[1]
                    product.color3 = colors[2]
                    product.color4 = colors[3]
                    product.color5 = colors[4]
                    product.color6 = colors[5]
                    product.color7 = colors[6]
                    product.color8 = colors[7]
                    product.color9 = colors[8]
                    product.color10 = colors[9]
                    product.color11 = colors[10]
                    product.color12 = colors[11]
                except:
                    pass

                product.save()
                profile.products.add(product)
        return redirect('Seller:dashboard')


@login_required
def Delete_Product(request):
    if request.method =='GET':
        profile = SellerProfile.objects.get(user=request.user)
        products = Product.objects.filter(user = request.user)
        return render(request,'Seller/Delete-product.html',{
            'MyProducts':products,
            'profile':profile,
        })
    else:
        delete_product = request.POST.getlist('DeleteProduct[]')
        for i in delete_product:
            product = Product.objects.filter(slug=i)
            product.delete()
        return redirect("Seller:dashboard")

@login_required
def Order_history(request):
    profile = SellerProfile.objects.get(user=request.user)
    PreOrders = Order_Item.objects.filter(items__UID = profile)
    Orders=[]
    for items in PreOrders:
        if items.shipped ==True and items.delivered == True:
            Orders.append(items)
    return render(request,'Seller/Order-history.html',{
        'profile':profile,
        'Orders':Orders,
    })

# View for orders
@login_required
def Ordered_products(request):
    profile = SellerProfile.objects.get(user=request.user)
    PreOrders = Order_Item.objects.filter(items__UID = profile)
    Orders = PreOrders.filter(ordered=True,delivered=False)

    return render(request,'Seller/My-orders.html',{
        'profile':profile,
        'Orders':Orders,
    })

# Function to set the Order_item dispatched == True || Some more stuff to be done so that the user can prepare or acknowledge the order and order gets removed from My Orders
@login_required
def Dispatch_item(request,id):
    order_item = Order_Item.objects.get(unique_id=id)
    order_item.shipped = True
    order_item.save()
    return redirect('Seller:orders')

@login_required
def refund_requests(request):
    profile = SellerProfile.objects.get(user=request.user)
    PreOrders = Order_Item.objects.filter(items__UID=profile)
    requested_orders = []
    for items in PreOrders:
        if items.refund_requested==True and items.refund_granted==False:
            requested_orders.append(items)

    return render(request,'Seller/refunds-requested.html',{
        'requested_orders':requested_orders,
    })

@login_required
def returns(request):
    profile = SellerProfile.objects.get(user=request.user)
    PreOrders = Order_Item.objects.filter(items__UID=profile)
    returned_orders = []
    for items in PreOrders:
        if items.refund_granted==True:
            returned_orders.append(items)

    return render(request,'Seller/returns.html',{
        'returned_orders':returned_orders,
    })

# My products
@login_required
def My_products(request):
    profile = SellerProfile.objects.get(user=request.user)
    products = Product.objects.filter(user=request.user)
    return render(request,'Seller/seller_my_products.html',{
        'products':products,
    })


def Bank_details(request):
    return render(request,'Seller/seller_bank_details.html',{})