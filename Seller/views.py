#
# Pending
# Automatically reduce the number or quantity of items when they are purchased and show out of stock when they are finished

from django.shortcuts import render, get_object_or_404 ,redirect,reverse,HttpResponse
from django.views.generic import ListView,DetailView, View
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.template.defaultfilters import slugify
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import SellerProfile,Market,Mall
from Base.models import Product,Order,Order_Item
from .forms import AddProduct
import datetime,calendar
from Base.models import Order_Item

# creating random and unique slug for items upload
import random,string
# this is for explore slugs
def create_random_unique_slug():
    slug = 'UNIM'+str(random.randint(0,999999))
    return slug

def create_random_unique_product_slug(name):
    slug = "_".join(name.split())+'_' + str(random.randint(0, 99999))
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
@login_required
def ProfileView(request):
        try:
            profile = SellerProfile.objects.get(user = request.user)
            Seller = True
        except SellerProfile.DoesNotExist:
            messages.error(request,"Your account is not a Seller Account !")
            return redirect("Base:Homepage")
        products = profile.products.all()
        if products.count() == 0:
            Noproduct = True
        else:
            Noproduct=False
        # My Orders
        Orders = profile.My_orders.all()
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
    Orders = profile.My_orders.all()
    day = datetime.date.today()
    products = profile.products.all()
    if request.method == 'GET':
        return render(request, 'Seller/seller_profile_edit.html', {
            'profile': profile,
            'products': products,
            'today': day,
            'orders': Orders,

        })
    else:
        if request.POST['name_of_owner']:
            name_of_owner = request.POST['name_of_owner']
        if request.FILES.get('photo_of_owner', False):
            photo_of_owner = request.FILES['photo_of_owner']
            profile.photo_of_owner = photo_of_owner
        if request.POST['alternate_number']:
            alternate_number = request.POST['alternate_number']
            profile.alternate_number = alternate_number
        if request.POST['name']:
            name = request.POST['name']
            profile.name = name
        if request.POST['address']:
            address = request.POST['address']
            profile.address = address
        if request.FILES.get('shop_photo1', False):
            shop_photo1 = request.FILES['shop_photo1']
            profile.shop_photo1 = shop_photo1
        if request.FILES.get('shop_photo2', False):
            shop_photo2 = request.FILES['shop_photo2']
            profile.shop_photo2 = shop_photo2
        if request.FILES.get('shop_photo3', False):
            shop_photo3 = request.FILES['shop_photo3']
            profile.shop_photo3 = shop_photo3
        if request.FILES.get('shop_photo4', False):
            shop_photo4 = request.FILES['shop_photo4']
            profile.shop_photo4 = shop_photo4
        if request.FILES.get('shop_photo5', False):
            shop_photo5 = request.FILES['shop_photo5']
            profile.shop_photo5 = shop_photo5

        profile.name_of_owner = name_of_owner
        profile.save()
        return redirect('Seller:dashboard')


@login_required
def AddProductView(request):
        form = AddProduct()
        try:
            profile = SellerProfile.objects.get(user=request.user)
            Seller = True
        except SellerProfile.DoesNotExist:
            messages.error(request, "Your account is not a Seller Account !")
            return redirect("Base:Homepage")
        products = profile.products.all()
        if products.count() == 0:
            Noproduct = True
        else:
            Noproduct = False
        day = datetime.date.today()
        # My Orders
        Orders = profile.My_orders.all()
        content = {
            'profile':profile,
            'form':form,
            'products':products,
            'Seller':Seller,
            'orders':Orders,
            'today':day,
            'Noproduct':Noproduct,
        }
        return render(request , 'Seller/Add-product.html',content)

@login_required
def AddProduct2(request):
    try:
        profile = SellerProfile.objects.get(user=request.user)
        Seller = True
    except SellerProfile.DoesNotExist:
        messages.error(request, "Your account is not a Seller Account !")
        return redirect("Base:Homepage")
    products = profile.products.all()
    if products.count() == 0:
        Noproduct = True
    else:
        Noproduct = False
    day = datetime.date.today()
    # My Orders
    Orders = profile.My_orders.all()
    return render(request,'Seller/Add-product-2.html',{
        'profile': profile,
        'products': products,
        'Seller': Seller,
        'orders': Orders,
        'today': day,
        'Noproduct': Noproduct,
    })

@login_required
def AddProduct3(request):
    try:
        profile = SellerProfile.objects.get(user=request.user)
        Seller = True
    except SellerProfile.DoesNotExist:
        messages.error(request, "Your account is not a Seller Account !")
        return redirect("Base:Homepage")
    products = profile.products.all()
    if products.count() == 0:
        Noproduct = True
    else:
        Noproduct = False
    day = datetime.date.today()
    # My Orders
    Orders = profile.My_orders.all()

    if request.method=='GET':
        quantity = request.GET.get('Quantity')
        main_cat = request.GET.get('main_cat')
        sub_cat = request.GET.get('sub_cat')
        sub_sub_cat = request.GET.get('sub_sub_cat')
        sub_sub_sub_cat = request.GET.get('sub_sub_sub_cat')
        Single = False

        if quantity == '1':
            Single = True

        # Render for single product uploads
        if Single:
            return render(request,'Seller/Add-product-3.html',{
                'products': products,
                'Seller': Seller,
                'orders': Orders,
                'today': day,
                'Noproduct': Noproduct,

                'profile': profile,
                'Quantity':quantity,  # Quantity of the products
                'single':Single,     # For single listing

            })
        else:
            return render(request,'Seller/Add-multi-product-3.html',{
                'profile': profile,
                 'products': products,
                 'Seller': Seller,
                 'orders': Orders,
                 'today': day,
                 'Noproduct': Noproduct,
                'Quantity':quantity,  # Quantity of the products
                'Listing_quantity':[i for i in range(1,int(quantity)+1)],# For giving number of input rows for product
                'single':Single,     # For single listing
               })


    # Post request
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
                Product_weight = request.POST.get('Package_Weight_'+str_i)
                Product_length = request.POST.get('Package_Length_'+str_i)
                Product_breadth = request.POST.get('Package_Breath_'+str_i)
                Product_height = request.POST.get('Package_Height_'+str_i)
                Product_warranty = request.POST.get('Product_warranty_'+str_i)
                Product_warranty_summary = request.POST.get('Product_warranty_summary_value_'+str_i)
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
                    video= Video_link,
                    weight_of_product = Product_weight,
                    product_length = Product_length,
                    product_breadth = Product_breadth,
                    product_height = Product_height,
                    Product_warranty = Product_warranty,
                    Warranty_summary = Product_warranty_summary,

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
        try:
            profile = SellerProfile.objects.get(user=request.user)
            Seller = True
        except SellerProfile.DoesNotExist:
            messages.error(request, "Your account is not a Seller Account !")
            return redirect("Base:Homepage")
        products = profile.products.all()
        Orders = profile.My_orders.all()
        if products.count() == 0:
            Noproduct = True
        else:
            Noproduct = False
        day = datetime.date.today()
        return render(request,'Seller/Delete-product.html',{
            'MyProducts':products,
            'profile':profile,
            'Seller': Seller,
            'orders': Orders,
            'today': day,
            'Noproduct': Noproduct,
        })
    else:
        delete_product = request.POST.getlist('DeleteProduct[]')
        for i in delete_product:
            product = Product.objects.filter(slug=i)
            product.delete()
        return redirect("Seller:dashboard")

@login_required
def Order_history(request):
    try:
        profile = SellerProfile.objects.get(user=request.user)
        Seller = True
    except SellerProfile.DoesNotExist:
        messages.error(request, "Your account is not a Seller Account !")
        return redirect("Base:Homepage")
    products = profile.products.all()
    Orders = profile.Order_history.all().order_by('date_of_order')
    if products.count() == 0:
        Noproduct = True
    else:
        Noproduct = False
    day = datetime.date.today()
    return render(request,'Seller/Order-history.html',{
        'profile':profile,
        'Orders':profile.Order_history.all(),
        'products': products,
        'Seller': Seller,
        'orders': Orders,
        'today': day,
        'Noproduct': Noproduct,
    })

# View for orders
@login_required
def Ordered_products(request):
    try:
        profile = SellerProfile.objects.get(user=request.user)
        Seller = True
    except SellerProfile.DoesNotExist:
        messages.error(request, "Your account is not a Seller Account !")
        return redirect("Base:Homepage")
    day = datetime.date.today()
    # My Orders
    Orders = profile.My_orders.all()
    products = profile.products.all()
    if products.count() == 0:
        Noproduct = True
    else:
        Noproduct = False
    return render(request,'Seller/My-orders.html',{
        'profile':profile,
        'orders':Orders,
        'today':day,
        'products':products,
        'Noproduct':Noproduct,
        'Seller':Seller

    })

# Function to set the Order_item dispatched == True using ajax
@login_required
def Dispatch_item(request,id):
    profile = SellerProfile.objects.get(user=request.user)
    order_item = Order_Item.objects.get(unique_id=id)
    order_item.shipped = True
    profile.My_orders.remove(order_item)
    order_item.save()
    return HttpResponse('Item Dispatched')

@login_required
def refund_requests(request):
    try:
        profile = SellerProfile.objects.get(user=request.user)
        Seller = True
    except SellerProfile.DoesNotExist:
        messages.error(request, "Your account is not a Seller Account !")
        return redirect("Base:Homepage")
    day = datetime.date.today()
    # My Orders
    Orders = profile.Order_history.all()
    products = profile.products.all()
    if products.count() == 0:
        Noproduct = True
    else:
        Noproduct = False
    return render(request, 'Seller/refunds-requested.html', {
        'profile': profile,
        'orders': Orders,
        'today': day,
        'products': products,
        'Noproduct': Noproduct,
        'Seller': Seller

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
    try:
        profile = SellerProfile.objects.get(user=request.user)
        Seller = True
    except SellerProfile.DoesNotExist:
        messages.error(request, "Your account is not a Seller Account !")
        return redirect("Base:Homepage")
    products = profile.products.all()
    if products.count() == 0:
        Noproduct = True
    else:
        Noproduct = False
    day = datetime.date.today()
    # My Orders
    Orders = profile.My_orders.all()
    return render(request,'Seller/seller_my_products.html',{
        'products':products,
        'profile':profile,
        'today':day,
        'orders':Orders,
        'Seller':Seller,
        'Noproduct':Noproduct
    })

# My Mall
@login_required
def My_Mall(request):
    try:
        profile = SellerProfile.objects.get(user=request.user)
        Seller = True
    except SellerProfile.DoesNotExist:
        messages.error(request, "Your account is not a Seller Account !")
        return redirect("Base:Homepage")
    products = profile.products.all()
    if products.count() == 0:
        Noproduct = True
    else:
        Noproduct = False
    # My Orders
    Orders = profile.My_orders.all()
    day = datetime.date.today()
    # All Malls
    Malls = Mall.objects.all()
    Markets = Market.objects.all()
    content = {
        'profile': profile,
        'products': products,
        'Seller': Seller,
        'Noproduct': Noproduct,
        'today': day,
        'orders': Orders,
        'Malls':Malls,
        'Markets':Markets
    }
    return render(request,'Seller/My_Mall.html',content)


# My Mall
@login_required
def My_Market(request):
    try:
        profile = SellerProfile.objects.get(user=request.user)
        Seller = True
    except SellerProfile.DoesNotExist:
        messages.error(request, "Your account is not a Seller Account !")
        return redirect("Base:Homepage")
    products = profile.products.all()
    if products.count() == 0:
        Noproduct = True
    else:
        Noproduct = False
    # My Orders
    Orders = profile.My_orders.all()
    day = datetime.date.today()
    # All Malls
    Malls = Mall.objects.all()
    Markets = Market.objects.all()
    content = {
        'profile': profile,
        'products': products,
        'Seller': Seller,
        'Noproduct': Noproduct,
        'today': day,
        'orders': Orders,
        'Malls':Malls,
        'Markets':Markets
    }
    return render(request,'Seller/My_Market.html',content)
# To add New Market
def Add_New_Market(request):
    if request.method =='GET':
        try:
            profile = SellerProfile.objects.get(user=request.user)
            Seller = True
        except SellerProfile.DoesNotExist:
            messages.error(request, "Your account is not a Seller Account !")
            return redirect("Base:Homepage")
        products = profile.products.all()
        if products.count() == 0:
            Noproduct = True
        else:
            Noproduct = False
        # My Orders
        Orders = profile.My_orders.all()
        day = datetime.date.today()
        return render(request,'Seller/Add_New_Market.html',{
            'profile': profile,
            'products': products,
            'Seller': Seller,
            'Noproduct': Noproduct,
            'today': day,
            'orders': Orders,
        })
        # For post request
    else:
        Name = request.POST['Name']
        Area = request.POST['Area']
        District = request.POST['District']
        State = request.POST['State']
        shop_photo1 = request.FILES['shop_photo1']
        shop_photo2 = request.FILES['shop_photo2']
        New_Market = Market(
            name=Name,
            Area=Area,
            district=District,
            state=State,
            unique_id=str(random.randint(0, 999999))+"_".join(Name.split()),
            shop_photo1=shop_photo1,
            shop_photo2=shop_photo2
        )
        New_Market.save()
        if request.FILES.get('shop_photo3', False):
            shop_photo3 = request.FILES['shop_photo3']
            New_Market.shop_photo3 = shop_photo3
        if request.FILES.get('shop_photo4', False):
            shop_photo4 = request.FILES['shop_photo4']
            New_Market.shop_photo4 = shop_photo4
        if request.FILES.get('shop_photo5', False):
            shop_photo5 = request.FILES['shop_photo5']
            New_Market.shop_photo5 = shop_photo5
        if request.FILES.get('shop_photo6', False):
            shop_photo6 = request.FILES['shop_photo6']
            New_Market.shop_photo6 = shop_photo6
        if request.FILES.get('shop_photo7', False):
            shop_photo7 = request.FILES['shop_photo7']
            New_Market.shop_photo7 = shop_photo7
        if request.FILES.get('shop_photo8', False):
            shop_photo8 = request.FILES['shop_photo8']
            New_Market.shop_photo8 = shop_photo8
        if request.FILES.get('shop_photo9', False):
            shop_photo9 = request.FILES['shop_photo9']
            New_Market.shop_photo9 = shop_photo9
        if request.FILES.get('shop_photo10', False):
            shop_photo10 = request.FILES['shop_photo10']
            New_Market.shop_photo10 = shop_photo10
        New_Market.save()
        messages.success(request, 'Congratulation , Market has been added successfully :)')
        return redirect('Seller:my-market')
# To add New Mall
def Add_New_Mall(request):
    if request.method =='GET':
        try:
            profile = SellerProfile.objects.get(user=request.user)
            Seller = True
        except SellerProfile.DoesNotExist:
            messages.error(request, "Your account is not a Seller Account !")
            return redirect("Base:Homepage")
        products = profile.products.all()
        if products.count() == 0:
            Noproduct = True
        else:
            Noproduct = False
        # My Orders
        Orders = profile.My_orders.all()
        day = datetime.date.today()
        return render(request,'Seller/Add_New_Mall.html',{
            'profile': profile,
            'products': products,
            'Seller': Seller,
            'Noproduct': Noproduct,
            'today': day,
            'orders': Orders,
        })
    # For post request
    else:
        Name = request.POST['Name']
        Area = request.POST['Area']
        District = request.POST['District']
        State = request.POST['State']
        shop_photo1 = request.FILES['shop_photo1']
        shop_photo2 = request.FILES['shop_photo2']
        New_Mall = Mall(
            name = Name,
            Area = Area,
            district = District,
            state = State,
            unique_id = str(random.randint(0,999999))+"_".join(Name.split()),
            shop_photo1 = shop_photo1,
            shop_photo2 = shop_photo2
        )
        New_Mall.save()
        if request.FILES.get('shop_photo3', False):
            shop_photo3 = request.FILES['shop_photo3']
            New_Mall.shop_photo3 = shop_photo3
        if request.FILES.get('shop_photo4', False):
            shop_photo4 = request.FILES['shop_photo4']
            New_Mall.shop_photo4 = shop_photo4
        if request.FILES.get('shop_photo5', False):
            shop_photo5 = request.FILES['shop_photo5']
            New_Mall.shop_photo5 = shop_photo5
        if request.FILES.get('shop_photo6', False):
            shop_photo6 = request.FILES['shop_photo6']
            New_Mall.shop_photo6 = shop_photo6
        if request.FILES.get('shop_photo7', False):
            shop_photo7 = request.FILES['shop_photo7']
            New_Mall.shop_photo7 = shop_photo7
        if request.FILES.get('shop_photo8', False):
            shop_photo8 = request.FILES['shop_photo8']
            New_Mall.shop_photo8 = shop_photo8
        if request.FILES.get('shop_photo9', False):
            shop_photo9 = request.FILES['shop_photo9']
            New_Mall.shop_photo9 = shop_photo9
        if request.FILES.get('shop_photo10', False):
            shop_photo10 = request.FILES['shop_photo10']
            New_Mall.shop_photo10 = shop_photo10
        New_Mall.save()
        messages.success(request,'Congratulation , Mall has been added successfully :)')
        return redirect('Seller:my-mall')