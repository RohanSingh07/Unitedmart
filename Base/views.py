# Pending
# 1. Take Care of anonymous users , Admin and non admins , Seller and Non sellers.
from django.shortcuts import render
from .models import Product, Order_Item, Order, Delivery_Address,Wishlist,saved_order,rating_and_reviews,rating_images,MyOrders
from django.views.generic import ListView, DetailView, View
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect,reverse
from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponseRedirect,HttpResponse,JsonResponse
from datetime import datetime,date

from . import  models
from Seller.views import create_random_unique_product_slug
# make a validation to check whether the entered data in the form is empty or not

def is_valid_form(values):
    valid = True
    for fields in values:
        if fields == '':
            valid = False
    return valid

def Home(request):
    # for order info
    try:
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order=order_qs[0]
        else:
            order=False
    except :
        order=False
    content = {
        'products': Product.objects.all(),
        'order':order
    }
    return render(request, 'Base/Home_main.html', content)


# for this we will be using slugs or key in the urls
def Product_Detail(request, slug):
    object = get_object_or_404(Product, slug=slug)
    # for order info
    try:
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order=order_qs[0]
        else:
            order=False
    except :
        order=False
    reviews=object.ratings_and_reviews.all()
    overall=object.overall_rating
    content = {
        'object': object,
        'order': order,
        'reviews':reviews,
        'overall':overall,
    }
    return render(request, 'Base/product-page.html', content)


# ratings and reviews page of product
def reviews_page(request):
    return render(request,'Base/ratings_and_reviews.html',{})

# add review to product
def add_review(request,slug):
    product=get_object_or_404(Product, slug=slug)# call 1
    if request.method=='GET':
        return render(request,'Base/add_review.html', {})
    else:
        rating=request.POST['stars']
        review=request.POST['review']
        images=request.FILES.getlist('img[]') # for getting files from a post form with enctype = multiple/form-data
        rat_and_rev =rating_and_reviews(
                user=request.user,
                rating=rating,
                review=review,
        )
        rat_and_rev.save()
        for img in images:
            temp_img = rating_images(
                image_to=rat_and_rev,
                image=img)
            temp_img.save()
            rat_and_rev.photos.add(temp_img)
        product.ratings_and_reviews.add(rat_and_rev)
        # Updating review
        reviews = product.ratings_and_reviews.all()  # call3
        sum = 0
        for r in reviews:
            sum += r.rating
        overall = sum / int(product.ratings_and_reviews.count())
        overall = round(overall, 2)
        # Updating the overall_rating of the product
        product.overall_rating = overall
        product.save()
        messages.success(request,'Thank you for adding your valuable review :)')
        return redirect(reverse(('Base:product-page'),kwargs={
            'slug':product.slug
                             }))

@login_required
def add_to_cart(request, slug):
    # Get the item by its slug or pk value
    item = get_object_or_404(Product, slug=slug)
    # Make order Item
    order_item, created = Order_Item.objects.get_or_create(
        user=request.user,
        items=item,
        ordered=False,
    )
    # Check if the order already exists or not
    order_qs = Order.objects.filter(user=request.user,
                                    ordered=False)
    if order_qs.exists():
        order = order_qs[
            0]  # The first thing in the query is the object,second is true(exists) or False(does not exist)
        if order.items.filter(
                items__slug=item.slug).exists():  # If the order_item already exists in the order then update its quantity
            order_item.quantity += 1
            order_item.save()
        else:
            order.items.add(order_item)  # else add the order_item in the order
        return JsonResponse(order.items.count(),safe=False) # then redirect to the checkout-summary page
    else:
        order = Order.objects.create(user=request.user)  # create a new order and pass the user
        order.items.add(order_item)
        return JsonResponse(order.items.count(),safe=False)


@login_required
def remove_from_cart(request, slug):
    # Get order Item
    order_item = Order_Item.objects.get(
        user=request.user,
        items__slug=slug,
        ordered=False
    )
    if order_item.quantity > 1:
        order_item.quantity -= 1
        order_item.save()
    else:
        order_item.delete() # delete the order_item from database
    return redirect("Base:Cart")  # then redirect to the checkout-summary page

# deleting item from cart
@login_required
def delete_from_cart(request, slug):
    # Get order Item
    order_item = Order_Item.objects.get(
        user=request.user,
        items__slug=slug,
        ordered=False
    )
    order_item.delete()
    return redirect("Base:Cart")  # then redirect to the checkout-summary page
@login_required
def Cart(request):
        # for order info
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order = order_qs[0]
        else:
            order=False
        # For saved Orders
        saved_qs = saved_order.objects.filter(user=request.user)
        if saved_qs.exists():
            saved = saved_qs[0]
        else:
            saved = False
        saved_amount = 0
        content={
            'order':order,
            'saved_amount':saved_amount,
            'saved':saved
        }
        return render(request, "Base/Cart.html", content)

# adding items to saved
@login_required
def add_to_saved(request,id):
    order_item = Order_Item.objects.get(unique_id=id)
    order_item.quantity=1
    order_item.save()
    order = Order.objects.get(user=request.user,ordered=False)
    order.items.remove(order_item)
    order.save()
    saved_qs = saved_order.objects.filter(user=request.user)
    if saved_qs.exists():
        Saved=saved_qs[0]
    else:
        Saved=saved_order(user=request.user)
        Saved.save()
    Saved.items.add(order_item)
    Saved.save()
    return redirect("Base:Cart")

# deleting order item from saved
@login_required
def delete_from_saved(request,id):
    # for saved item deletion
    order_item=Order_Item.objects.get(user=request.user,unique_id=id,ordered=False)
    saved_qs = saved_order.objects.filter(user=request.user)
    if saved_qs.exists():
        saved=saved_qs[0]
        saved.items.remove(order_item)
        order_item.delete()
        saved.save()
    return redirect("Base:Cart")

# for moving order item from save for later to Cart
def move_to_cart(request,id):
    order_item = Order_Item.objects.get(user=request.user, unique_id=id, ordered=False)
    order_qs = Order.objects.filter(user=request.user, ordered=False)
    if order_qs.exists():
        order= order_qs[0]
    else:
        order = Order.objects.create(user=request.user)
        order.save()
    order.items.add(order_item)
    saved = saved_order.objects.get(user=request.user)
    saved.items.remove(order_item)
    return redirect("Base:Cart")
from Seller.models import SellerProfile
@login_required
def Checkout(request):
    order = Order.objects.get(user=request.user, ordered=False)
    try:
        my_orders = MyOrders.objects.get(user=request.user)
    except:
        my_orders = MyOrders(user=request.user)
        my_orders.save()
    if request.method=='GET':
        content = {
            'order': order,
        }
        return render(request, 'Base/Checkout.html', content)
    else:
        name = request.POST.get('Name')
        mobile_number = request.POST.get('Mobile')
        zip_code = request.POST.get('Zip')
        locality = request.POST.get('Locality')
        address = request.POST.get('Address')
        district = request.POST.get('District')
        state = request.POST.get('State')
        landmark = request.POST.get('Landmark')
        alternate_number = request.POST.get('Alternate')
        email = request.POST.get('email')
        Address = Delivery_Address(
            user=request.user,
            name=name,
            mobile_number=mobile_number,
            zip_code=zip_code,
            locality=locality,
            address=address,
            district=district,
            state=state,
            landmark=landmark,
            alternate_number=alternate_number,
        )
        Address.save()
        order.Address = Address
        order.email = email
        order.ordered=True
        order.save()  # save the order

        for order_items in order.items.all():
            order_items.ordered=True # Set order =True
            order_items.date_of_order = date.today() # Date or ordering
            order_items.items.UID.Earning +=order_items.get_total_discount_item_price() # Increase the Earning of the seller
            order_items.items.UID.sales+=order_items.quantity # Increse the quantity of the products sold by seller
            order_items.items.UID.My_orders.add(order_items) # Add this order items to seller my_orders
            order_items.items.UID.Order_history.add(order_items)  # Add this order items to seller my_orders
            order_items.order_to = order
            my_orders.items.add(order_items) # Add order_items to buyer order history
            order_items.save()
            order_items.items.UID.save()
        messages.success(request,' Congratulations ! Your order has been placed ')
        return redirect('Base:Homepage')



# order info for base.html

# Search functionality
from elasticsearch_dsl.query import MultiMatch
from elasticsearch_dsl import Search
from elasticsearch import Elasticsearch
from .documents import Products_Document ,Market_Document,Mall_Document,SellerProfile_Document

# Searching
# for sorting the product item in ascending order
def sorting_price_ascending(queryset):
    def quicksort(arr, start, end):
        '''Sorts the list from indexes start to end - 1 inclusive.'''
        if end - start > 1:
            p = partition(arr, start, end)
            quicksort(arr, start, p)
            quicksort(arr, p + 1, end)

    def partition(arr, start, end):
        pivot = arr[start]
        i = start + 1
        j = end - 1

        while True:
            while (i <= j and arr[i].discount_price <= pivot.discount_price):
                i = i + 1
            while (i <= j and arr[j].discount_price >= pivot.discount_price):
                j = j - 1

            if i <= j:
                arr[i], arr[j] = arr[j], arr[i]
            else:
                arr[start], arr[j] = arr[j], arr[start]
                return j
    quicksort(queryset,0,len(queryset))



# for sorting the product in descending order
def sorting_price_descending(queryset):
    def quicksortd(arr, start, end):
        '''Sorts the list from indexes start to end - 1 inclusive.'''
        if end - start > 1:
            p = partitiond(arr, start, end)
            quicksortd(arr, start, p)
            quicksortd(arr, p + 1, end)

    def partitiond(arr, start, end):
        pivot = arr[start]
        i = start + 1
        j = end - 1

        while True:
            while (i <= j and arr[i].discount_price >= pivot.discount_price):
                i = i + 1
            while (i <= j and arr[j].discount_price <= pivot.discount_price):
                j = j - 1

            if i <= j:
                arr[i], arr[j] = arr[j], arr[i]
            else:
                arr[start], arr[j] = arr[j], arr[start]
                return j
    quicksortd(queryset,0,len(queryset))

# For sorting the products in ascending order of dates
def NewestArrivals(queryset):
    def quicksort(arr, start, end):
        '''Sorts the list from indexes start to end - 1 inclusive.'''
        if end - start > 1:
            p = partition(arr, start, end)
            quicksort(arr, start, p)
            quicksort(arr, p + 1, end)

    def partition(arr, start, end):
        pivot = arr[start]
        i = start + 1
        j = end - 1

        while True:
            while (i <= j and datetime.strptime(str(arr[i].date),'%Y-%m-%d') >= datetime.strptime(str(pivot.date),'%Y-%m-%d')): # dates.sort(key = lambda date: datetime.strptime(date, '%d %b %Y'))
                i = i + 1
            while (i <= j and datetime.strptime(str(arr[i].date),'%Y-%m-%d') <= datetime.strptime(str(pivot.date),'%Y-%m-%d')):
                j = j - 1

            if i <= j:
                arr[i], arr[j] = arr[j], arr[i]
            else:
                arr[start], arr[j] = arr[j], arr[start]
                return j
    quicksort(queryset,0,len(queryset))

def searchbar(request):
    if request.method == 'GET':
        # for order info
        try:
            order_qs = Order.objects.filter(user=request.user, ordered=False)
            if order_qs.exists():
                order = order_qs[0]
            else:
                order = False
        except:
            order = False
        q = request.GET.get('q')
        if q!='':

            s = Products_Document.search().query("multi_match", query=q,
                                                  fields=["Name", "main_category","sub_category","sub_sub_category","sub_sub_sub_category",
                                                          "description", "Brand"],
                                                 fuzziness="AUTO",
                                                 ).params(request_timeout=60)
            r_shops =  SellerProfile_Document.search().query("multi_match",query=q,
                                                             fields=['name','unique_id','Area','district','state'],
                                                             fuzziness="AUTO",).params(request_timeout=60)
            r_malls = Mall_Document.search().query("multi_match",query=q,
                                                   fields=['name','unique_id','Area','district','state'],
                                                   fuzziness="AUTO").params(request_timeout=60)
            r_markets = Market_Document.search().query("multi_match",query=q,
                                                   fields=['name','unique_id','Area','district','state'],
                                                   fuzziness="AUTO").params(request_timeout=60)

            base = list(s.to_queryset())

            # Apply filters
            Brands=[] # Base for brands
            Colors=[] # Base for Colors
            # Product based filter
            # T shirt
            Fit = []
            Pattern=[]
            Neck_type=[]
            Sleeve_type=[]
            Theme = []
            Fabric=[]
            occasion=[]
            Collar =[]
            type =[]
            Distress=[]
            Fade = []
            Waist_rise = []
            heel_height = []
            Length = []
            Closure = []
            Sleeve_style =[]
            usage =[]
            Hooded = []
            Ornamentation =[]
            Styling =[]
            Suitable_for=[]
            Applied_for=[]
            Hair_type=[]
            Pack_of=[]
            Washable=[]
            Water_resistance=[]
            Rise=[]
            Straps=[]
            Wire_support=[]
            Padding=[]
            Seam=[]
            Coverage=[]
            Back_style=[]
            Dial_color=[]
            Features=[]
            Dial_shape=[]
            Strap_material=[]
            Number_of_compartments=[]
            Material=[]
            Bag_size=[]
            wheels=[]
            body_type=[]
            capacity=[]
            card_slot=[]
            Strap_color=[]
            Compatible_OS=[]
            Display_type=[]
            Gemstones=[]
            Gender=[]
            Blade_material=[]
            Battery_run_time=[]
            Body_material=[]
            Plate_coating=[]
            Wattage=[]
            Collection=[]
            Ring_size=[]
            Dress_length=[]
            Length_type=[]
            Saree_type=[]
            Saree_style=[]
            Saree_length=[]
            Blouse_included=[]
            Saree_Fall_length=[]
            Saree_Fall_width=[]
            Dupatta_included=[]
            Rechargeable=[]
            Battery_operated=[]
            Character=[]
            Thermoware=[]
            Age_group=[]
            Pot_included=[]
            Bonsai=[]
            Outer_material=[]
            Towel_type=[]
            Reversible=[]
            width=[]
            Shape=[]
            Microwave_safe=[]
            Showpiece_type=[]
            No_of_prongs=[]
            Fragrance=[]
            Quantity=[]
            Form=[]
            Light_used=[]
            adjustable=[]
            Mount_type=[]
            Bulb_included=[]
            Dimmable=[]
            Foldable=[]
            Adjustable_height=[]
            Mouse_tray=[]
            Height=[]
            Storage_included=[]
            Separated=[]
            Weight=[]
            Heart_rate_sensor=[]
            Design=[]
            Diameter=[]
            Contains_pump=[]
            Thickness=[]
            Grip=[]
            Playing_level=[]
            Strung_type=[]
            Cover_type=[]
            Grip_size=[]
            Head_size=[]
            Speed=[]
            Willow_type=[]
            Bat_grade=[]
            Cover=[]
            Visor=[]
            Bails_included=[]
            Fill_type=[]
            Tyre_size=[]
            Gear_type=[]
            Rear_brake=[]
            Front_brake=[]
            Playback_mode=[]
            Accessory_holder=[]
            Rod_power=[]
            Rod_type=[]
            Rod_action=[]
            Handle_material=[]
            Construction=[]
            Drag_type=[]
            Container_type=[]
            Edge_type=[]
            Sheath=[]
            Coated=[]
            Finish=[]
            Attachment_type=[]
            Auto_locking=[]
            Tray_included=[]
            Magnetic=[]
            Diary_type=[]
            Steam_burst=[]
            Spray=[]
            Power_consumption=[]
            Rated_pressure=[]
            Star_rating=[]
            Filter_type=[]
            Auto_revolving_heater=[]
            Number_of_stitches=[]
            Number_of_blades=[]
            Load_type=[]
            Number_of_ways=[]
            Wired_or_wireless=[]
            Energy_ratings=[]
            Condenser_coil=[]
            Ideal_for=[]
            Technology=[]
            Defrosting_type=[]
            Year=[]
            Star=[]
            Bee_rating=[]
            Washing_system=[]
            Power=[]
            Control=[]
            Ductless=[]
            Auto_clean=[]
            Cups=[]
            Number_of_eggs=[]
            Number_of_slices=[]
            Screen_size=[]
            Operating_system=[]
            Hard_disk_capacity=[]
            Storage_type=[]
            Processor=[]
            Processor_brand=[]
            Processor_gen=[]
            RAM_type=[]
            RAM=[]
            Graphics=[]
            Graphics_name=[]
            Graphics_processor_series=[]
            Graphics_memory_type=[]
            Touch_screen=[]
            Interface=[]
            Water_proof=[]
            Operation_type=[]
            Number_of_cells=[]
            Compatible_laptop_size=[]
            Ergonomic=[]
            Illuminated_keys=[]
            Shock_resistance=[]
            Wireless_speed=[]
            Number_of_Ethernet_ports=[]
            Transfer_speed=[]
            Voice_support=[]
            Memory_capacity=[]
            Max_wireless_transmission_rate=[]
            Frequency_band=[]
            Compatibility=[]
            Frequency=[]
            Number_of_USB_ports=[]
            Antennae=[]
            GST_invoice=[]
            Offers=[]
            Printer_type=[]
            Scanner_type=[]
            Printer_output=[]
            Refilling_type=[]
            Function=[]
            Portable=[]
            Device_chipset=[]
            Lamp_life=[]
            Brightness=[]
            Edition=[]
            Architecture=[]
            Board=[]
            Class=[]
            Subject=[]
            Validity=[]
            Screen_resolution=[]
            Screen_form_factor=[]
            Inbuilt_speaker=[]
            Panel_type=[]
            Connectivity=[]
            Response_time=[]
            Fan_diameter=[]
            Max_fan_speed=[]
            Number_of_satacables=[]
            Power_output=[]
            Number_of_cores=[]
            Processor_speed=[]
            Data_rate=[]
            Device=[]
            Chipset=[]
            Clock_speed=[]
            Number_of_HDMI_ports=[]
            Configuration=[]
            Smart_tv=[]
            Screen_type=[]
            Curve_tv=[]
            Internal_storage=[]
            Battery_capacity=[]
            Network_type=[]
            SIM_type=[]
            Primary_camera=[]
            Secondary_camera=[]
            Operating_system_name=[]
            Speciality=[]
            Voice_calling=[]
            Battery_type=[]
            Syncing_method=[]
            Wireless_standard=[]
            Indicator=[]
            Compatible_mobile=[]
            Extension=[]
            Movement=[]
            Fixture_type=[]
            Installation_type=[]
            Sweep_diameter=[]
            Phase=[]
            Number_of_poles=[]
            Flammable=[]
            Sensor_type=[]
            Effective_pixels=[]
            Maximum_load_capacity=[]
            Prime_Zoom=[]
            Focal_length=[]
            Lens_type=[]
            Max_aperture=[]
            Lens_mount=[]
            Max_magnification=[]
            Mount_tracking =[]
            Placement_type =[]
            Male_thread_diameter=[]
            Female_thread_diameter =[]
            Vehicle_brand =[]
            Vehicle_model =[]
            Number_of_indicator_lamps=[]
            Tachometer =[]
            Armours =[]
            Platform =[]
            PEGI_rating =[]
            Game_modes =[]
            ESRB_rating =[]
            Temple_material=[]
            Lens_type_supported=[]
            Temple_color =[]

            for items in base:
                if items.Brand not in Brands:
                    Brands.append(items.Brand)
                if items.color not in Colors:
                    Colors.append(items.color)
                if items.Fit not in Fit and items.Fit is not None:
                    Fit.append(items.Fit)
                if items.Pattern not in Pattern and items.Pattern is not None:
                    Pattern.append(items.Pattern)
                if items.Neck_type not in Neck_type and items.Neck_type is not None:
                    Neck_type.append(items.Neck_type)
                if items.Sleeve_type not in Sleeve_type and items.Sleeve_type is not None:
                    Sleeve_type.append(items.Sleeve_type)
                if items.Theme not in Theme and items.Theme is not None:
                    Theme.append(items.Theme)
                if items.Fabric not in Fabric and items.Fabric is not None:
                    Fabric.append(items.Fabric)
                if items.occasion not in occasion and items.occasion is not None:
                    occasion.append(items.occasion)
                if items.Collar not in Collar and items.Collar is not None:
                    Collar.append(items.Collar)
                if items.type not in type and items.type is not None:
                    type.append(items.type)
                if items.Distress not in Distress and items.Distress is not None:
                    Distress.append(items.Distress)
                if items.Fade not in Fade and items.Fade is not None:
                    Fade.append(items.Fade)
                if items.Waist_rise not in Waist_rise and items.Waist_rise is not None:
                    Waist_rise.append(items.Waist_rise)
                if items.heel_height not in heel_height and items.heel_height is not None:
                    heel_height.append(items.heel_height)
                if items.Length not in Length and items.Length is not None:
                    Length.append(items.Length)
                if items.Closure not in Closure and items.Closure is not None:
                    Closure.append(items.Closure)
                if items.Sleeve_style not in Sleeve_style and items.Sleeve_style is not None:
                    Sleeve_style.append(items.Sleeve_style)
                if items.usage not in usage and items.usage is not None:
                    usage.append(items.usage)
                if items.Hooded not in Hooded and items.Hooded is not None:
                    Hooded.append(items.Hooded)
                if items.Ornamentation not in Ornamentation and items.Ornamentation is not None:
                    Ornamentation.append(items.Ornamentation)
                if items.Styling not in Styling and items.Styling is not None:
                    Styling.append(items.Styling)
                if items.Suitable_for not in Suitable_for and items.Suitable_for is not None:
                    Suitable_for.append(items.Suitable_for)
                if items.Applied_for not in Applied_for and items.Applied_for is not None:
                    Applied_for.append(items.Applied_for)
                if items.Hair_type not in Hair_type and items.Hair_type is not None:
                    Hair_type.append(items.Hair_type)
                if items.Pack_of not in Pack_of and items.Pack_of is not None:
                    Pack_of.append(items.Pack_of)
                if items.Washable not in Washable and items.Washable is not None:
                    Washable.append(items.Washable)
                if items.Water_resistance not in Water_resistance and items.Water_resistance is not None:
                    Water_resistance.append(items.Water_resistance)
                if items.Rise not in Rise and items.Rise is not None:
                    Rise.append(items.Rise)
                if items.Straps not in Straps and items.Straps is not None:
                    Straps.append(items.Straps)
                if items.Wire_support not in Wire_support and items.Wire_support is not None:
                    Wire_support.append(items.Wire_support)
                if items.Padding not in Padding and items.Padding is not None:
                    Padding.append(items.Padding)
                if items.Seam not in Seam and items.Seam is not None:
                    Seam.append(items.Seam)
                if items.Coverage not in Coverage and items.Coverage is not None:
                    Coverage.append(items.Coverage)
                if items.Back_style not in Back_style and items.Back_style is not None:
                    Back_style.append(items.Back_style)
                if items.Dial_color not in Dial_color and items.Dial_color is not None:
                    Dial_color.append(items.Dial_color)
                if items.Features not in Features and items.Features is not None:
                    Features.append(items.Features)
                if items.Dial_shape not in Dial_shape and items.Dial_shape is not None:
                    Dial_shape.append(items.Dial_shape)
                if items.Strap_material not in Strap_material and items.Strap_material is not None:
                    Strap_material.append(items.Strap_material)
                if items.Number_of_compartments not in Number_of_compartments and items.Number_of_compartments is not None:
                    Number_of_compartments.append(items.Number_of_compartments)
                if items.Material not in Material and items.Material is not None:
                    Material.append(items.Material)
                if items.Bag_size not in Bag_size and items.Bag_size is not None:
                    Bag_size.append(items.Bag_size)
                if items.wheels not in wheels and items.wheels is not None:
                    wheels.append(items.wheels)
                if items.body_type not in body_type and items.body_type is not None:
                    body_type.append(items.body_type)
                if items.capacity not in capacity and items.capacity is not None:
                    capacity.append(items.capacity)
                if items.card_slot not in card_slot and items.card_slot is not None:
                    card_slot.append(items.card_slot)
                if items.Strap_color not in Strap_color and items.Strap_color is not None:
                    Strap_color.append(items.Strap_color)
                if items.Compatible_OS not in Compatible_OS and items.Compatible_OS is not None:
                    Compatible_OS.append(items.Compatible_OS)
                if items.Display_type not in Display_type and items.Display_type is not None:
                    Display_type.append(items.Display_type)
                if items.Gemstones not in Gemstones and items.Gemstones is not None:
                    Gemstones.append(items.Gemstones)
                if items.Gender not in Gender and items.Gender is not None:
                    Gender.append(items.Gender)
                if items.Blade_material not in Blade_material and items.Blade_material is not None:
                    Blade_material.append(items.Blade_material)
                if items.Battery_run_time not in Battery_run_time and items.Battery_run_time is not None:
                    Battery_run_time.append(items.Battery_run_time)
                if items.Body_material not in Body_material and items.Body_material is not None:
                    Body_material.append(items.Body_material)
                if items.Plate_coating not in Plate_coating and items.Plate_coating is not None:
                    Plate_coating.append(items.Plate_coating)
                if items.Wattage not in Wattage and items.Wattage is not None:
                    Wattage.append(items.Wattage)
                if items.Collection not in Collection and items.Collection is not None:
                    Collection.append(items.Collection)
                if items.Ring_size not in Ring_size and items.Ring_size is not None:
                    Ring_size.append(items.Ring_size)
                if items.Dress_length not in Dress_length and items.Dress_length is not None:
                    Dress_length.append(items.Dress_length)
                if items.Length_type not in Length_type and items.Length_type is not None:
                    Length_type.append(items.Length_type)
                if items.Saree_type not in Saree_type and items.Saree_type is not None:
                    Saree_type.append(items.Saree_type)
                if items.Saree_style not in Saree_style and items.Saree_style is not None:
                    Saree_style.append(items.Saree_style)
                if items.Saree_length not in Saree_length and items.Saree_length is not None:
                    Saree_length.append(items.Saree_length)
                if items.Blouse_included not in Blouse_included and items.Blouse_included is not None:
                    Blouse_included.append(items.Blouse_included)
                if items.Saree_Fall_length not in Saree_Fall_length and items.Saree_Fall_length is not None:
                    Saree_Fall_length.append(items.Saree_Fall_length)
                if items.Saree_Fall_width not in Saree_Fall_width and items.Saree_Fall_width is not None:
                    Saree_Fall_width.append(items.Saree_Fall_width)
                if items.Dupatta_included not in Dupatta_included and items.Dupatta_included is not None:
                    Dupatta_included.append(items.Dupatta_included)
                if items.Rechargeable not in Rechargeable and items.Rechargeable is not None:
                    Rechargeable.append(items.Rechargeable)
                if items.Battery_operated not in Battery_operated and items.Battery_operated is not None:
                    Battery_operated.append(items.Battery_operated)
                if items.Character not in Character and items.Character is not None:
                    Character.append(items.Character)
                if items.Thermoware not in Thermoware and items.Thermoware is not None:
                    Thermoware.append(items.Thermoware)
                if items.Age_group not in Age_group and items.Age_group is not None:
                    Age_group.append(items.Age_group)
                if items.Pot_included not in Pot_included and items.Pot_included is not None:
                    Pot_included.append(items.Pot_included)
                if items.Bonsai not in Bonsai and items.Bonsai is not None:
                    Bonsai.append(items.Bonsai)
                if items.Outer_material not in Outer_material and items.Outer_material is not None:
                    Outer_material.append(items.Outer_material)
                if items.Towel_type not in Towel_type and items.Towel_type is not None:
                    Towel_type.append(items.Towel_type)
                if items.Reversible not in Reversible and items.Reversible is not None:
                    Reversible.append(items.Reversible)
                if items.width not in width and items.width is not None:
                    width.append(items.width)
                if items.Shape not in Shape and items.Shape is not None:
                    Shape.append(items.Shape)
                if items.Microwave_safe not in Microwave_safe and items.Microwave_safe is not None:
                    Microwave_safe.append(items.Microwave_safe)
                if items.Showpiece_type not in Showpiece_type and items.Showpiece_type is not None:
                    Showpiece_type.append(items.Showpiece_type)
                if items.No_of_prongs not in No_of_prongs and items.No_of_prongs is not None:
                    No_of_prongs.append(items.No_of_prongs)
                if items.Fragrance not in Fragrance and items.Fragrance is not None:
                    Fragrance.append(items.Fragrance)
                if items.Quantity not in Quantity and items.Quantity is not None:
                    Quantity.append(items.Quantity)
                if items.Form not in Form and items.Form is not None:
                    Form.append(items.Form)
                if items.Light_used not in Light_used and items.Light_used is not None:
                    Light_used.append(items.Light_used)
                if items.adjustable not in adjustable and items.adjustable is not None:
                    adjustable.append(items.adjustable)
                if items.Mount_type not in Mount_type and items.Mount_type is not None:
                    Mount_type.append(items.Mount_type)
                if items.Bulb_included not in Bulb_included and items.Bulb_included is not None:
                    Bulb_included.append(items.Bulb_included)
                if items.Dimmable not in Dimmable and items.Dimmable is not None:
                    Dimmable.append(items.Dimmable)
                if items.Foldable not in Foldable and items.Foldable is not None:
                    Foldable.append(items.Foldable)
                if items.Adjustable_height not in Adjustable_height and items.Adjustable_height is not None:
                    Adjustable_height.append(items.Adjustable_height)
                if items.Mouse_tray not in Mouse_tray and items.Mouse_tray is not None:
                    Mouse_tray.append(items.Mouse_tray)
                if items.Height not in Height and items.Height is not None:
                    Height.append(items.Height)
                if items.Storage_included not in Storage_included and items.Storage_included is not None:
                    Storage_included.append(items.Storage_included)
                if items.Separated not in Separated and items.Separated is not None:
                    Separated.append(items.Separated)
                if items.Weight not in Weight and items.Weight is not None:
                    Weight.append(items.Weight)
                if items.Heart_rate_sensor not in Heart_rate_sensor and items.Heart_rate_sensor is not None:
                    Heart_rate_sensor.append(items.Heart_rate_sensor)
                if items.Design not in Design and items.Design is not None:
                    Design.append(items.Design)
                if items.Diameter not in Diameter and items.Diameter is not None:
                    Diameter.append(items.Diameter)
                if items.Contains_pump not in Contains_pump and items.Contains_pump is not None:
                    Contains_pump.append(items.Contains_pump)
                if items.Thickness not in Thickness and items.Thickness is not None:
                    Thickness.append(items.Thickness)
                if items.Grip not in Grip and items.Grip is not None:
                    Grip.append(items.Grip)
                if items.Playing_level not in Playing_level and items.Playing_level is not None:
                    Playing_level.append(items.Playing_level)
                if items.Strung_type not in Strung_type and items.Strung_type is not None:
                    Strung_type.append(items.Strung_type)
                if items.Cover_type not in Cover_type and items.Cover_type is not None:
                    Cover_type.append(items.Cover_type)
                if items.Grip_size not in Grip_size and items.Grip_size is not None:
                    Grip_size.append(items.Grip_size)
                if items.Head_size not in Head_size and items.Head_size is not None:
                    Head_size.append(items.Head_size)
                if items.Speed not in Speed and items.Speed is not None:
                    Speed.append(items.Speed)
                if items.Willow_type not in Willow_type and items.Willow_type is not None:
                    Willow_type.append(items.Willow_type)
                if items.Bat_grade not in Bat_grade and items.Bat_grade is not None:
                    Bat_grade.append(items.Bat_grade)
                if items.Cover not in Cover and items.Cover is not None:
                    Cover.append(items.Cover)
                if items.Visor not in Visor and items.Visor is not None:
                    Visor.append(items.Visor)
                if items.Bails_included not in Bails_included and items.Bails_included is not None:
                    Bails_included.append(items.Bails_included)
                if items.Fill_type not in Fill_type and items.Fill_type is not None:
                    Fill_type.append(items.Fill_type)
                if items.Tyre_size not in Tyre_size and items.Tyre_size is not None:
                    Tyre_size.append(items.Tyre_size)
                if items.Gear_type not in Gear_type and items.Gear_type is not None:
                    Gear_type.append(items.Gear_type)
                if items.Rear_brake not in Rear_brake and items.Rear_brake is not None:
                    Rear_brake.append(items.Rear_brake)
                if items.Front_brake not in Front_brake and items.Front_brake is not None:
                    Front_brake.append(items.Front_brake)
                if items.Playback_mode not in Playback_mode and items.Playback_mode is not None:
                    Playback_mode.append(items.Playback_mode)
                if items.Accessory_holder not in Accessory_holder and items.Accessory_holder is not None:
                    Accessory_holder.append(items.Accessory_holder)
                if items.Rod_power not in Rod_power and items.Rod_power is not None:
                    Rod_power.append(items.Rod_power)
                if items.Rod_type not in Rod_type and items.Rod_type is not None:
                    Rod_type.append(items.Rod_type)
                if items.Rod_action not in Rod_action and items.Rod_action is not None:
                    Rod_action.append(items.Rod_action)
                if items.Handle_material not in Handle_material and items.Handle_material is not None:
                    Handle_material.append(items.Handle_material)
                if items.Construction not in Construction and items.Construction is not None:
                    Construction.append(items.Construction)
                if items.Drag_type not in Drag_type and items.Drag_type is not None:
                    Drag_type.append(items.Drag_type)
                if items.Container_type not in Container_type and items.Container_type is not None:
                    Container_type.append(items.Container_type)
                if items.Edge_type not in Edge_type and items.Edge_type is not None:
                    Edge_type.append(items.Edge_type)
                if items.Sheath not in Sheath and items.Sheath is not None:
                    Sheath.append(items.Sheath)
                if items.Coated not in Coated and items.Coated is not None:
                    Coated.append(items.Coated)
                if items.Finish not in Finish and items.Finish is not None:
                    Finish.append(items.Finish)
                if items.Attachment_type not in Attachment_type and items.Attachment_type is not None:
                    Attachment_type.append(items.Attachment_type)
                if items.Auto_locking not in Auto_locking and items.Auto_locking is not None:
                    Auto_locking.append(items.Auto_locking)
                if items.Tray_included not in Tray_included and items.Tray_included is not None:
                    Tray_included.append(items.Tray_included)
                if items.Magnetic not in Magnetic and items.Magnetic is not None:
                    Magnetic.append(items.Magnetic)
                if items.Diary_type not in Diary_type and items.Diary_type is not None:
                    Diary_type.append(items.Diary_type)
                if items.Steam_burst not in Steam_burst and items.Steam_burst is not None:
                    Steam_burst.append(items.Steam_burst)
                if items.Spray not in Spray and items.Spray is not None:
                    Spray.append(items.Spray)
                if items.Power_consumption not in Power_consumption and items.Power_consumption is not None:
                    Power_consumption.append(items.Power_consumption)
                if items.Rated_pressure not in Rated_pressure and items.Rated_pressure is not None:
                    Rated_pressure.append(items.Rated_pressure)
                if items.Star_rating not in Star_rating and items.Star_rating is not None:
                    Star_rating.append(items.Star_rating)
                if items.Filter_type not in Filter_type and items.Filter_type is not None:
                    Filter_type.append(items.Filter_type)
                if items.Auto_revolving_heater not in Auto_revolving_heater and items.Auto_revolving_heater is not None:
                    Auto_revolving_heater.append(items.Auto_revolving_heater)
                if items.Number_of_stitches not in Number_of_stitches and items.Number_of_stitches is not None:
                    Number_of_stitches.append(items.Number_of_stitches)
                if items.Number_of_blades not in Number_of_blades and items.Number_of_blades is not None:
                    Number_of_blades.append(items.Number_of_blades)
                if items.Load_type not in Load_type and items.Load_type is not None:
                    Load_type.append(items.Load_type)
                if items.Number_of_ways not in Number_of_ways and items.Number_of_ways is not None:
                    Number_of_ways.append(items.Number_of_ways)
                if items.Wired_or_wireless not in Wired_or_wireless and items.Wired_or_wireless is not None:
                    Wired_or_wireless.append(items.Wired_or_wireless)
                if items.Energy_ratings not in Energy_ratings and items.Energy_ratings is not None:
                    Energy_ratings.append(items.Energy_ratings)
                if items.Condenser_coil not in Condenser_coil and items.Condenser_coil is not None:
                    Condenser_coil.append(items.Condenser_coil)
                if items.Ideal_for not in Ideal_for and items.Ideal_for is not None:
                    Ideal_for.append(items.Ideal_for)
                if items.Technology not in Technology and items.Technology is not None:
                    Technology.append(items.Technology)
                if items.Defrosting_type not in Defrosting_type and items.Defrosting_type is not None:
                    Defrosting_type.append(items.Defrosting_type)
                if items.Year not in Year and items.Year is not None:
                    Year.append(items.Year)
                if items.Star not in Star and items.Star is not None:
                    Star.append(items.Star)
                if items.Bee_rating not in Bee_rating and items.Bee_rating is not None:
                    Bee_rating.append(items.Bee_rating)
                if items.Washing_system not in Washing_system and items.Washing_system is not None:
                    Washing_system.append(items.Washing_system)
                if items.Power not in Power and items.Power is not None:
                    Power.append(items.Power)
                if items.Control not in Control and items.Control is not None:
                    Control.append(items.Control)
                if items.Ductless not in Ductless and items.Ductless is not None:
                    Ductless.append(items.Ductless)
                if items.Auto_clean not in Auto_clean and items.Auto_clean is not None:
                    Auto_clean.append(items.Auto_clean)
                if items.Cups not in Cups and items.Cups is not None:
                    Cups.append(items.Cups)
                if items.Number_of_eggs not in Number_of_eggs and items.Number_of_eggs is not None:
                    Number_of_eggs.append(items.Number_of_eggs)
                if items.Number_of_slices not in Number_of_slices and items.Number_of_slices is not None:
                    Number_of_slices.append(items.Number_of_slices)
                if items.Screen_size not in Screen_size and items.Screen_size is not None:
                    Screen_size.append(items.Screen_size)
                if items.Operating_system not in Operating_system and items.Operating_system is not None:
                    Operating_system.append(items.Operating_system)
                if items.Hard_disk_capacity not in Hard_disk_capacity and items.Hard_disk_capacity is not None:
                    Hard_disk_capacity.append(items.Hard_disk_capacity)
                if items.Storage_type not in Storage_type and items.Storage_type is not None:
                    Storage_type.append(items.Storage_type)
                if items.Processor not in Processor and items.Processor is not None:
                    Processor.append(items.Processor)
                if items.Processor_brand not in Processor_brand and items.Processor_brand is not None:
                    Processor_brand.append(items.Processor_brand)
                if items.Processor_gen not in Processor_gen and items.Processor_gen is not None:
                    Processor_gen.append(items.Processor_gen)
                if items.RAM_type not in RAM_type and items.RAM_type is not None:
                    RAM_type.append(items.RAM_type)
                if items.RAM not in RAM and items.RAM is not None:
                    RAM.append(items.RAM)
                if items.Graphics not in Graphics and items.Graphics is not None:
                    Graphics.append(items.Graphics)
                if items.Graphics_name not in Graphics_name and items.Graphics_name is not None:
                    Graphics_name.append(items.Graphics_name)
                if items.Graphics_processor_series not in Graphics_processor_series and items.Graphics_processor_series is not None:
                    Graphics_processor_series.append(items.Graphics_processor_series)
                if items.Graphics_memory_type not in Graphics_memory_type and items.Graphics_memory_type is not None:
                    Graphics_memory_type.append(items.Graphics_memory_type)
                if items.Touch_screen not in Touch_screen and items.Touch_screen is not None:
                    Touch_screen.append(items.Touch_screen)
                if items.Interface not in Interface and items.Interface is not None:
                    Interface.append(items.Interface)
                if items.Water_proof not in Water_proof and items.Water_proof is not None:
                    Water_proof.append(items.Water_proof)
                if items.Operation_type not in Operation_type and items.Operation_type is not None:
                    Operation_type.append(items.Operation_type)
                if items.Number_of_cells not in Number_of_cells and items.Number_of_cells is not None:
                    Number_of_cells.append(items.Number_of_cells)
                if items.Compatible_laptop_size not in Compatible_laptop_size and items.Compatible_laptop_size is not None:
                    Compatible_laptop_size.append(items.Compatible_laptop_size)
                if items.Ergonomic not in Ergonomic and items.Ergonomic is not None:
                    Ergonomic.append(items.Ergonomic)
                if items.Illuminated_keys not in Illuminated_keys and items.Illuminated_keys is not None:
                    Illuminated_keys.append(items.Illuminated_keys)
                if items.Shock_resistance not in Shock_resistance and items.Shock_resistance is not None:
                    Shock_resistance.append(items.Shock_resistance)
                if items.Wireless_speed not in Wireless_speed and items.Wireless_speed is not None:
                    Wireless_speed.append(items.Wireless_speed)
                if items.Number_of_Ethernet_ports not in Number_of_Ethernet_ports and items.Number_of_Ethernet_ports is not None:
                    Number_of_Ethernet_ports.append(items.Number_of_Ethernet_ports)
                if items.Transfer_speed not in Transfer_speed and items.Transfer_speed is not None:
                    Transfer_speed.append(items.Transfer_speed)
                if items.Voice_support not in Voice_support and items.Voice_support is not None:
                    Voice_support.append(items.Voice_support)
                if items.Memory_capacity not in Memory_capacity and items.Memory_capacity is not None:
                    Memory_capacity.append(items.Memory_capacity)
                if items.Max_wireless_transmission_rate not in Max_wireless_transmission_rate and items.Max_wireless_transmission_rate is not None:
                    Max_wireless_transmission_rate.append(items.Max_wireless_transmission_rate)
                if items.Frequency_band not in Frequency_band and items.Frequency_band is not None:
                    Frequency_band.append(items.Frequency_band)
                if items.Compatibility not in Compatibility and items.Compatibility is not None:
                    Compatibility.append(items.Compatibility)
                if items.Frequency not in Frequency and items.Frequency is not None:
                    Frequency.append(items.Frequency)
                if items.Number_of_USB_ports not in Number_of_USB_ports and items.Number_of_USB_ports is not None:
                    Number_of_USB_ports.append(items.Number_of_USB_ports)
                if items.Antennae not in Antennae and items.Antennae is not None:
                    Antennae.append(items.Antennae)
                if items.GST_invoice not in GST_invoice and items.GST_invoice is not None:
                    GST_invoice.append(items.GST_invoice)
                if items.Offers not in Offers and items.Offers is not None:
                    Offers.append(items.Offers)
                if items.Printer_type not in Printer_type and items.Printer_type is not None:
                    Printer_type.append(items.Printer_type)
                if items.Scanner_type not in Scanner_type and items.Scanner_type is not None:
                    Scanner_type.append(items.Scanner_type)
                if items.Printer_output not in Printer_output and items.Printer_output is not None:
                    Printer_output.append(items.Printer_output)
                if items.Refilling_type not in Refilling_type and items.Refilling_type is not None:
                    Refilling_type.append(items.Refilling_type)
                if items.Function not in Function and items.Function is not None:
                    Function.append(items.Function)
                if items.Portable not in Portable and items.Portable is not None:
                    Portable.append(items.Portable)
                if items.Device_chipset not in Device_chipset and items.Device_chipset is not None:
                    Device_chipset.append(items.Device_chipset)
                if items.Lamp_life not in Lamp_life and items.Lamp_life is not None:
                    Lamp_life.append(items.Lamp_life)
                if items.Brightness not in Brightness and items.Brightness is not None:
                    Brightness.append(items.Brightness)
                if items.Edition not in Edition and items.Edition is not None:
                    Edition.append(items.Edition)
                if items.Architecture not in Architecture and items.Architecture is not None:
                    Architecture.append(items.Architecture)
                if items.Board not in Board and items.Board is not None:
                    Board.append(items.Board)
                if items.Class not in Class and items.Class is not None:
                    Class.append(items.Class)
                if items.Subject not in Subject and items.Subject is not None:
                    Subject.append(items.Subject)
                if items.Validity not in Validity and items.Validity is not None:
                    Validity.append(items.Validity)
                if items.Screen_resolution not in Screen_resolution and items.Screen_resolution is not None:
                    Screen_resolution.append(items.Screen_resolution)
                if items.Screen_form_factor not in Screen_form_factor and items.Screen_form_factor is not None:
                    Screen_form_factor.append(items.Screen_form_factor)
                if items.Inbuilt_speaker not in Inbuilt_speaker and items.Inbuilt_speaker is not None:
                    Inbuilt_speaker.append(items.Inbuilt_speaker)
                if items.Panel_type not in Panel_type and items.Panel_type is not None:
                    Panel_type.append(items.Panel_type)
                if items.Connectivity not in Connectivity and items.Connectivity is not None:
                    Connectivity.append(items.Connectivity)
                if items.Response_time not in Response_time and items.Response_time is not None:
                    Response_time.append(items.Response_time)
                if items.Fan_diameter not in Fan_diameter and items.Fan_diameter is not None:
                    Fan_diameter.append(items.Fan_diameter)
                if items.Max_fan_speed not in Max_fan_speed and items.Max_fan_speed is not None:
                    Max_fan_speed.append(items.Max_fan_speed)
                if items.Number_of_satacables not in Number_of_satacables and items.Number_of_satacables is not None:
                    Number_of_satacables.append(items.Number_of_satacables)
                if items.Power_output not in Power_output and items.Power_output is not None:
                    Power_output.append(items.Power_output)
                if items.Number_of_cores not in Number_of_cores and items.Number_of_cores is not None:
                    Number_of_cores.append(items.Number_of_cores)
                if items.Processor_speed not in Processor_speed and items.Processor_speed is not None:
                    Processor_speed.append(items.Processor_speed)
                if items.Data_rate not in Data_rate and items.Data_rate is not None:
                    Data_rate.append(items.Data_rate)
                if items.Device not in Device and items.Device is not None:
                    Device.append(items.Device)
                if items.Chipset not in Chipset and items.Chipset is not None:
                    Chipset.append(items.Chipset)
                if items.Clock_speed not in Clock_speed and items.Clock_speed is not None:
                    Clock_speed.append(items.Clock_speed)
                if items.Number_of_HDMI_ports not in Number_of_HDMI_ports and items.Number_of_HDMI_ports is not None:
                    Number_of_HDMI_ports.append(items.Number_of_HDMI_ports)
                if items.Configuration not in Configuration and items.Configuration is not None:
                    Configuration.append(items.Configuration)
                if items.Smart_tv not in Smart_tv and items.Smart_tv is not None:
                    Smart_tv.append(items.Smart_tv)
                if items.Screen_type not in Screen_type and items.Screen_type is not None:
                    Screen_type.append(items.Screen_type)
                if items.Curve_tv not in Curve_tv and items.Curve_tv is not None:
                    Curve_tv.append(items.Curve_tv)
                if items.Internal_storage not in Internal_storage and items.Internal_storage is not None:
                    Internal_storage.append(items.Internal_storage)
                if items.Battery_capacity not in Battery_capacity and items.Battery_capacity is not None:
                    Battery_capacity.append(items.Battery_capacity)
                if items.Network_type not in Network_type and items.Network_type is not None:
                    Network_type.append(items.Network_type)
                if items.SIM_type not in SIM_type and items.SIM_type is not None:
                    SIM_type.append(items.SIM_type)
                if items.Primary_camera not in Primary_camera and items.Primary_camera is not None:
                    Primary_camera.append(items.Primary_camera)
                if items.Secondary_camera not in Secondary_camera and items.Secondary_camera is not None:
                    Secondary_camera.append(items.Secondary_camera)
                if items.Operating_system_name not in Operating_system_name and items.Operating_system_name is not None:
                    Operating_system_name.append(items.Operating_system_name)
                if items.Speciality not in Speciality and items.Speciality is not None:
                    Speciality.append(items.Speciality)
                if items.Voice_calling not in Voice_calling and items.Voice_calling is not None:
                    Voice_calling.append(items.Voice_calling)
                if items.Battery_type not in Battery_type and items.Battery_type is not None:
                    Battery_type.append(items.Battery_type)
                if items.Syncing_method not in Syncing_method and items.Syncing_method is not None:
                    Syncing_method.append(items.Syncing_method)
                if items.Wireless_standard not in Wireless_standard and items.Wireless_standard is not None:
                    Wireless_standard.append(items.Wireless_standard)
                if items.Indicator not in Indicator and items.Indicator is not None:
                    Indicator.append(items.Indicator)
                if items.Compatible_mobile not in Compatible_mobile and items.Compatible_mobile is not None:
                    Compatible_mobile.append(items.Compatible_mobile)
                if items.Extension not in Extension and items.Extension is not None:
                    Extension.append(items.Extension)
                if items.Movement not in Movement and items.Movement is not None:
                    Movement.append(items.Movement)
                if items.Fixture_type not in Fixture_type and items.Fixture_type is not None:
                    Fixture_type.append(items.Fixture_type)
                if items.Installation_type not in Installation_type and items.Installation_type is not None:
                    Installation_type.append(items.Installation_type)
                if items.Sweep_diameter not in Sweep_diameter and items.Sweep_diameter is not None:
                    Sweep_diameter.append(items.Sweep_diameter)
                if items.Phase not in Phase and items.Phase is not None:
                    Phase.append(items.Phase)
                if items.Number_of_poles not in Number_of_poles and items.Number_of_poles is not None:
                    Number_of_poles.append(items.Number_of_poles)
                if items.Flammable not in Flammable and items.Flammable is not None:
                    Flammable.append(items.Flammable)
                if items.Sensor_type not in Sensor_type and items.Sensor_type is not None:
                    Sensor_type.append(items.Sensor_type)
                if items.Effective_pixels not in Effective_pixels and items.Effective_pixels is not None:
                    Effective_pixels.append(items.Effective_pixels)
                if items.Maximum_load_capacity not in Maximum_load_capacity and items.Maximum_load_capacity is not None:
                    Maximum_load_capacity.append(items.Maximum_load_capacity)
                if items.Prime_Zoom not in Prime_Zoom and items.Prime_Zoom is not None:
                    Prime_Zoom.append(items.Prime_Zoom)
                if items.Focal_length not in Focal_length and items.Focal_length is not None:
                    Focal_length.append(items.Focal_length)
                if items.Lens_type not in Lens_type and items.Lens_type is not None:
                    Lens_type.append(items.Lens_type)
                if items.Max_aperture not in Max_aperture and items.Max_aperture is not None:
                    Max_aperture.append(items.Max_aperture)
                if items.Lens_mount not in Lens_mount and items.Lens_mount is not None:
                    Lens_mount.append(items.Lens_mount)
                if items.Max_magnification not in Max_magnification and items.Max_magnification is not None:
                    Max_magnification.append(items.Max_magnification)
                if items.Mount_tracking not in Mount_tracking and items.Mount_tracking is not None:
                    Mount_tracking.append(items.Mount_tracking)
                if items.Placement_type not in Placement_type and items.Placement_type is not None:
                    Placement_type.append(items.Placement_type)
                if items.Male_thread_diameter not in Male_thread_diameter and items.Male_thread_diameter is not None:
                    Male_thread_diameter.append(items.Male_thread_diameter)
                if items.Female_thread_diameter not in Female_thread_diameter and items.Female_thread_diameter is not None:
                    Female_thread_diameter.append(items.Female_thread_diameter)
                if items.Vehicle_brand not in Vehicle_brand and items.Vehicle_brand is not None:
                    Vehicle_brand.append(items.Vehicle_brand)
                if items.Vehicle_model not in Vehicle_model and items.Vehicle_model is not None:
                    Vehicle_model.append(items.Vehicle_model)
                if items.Number_of_indicator_lamps not in Number_of_indicator_lamps and items.Number_of_indicator_lamps is not None:
                    Number_of_indicator_lamps.append(items.Number_of_indicator_lamps)
                if items.Tachometer not in Tachometer and items.Tachometer is not None:
                    Tachometer.append(items.Tachometer)
                if items.Armours not in Armours and items.Armours is not None:
                    Armours.append(items.Armours)
                if items.Platform not in Platform and items.Platform is not None:
                    Platform.append(items.Platform)
                if items.PEGI_rating not in PEGI_rating and items.PEGI_rating is not None:
                    PEGI_rating.append(items.PEGI_rating)
                if items.Game_modes not in Game_modes and items.Game_modes is not None:
                    Game_modes.append(items.Game_modes)
                if items.ESRB_rating not in ESRB_rating and items.ESRB_rating is not None:
                    ESRB_rating.append(items.ESRB_rating)
                if items.Temple_material not in Temple_material and items.Temple_material is not None:
                    Temple_material.append(items.Temple_material)
                if items.Lens_type_supported not in Lens_type_supported and items.Lens_type_supported is not None:
                    Lens_type_supported.append(items.Lens_type_supported)
                if items.Temple_color not in Temple_color and items.Temple_color is not None:
                    Temple_color.append(items.Temple_color)


            # Common Filters #
            # Brand
            if request.GET.get('next[2]'):
               s = s.query("multi_match", query=request.GET.get('next[2]'), fields=["Brand"])
            # Price
            if request.GET.get('next[3]'):

                prices = request.GET.get('next[3]')
                prices = prices.split(",")
                try:
                   if prices[0]=='':
                       prices[0]=0

                   if prices[1]=='':
                       prices[1]=10000000
                   s = s.filter("range", discount_price={'gte': abs(int(prices[0])), 'lte': abs(int(prices[1]))})
                except :
                    pass

            # Discount
            # Offers
            # Color
            if request.GET.get('next[4]'):
                s = s.query("multi_match", query=request.GET.get('next[4]'), fields=["color"])
            # Ratings
            if request.GET.get('next[5]'):
                ratings = request.GET.get('next[5]')
                if ratings=='1':
                    s = s.filter("range", overall_rating={'gte': 1, 'lte': 5})
                elif ratings=='2':
                    s = s.filter("range", overall_rating={'gte': 2, 'lte': 5})
                elif ratings=='3':
                    s = s.filter("range", overall_rating={'gte': 3, 'lte': 5})
                elif ratings=='4':
                    s = s.filter("range", overall_rating={'gte': 4, 'lte': 5})

            # Fit
            if request.GET.get('next[6]'):
                s= s.query("multi_match",query=request.GET.get('next[6]'),fields=['Fit'])
            # Pattern
            if request.GET.get('next[7]'):
                s = s.query("multi_match",query=request.GET.get('next[7]'),fields=['Pattern'])
            # Neck_type
            if request.GET.get('next[8]'):
                s = s.query("multi_match",query=request.GET.get('next[8]'),fields=['Neck_type'])
            # Sleeve_type
            if request.GET.get('next[9]'):
                s = s.query("multi_match",query=request.GET.get('next[9]'),fields=['Sleeve_type'])
            # Theme
            if request.GET.get('next[10]'):
                s = s.query("multi_match", query=request.GET.get('next[10]'), fields=['Theme'])
            # Fabric
            if request.GET.get('next[11]'):
                s = s.query("multi_match", query=request.GET.get('next[11]'), fields=['Fabric'])
            # Occasion
            if request.GET.get('next[12]'):
                s = s.query("multi_match", query=request.GET.get('next[12]'), fields=['occasion'])
            # Collar
            if request.GET.get('next[13]'):
                s = s.query("multi_match", query=request.GET.get('next[13]'), fields=['Collar'])
            # type
            if request.GET.get('next[14]'):
                s = s.query("multi_match", query=request.GET.get('next[14]'), fields=['type'])
            # Distress
            if request.GET.get('next[15]'):
                s = s.query("multi_match", query=request.GET.get('next[15]'), fields=['Distress'])
            # Fade
            if request.GET.get('next[16]'):
                s = s.query("multi_match", query=request.GET.get('next[16]'), fields=['Fade'])
            # Waist_rise
            if request.GET.get('next[17]'):
                s = s.query("multi_match", query=request.GET.get('next[17]'), fields=['Waist_rise'])
            #heel_height
            if request.GET.get('next[18]'):
                s = s.query("multi_match", query=request.GET.get('next[18]'), fields=['heel_height'])
            # Length
            if request.GET.get('next[19]'):
                s = s.query("multi_match", query=request.GET.get('next[19]'), fields=['Length'])
            # Closure
            if request.GET.get('next[20]'):
                s = s.query("multi_match", query=request.GET.get('next[20]'), fields=['Closure'])
            # Sleeve_style
            if request.GET.get('next[21]'):
                s = s.query("multi_match", query=request.GET.get('next[21]'), fields=['Sleeve_style'])
            # usage
            if request.GET.get('next[22]'):
                s = s.query("multi_match", query=request.GET.get('next[22]'), fields=['usage'])
            # Hooded
            if request.GET.get('next[23]'):
                s = s.query("multi_match", query=request.GET.get('next[23]'), fields=['Hooded'])
            # Ornamentation
            if request.GET.get('next[24]'):
                s = s.query("multi_match", query=request.GET.get('next[24]'), fields=['Ornamentation'])
            # Styling
            if request.GET.get('next[25]'):
                s = s.query("multi_match", query=request.GET.get('next[24]'), fields=['Styling'])
            # Suitable_for
            if request.GET.get('next[26]'):
                s = s.query("multi_match", query=request.GET.get('next[26]'), fields=['Suitable_for'])
            # Applied_for
            if request.GET.get('next[27]'):
                s = s.query("multi_match", query=request.GET.get('next[27]'), fields=['Applied_for'])
            # Hair_type
            if request.GET.get('next[28]'):
                s = s.query("multi_match", query=request.GET.get('next[24]'), fields=['Hair_type'])
            # Pack_of
            if request.GET.get('next[29]'):
                s = s.query("multi_match", query=request.GET.get('next[29]'), fields=['Pack_of'])
            # Washable
            if request.GET.get('next[30]'):
                s = s.query("multi_match", query=request.GET.get('next[30]'), fields=['Washable'])
            # Water_resistance
            if request.GET.get('next[31]'):
                s = s.query("multi_match", query=request.GET.get('next[31]'), fields=['Water_resistance'])
            # Rise
            if request.GET.get('next[32]'):
                s = s.query("multi_match", query=request.GET.get('next[32]'), fields=['Rise'])
            # Straps
            if request.GET.get('next[33]'):
                s = s.query("multi_match", query=request.GET.get('next[33]'), fields=['Straps'])
            # Wire_support
            if request.GET.get('next[34]'):
                s = s.query("multi_match", query=request.GET.get('next[34]'), fields=['Wire_support'])
            # Padding
            if request.GET.get('next[35]'):
                s = s.query("multi_match", query=request.GET.get('next[35]'), fields=['Padding'])
            # Seam
            if request.GET.get('next[36]'):
                s = s.query("multi_match", query=request.GET.get('next[36]'), fields=['Seam'])
            # Coverage
            if request.GET.get('next[37]'):
                s = s.query("multi_match", query=request.GET.get('next[37]'), fields=['Coverage'])
            # Back_style
            if request.GET.get('next[38]'):
                s = s.query("multi_match", query=request.GET.get('next[38]'), fields=['Back_style'])
            # Dial_color
            if request.GET.get('next[39]'):
                s = s.query("multi_match", query=request.GET.get('next[39]'), fields=['Dial_color'])
            # Features
            if request.GET.get('next[40]'):
                s = s.query("multi_match", query=request.GET.get('next[40]'), fields=['Features'])
            # Dial_shape
            if request.GET.get('next[41]'):
                s = s.query("multi_match", query=request.GET.get('next[41]'), fields=['Dial_shape'])
            # Strap_material
            if request.GET.get('next[42]'):
                s = s.query("multi_match", query=request.GET.get('next[42]'), fields=['Strap_material'])
            # Number_of_compartments
            if request.GET.get('next[43]'):
                s = s.query("multi_match", query=request.GET.get('next[43]'), fields=['Number_of_compartments'])
            # Material
            if request.GET.get('next[44]'):
                s = s.query("multi_match", query=request.GET.get('next[44]'), fields=['Material'])
            # Bag_size
            if request.GET.get('next[45]'):
                s = s.query("multi_match", query=request.GET.get('next[45]'), fields=['Bag_size'])
            # wheels
            if request.GET.get('next[46]'):
                s = s.query("multi_match", query=request.GET.get('next[46]'), fields=['wheels'])
            # body_type
            if request.GET.get('next[47]'):
                s = s.query("multi_match", query=request.GET.get('next[47]'), fields=['body_type'])
            # capacity
            if request.GET.get('next[48]'):
                s = s.query("multi_match", query=request.GET.get('next[48]'), fields=['capacity'])
            # card_slot
            if request.GET.get('next[49]'):
                s = s.query("multi_match", query=request.GET.get('next[49]'), fields=['card_slot'])
            # Strap_color
            if request.GET.get('next[50]'):
                s = s.query("multi_match", query=request.GET.get('next[50]'), fields=['Strap_color'])
            # Compatible_OS
            if request.GET.get('next[51]'):
                s = s.query("multi_match", query=request.GET.get('next[51]'), fields=['Compatible_OS'])
            # Display_type
            if request.GET.get('next[52]'):
                s = s.query("multi_match", query=request.GET.get('next[52]'), fields=['Display_type'])
            # Gemstones
            if request.GET.get('next[53]'):
                s = s.query("multi_match", query=request.GET.get('next[53]'), fields=['Gemstones'])
            # Gender
            if request.GET.get('next[54]'):
                s = s.query("multi_match", query=request.GET.get('next[54]'), fields=['Gender'])
            # Blade_material
            if request.GET.get('next[55]'):
                s = s.query("multi_match", query=request.GET.get('next[55]'), fields=['Blade_material'])
            # Battery_run_time
            if request.GET.get('next[56]'):
                s = s.query("multi_match", query=request.GET.get('next[56]'), fields=['Battery_run_time'])
            # Body_material
            if request.GET.get('next[57]'):
                s = s.query("multi_match", query=request.GET.get('next[57]'), fields=['Body_material'])
            # Plate_coating
            if request.GET.get('next[58]'):
                s = s.query("multi_match", query=request.GET.get('next[58]'), fields=['Plate_coating'])
            # Wattage
            if request.GET.get('next[59]'):
                s = s.query("multi_match", query=request.GET.get('next[59]'), fields=['Wattage'])
            # Collection
            if request.GET.get('next[60]'):
                s = s.query("multi_match", query=request.GET.get('next[60]'), fields=['Collection'])
            # Ring_size
            if request.GET.get('next[61]'):
                s = s.query("multi_match", query=request.GET.get('next[61]'), fields=['Ring_size'])
            # Dress_length
            if request.GET.get('next[62]'):
                s = s.query("multi_match", query=request.GET.get('next[62]'), fields=['Dress_length'])
            # Length_type
            if request.GET.get('next[63]'):
                s = s.query("multi_match", query=request.GET.get('next[63]'), fields=['Length_type'])
            # Saree_type
            if request.GET.get('next[64]'):
                s = s.query("multi_match", query=request.GET.get('next[64]'), fields=['Saree_type'])
            # Saree_style
            if request.GET.get('next[65]'):
                s = s.query("multi_match", query=request.GET.get('next[65]'), fields=['Saree_style'])
            # Saree_length
            if request.GET.get('next[66]'):
                s = s.query("multi_match", query=request.GET.get('next[66]'), fields=['Saree_length'])
            # Blouse_included
            if request.GET.get('next[67]'):
                s = s.query("multi_match", query=request.GET.get('next[67]'), fields=['Blouse_included'])
            # Saree_Fall_length
            if request.GET.get('next[68]'):
                s = s.query("multi_match", query=request.GET.get('next[68]'), fields=['Saree_Fall_length'])
            # Saree_Fall_width
            if request.GET.get('next[69]'):
                s = s.query("multi_match", query=request.GET.get('next[69]'), fields=['Saree_Fall_width'])
            # Dupatta_included
            if request.GET.get('next[70]'):
                s = s.query("multi_match", query=request.GET.get('next[70]'), fields=['Dupatta_included'])
            # Rechargeable
            if request.GET.get('next[71]'):
                s = s.query("multi_match", query=request.GET.get('next[71]'), fields=['Rechargeable'])
            # Battery_operated
            if request.GET.get('next[72]'):
                s = s.query("multi_match", query=request.GET.get('next[72]'), fields=['Battery_operated'])
            # Character
            if request.GET.get('next[73]'):
                s = s.query("multi_match", query=request.GET.get('next[73]'), fields=['Character'])
            # Thermoware
            if request.GET.get('next[74]'):
                s = s.query("multi_match", query=request.GET.get('next[74]'), fields=['Thermoware'])
            # Age_group
            if request.GET.get('next[75]'):
                s = s.query("multi_match", query=request.GET.get('next[75]'), fields=['Age_group'])
            # Pot_included
            if request.GET.get('next[76]'):
                s = s.query("multi_match", query=request.GET.get('next[76]'), fields=['Pot_included'])
            # Bonsai
            if request.GET.get('next[77]'):
                s = s.query("multi_match", query=request.GET.get('next[77]'), fields=['Bonsai'])
            # Outer_material
            if request.GET.get('next[78]'):
                s = s.query("multi_match", query=request.GET.get('next[78]'), fields=['Outer_material'])
            # Towel_type
            if request.GET.get('next[79]'):
                s = s.query("multi_match", query=request.GET.get('next[79]'), fields=['Towel_type'])
            # Reversible
            if request.GET.get('next[80]'):
                s = s.query("multi_match", query=request.GET.get('next[80]'), fields=['Reversible'])
            # width
            if request.GET.get('next[81]'):
                s = s.query("multi_match", query=request.GET.get('next[81]'), fields=['width'])
            # Shape
            if request.GET.get('next[82]'):
                s = s.query("multi_match", query=request.GET.get('next[82]'), fields=['Shape'])
            # Microwave_safe
            if request.GET.get('next[83]'):
                s = s.query("multi_match", query=request.GET.get('next[83]'), fields=['Microwave_safe'])
            # Showpiece_type
            if request.GET.get('next[84]'):
                s = s.query("multi_match", query=request.GET.get('next[84]'), fields=['Showpiece_type'])
            # No_of_prongs
            if request.GET.get('next[85]'):
                s = s.query("multi_match", query=request.GET.get('next[85]'), fields=['No_of_prongs'])
            # Fragrance
            if request.GET.get('next[86]'):
                s = s.query("multi_match", query=request.GET.get('next[86]'), fields=['Fragrance'])
            # Quantity
            if request.GET.get('next[87]'):
                s = s.query("multi_match", query=request.GET.get('next[87]'), fields=['Quantity'])
            # Form
            if request.GET.get('next[88]'):
                s = s.query("multi_match", query=request.GET.get('next[88]'), fields=['Form'])
            # Light_used
            if request.GET.get('next[89]'):
                s = s.query("multi_match", query=request.GET.get('next[89]'), fields=['Light_used'])
            # adjustable
            if request.GET.get('next[90]'):
                s = s.query("multi_match", query=request.GET.get('next[90]'), fields=['adjustable'])
            # Mount_type
            if request.GET.get('next[91]'):
                s = s.query("multi_match", query=request.GET.get('next[91]'), fields=['Mount_type'])
            # Bulb_included
            if request.GET.get('next[92]'):
                s = s.query("multi_match", query=request.GET.get('next[92]'), fields=['Bulb_included'])
            # Dimmable
            if request.GET.get('next[93]'):
                s = s.query("multi_match", query=request.GET.get('next[93]'), fields=['Dimmable'])
            # Foldable
            if request.GET.get('next[94]'):
                s = s.query("multi_match", query=request.GET.get('next[94]'), fields=['Foldable'])
            # Adjustable_height
            if request.GET.get('next[95]'):
                s = s.query("multi_match", query=request.GET.get('next[95]'), fields=['Adjustable_height'])
            # Mouse_tray
            if request.GET.get('next[96]'):
                s = s.query("multi_match", query=request.GET.get('next[96]'), fields=['Mouse_tray'])
            # Height
            if request.GET.get('next[97]'):
                s = s.query("multi_match", query=request.GET.get('next[97]'), fields=['Height'])
            # Storage_included
            if request.GET.get('next[98]'):
                s = s.query("multi_match", query=request.GET.get('next[98]'), fields=['Storage_included'])
            # Separated
            if request.GET.get('next[99]'):
                s = s.query("multi_match", query=request.GET.get('next[99]'), fields=['Separated'])
            # Weight
            if request.GET.get('next[100]'):
                s = s.query("multi_match", query=request.GET.get('next[100]'), fields=['Weight'])
            # Heart_rate_sensor
            if request.GET.get('next[101]'):
                s = s.query("multi_match", query=request.GET.get('next[101]'), fields=['Heart_rate_sensor'])
            # Design
            if request.GET.get('next[102]'):
                s = s.query("multi_match", query=request.GET.get('next[102]'), fields=['Design'])
            # Diameter
            if request.GET.get('next[103]'):
                s = s.query("multi_match", query=request.GET.get('next[103]'), fields=['Diameter'])
            # Contains_pump
            if request.GET.get('next[104]'):
                s = s.query("multi_match", query=request.GET.get('next[104]'), fields=['Contains_pump'])
            # Thickness
            if request.GET.get('next[105]'):
                s = s.query("multi_match", query=request.GET.get('next[105]'), fields=['Thickness'])
            # Grip
            if request.GET.get('next[106]'):
                s = s.query("multi_match", query=request.GET.get('next[106]'), fields=['Grip'])
            # Playing_level
            if request.GET.get('next[107]'):
                s = s.query("multi_match", query=request.GET.get('next[107]'), fields=['Playing_level'])
            # Strung_type
            if request.GET.get('next[108]'):
                s = s.query("multi_match", query=request.GET.get('next[108]'), fields=['Strung_type'])
            # Cover_type
            if request.GET.get('next[109]'):
                s = s.query("multi_match", query=request.GET.get('next[109]'), fields=['Cover_type'])
            # Grip_size
            if request.GET.get('next[110]'):
                s = s.query("multi_match", query=request.GET.get('next[110]'), fields=['Grip_size'])
            # Head_size
            if request.GET.get('next[111]'):
                s = s.query("multi_match", query=request.GET.get('next[111]'), fields=['Head_size'])
            # Speed
            if request.GET.get('next[112]'):
                s = s.query("multi_match", query=request.GET.get('next[112]'), fields=['Speed'])
            # Willow_type
            if request.GET.get('next[113]'):
                s = s.query("multi_match", query=request.GET.get('next[113]'), fields=['Willow_type'])
            # Bat_grade
            if request.GET.get('next[114]'):
                s = s.query("multi_match", query=request.GET.get('next[114]'), fields=['Bat_grade'])
            # Cover
            if request.GET.get('next[115]'):
                s = s.query("multi_match", query=request.GET.get('next[115]'), fields=['Cover'])
            # Visor
            if request.GET.get('next[116]'):
                s = s.query("multi_match", query=request.GET.get('next[116]'), fields=['Visor'])
            # Bails_included
            if request.GET.get('next[117]'):
                s = s.query("multi_match", query=request.GET.get('next[117]'), fields=['Bails_included'])
            # Fill_type
            if request.GET.get('next[118]'):
                s = s.query("multi_match", query=request.GET.get('next[118]'), fields=['Fill_type'])
            # Tyre_size
            if request.GET.get('next[119]'):
                s = s.query("multi_match", query=request.GET.get('next[24]'), fields=['Tyre_size'])
            # Gear_type
            if request.GET.get('next[120]'):
                s = s.query("multi_match", query=request.GET.get('next[120]'), fields=['Gear_type'])
            # Rear_brake
            if request.GET.get('next[121]'):
                s = s.query("multi_match", query=request.GET.get('next[121]'), fields=['Rear_brake'])
            # Front_brake
            if request.GET.get('next[122]'):
                s = s.query("multi_match", query=request.GET.get('next[122]'), fields=['Front_brake'])
            # Playback_mode
            if request.GET.get('next[123]'):
                s = s.query("multi_match", query=request.GET.get('next[123]'), fields=['Playback_mode'])
            # Accessory_holder
            if request.GET.get('next[124]'):
                s = s.query("multi_match", query=request.GET.get('next[124]'), fields=['Accessory_holder'])
            # Rod_power
            if request.GET.get('next[125]'):
                s = s.query("multi_match", query=request.GET.get('next[125]'), fields=['Rod_power'])
            # Rod_type
            if request.GET.get('next[126]'):
                s = s.query("multi_match", query=request.GET.get('next[126]'), fields=['Rod_type'])
            # Rod_action
            if request.GET.get('next[127]'):
                s = s.query("multi_match", query=request.GET.get('next[127]'), fields=['Rod_action'])
            # Handle_material
            if request.GET.get('next[128]'):
                s = s.query("multi_match", query=request.GET.get('next[128]'), fields=['Handle_material'])
            # Construction
            if request.GET.get('next[129]'):
                s = s.query("multi_match", query=request.GET.get('next[129]'), fields=['Construction'])
            # Drag_type
            if request.GET.get('next[130]'):
                s = s.query("multi_match", query=request.GET.get('next[130]'), fields=['Drag_type'])
            # Container_type
            if request.GET.get('next[131]'):
                s = s.query("multi_match", query=request.GET.get('next[131]'), fields=['Container_type'])
            # Edge_type
            if request.GET.get('next[132]'):
                s = s.query("multi_match", query=request.GET.get('next[132]'), fields=['Edge_type'])
            # Sheath
            if request.GET.get('next[133]'):
                s = s.query("multi_match", query=request.GET.get('next[133]'), fields=['Sheath'])
            # Coated
            if request.GET.get('next[134]'):
                s = s.query("multi_match", query=request.GET.get('next[134]'), fields=['Coated'])
            # Finish
            if request.GET.get('next[135]'):
                s = s.query("multi_match", query=request.GET.get('next[135]'), fields=['Finish'])
            # Attachment_type
            if request.GET.get('next[136]'):
                s = s.query("multi_match", query=request.GET.get('next[136]'), fields=['Attachment_type'])
            # Auto_locking
            if request.GET.get('next[137]'):
                s = s.query("multi_match", query=request.GET.get('next[137]'), fields=['Auto_locking'])
            # Tray_included
            if request.GET.get('next[138]'):
                s = s.query("multi_match", query=request.GET.get('next[138]'), fields=['Tray_included'])
            # Magnetic
            if request.GET.get('next[139]'):
                s = s.query("multi_match", query=request.GET.get('next[139]'), fields=['Magnetic'])
            # Diary_type
            if request.GET.get('next[140]'):
                s = s.query("multi_match", query=request.GET.get('next[140]'), fields=['Diary_type'])
            # Steam_burst
            if request.GET.get('next[141]'):
                s = s.query("multi_match", query=request.GET.get('next[141]'), fields=['Steam_burst'])
            # Spray
            if request.GET.get('next[142]'):
                s = s.query("multi_match", query=request.GET.get('next[142]'), fields=['Spray'])
            # Power_consumption
            if request.GET.get('next[143]'):
                s = s.query("multi_match", query=request.GET.get('next[143]'), fields=['Power_consumption'])
            # Rated_pressure
            if request.GET.get('next[144]'):
                s = s.query("multi_match", query=request.GET.get('next[144]'), fields=['Rated_pressure'])
            # Star_rating
            if request.GET.get('next[145]'):
                s = s.query("multi_match", query=request.GET.get('next[145]'), fields=['Star_rating'])
            # Filter_type
            if request.GET.get('next[146]'):
                s = s.query("multi_match", query=request.GET.get('next[146]'), fields=['Filter_type'])
            # Auto_revolving_heater
            if request.GET.get('next[147]'):
                s = s.query("multi_match", query=request.GET.get('next[147]'), fields=['Auto_revolving_heater'])
            # Number_of_stitches
            if request.GET.get('next[148]'):
                s = s.query("multi_match", query=request.GET.get('next[148]'), fields=['Number_of_stitches'])
            # Number_of_blades
            if request.GET.get('next[149]'):
                s = s.query("multi_match", query=request.GET.get('next[149]'), fields=['Number_of_blades'])
            # Load_type
            if request.GET.get('next[150]'):
                s = s.query("multi_match", query=request.GET.get('next[150]'), fields=['Load_type'])
            # Number_of_ways
            if request.GET.get('next[151]'):
                s = s.query("multi_match", query=request.GET.get('next[151]'), fields=['Number_of_ways'])
            # Wired_or_wireless
            if request.GET.get('next[152]'):
                s = s.query("multi_match", query=request.GET.get('next[152]'), fields=['Wired_or_wireless'])
            # Energy_ratings
            if request.GET.get('next[153]'):
                s = s.query("multi_match", query=request.GET.get('next[153]'), fields=['Energy_ratings'])
            # Condenser_coil
            if request.GET.get('next[154]'):
                s = s.query("multi_match", query=request.GET.get('next[154]'), fields=['Condenser_coil'])
            # Ideal_for
            if request.GET.get('next[155]'):
                s = s.query("multi_match", query=request.GET.get('next[155]'), fields=['Ideal_for'])
            # Technology
            if request.GET.get('next[156]'):
                s = s.query("multi_match", query=request.GET.get('next[156]'), fields=['Technology'])
            # Defrosting_type
            if request.GET.get('next[157]'):
                s = s.query("multi_match", query=request.GET.get('next[157]'), fields=['Defrosting_type'])
            # Year
            if request.GET.get('next[158]'):
                s = s.query("multi_match", query=request.GET.get('next[158]'), fields=['Year'])
            # Star
            if request.GET.get('next[159]'):
                s = s.query("multi_match", query=request.GET.get('next[159]'), fields=['Star'])
            # Bee_rating
            if request.GET.get('next[160]'):
                s = s.query("multi_match", query=request.GET.get('next[160]'), fields=['Bee_rating'])
            # Washing_system
            if request.GET.get('next[161]'):
                s = s.query("multi_match", query=request.GET.get('next[161]'), fields=['Washing_system'])
            # Power
            if request.GET.get('next[162]'):
                s = s.query("multi_match", query=request.GET.get('next[162]'), fields=['Power'])
            # Control
            if request.GET.get('next[163]'):
                s = s.query("multi_match", query=request.GET.get('next[163]'), fields=['Control'])
            # Ductless
            if request.GET.get('next[164]'):
                s = s.query("multi_match", query=request.GET.get('next[164]'), fields=['Ductless'])
            # Auto_clean
            if request.GET.get('next[165]'):
                s = s.query("multi_match", query=request.GET.get('next[165]'), fields=['Auto_clean'])
            # Cups
            if request.GET.get('next[166]'):
                s = s.query("multi_match", query=request.GET.get('next[166]'), fields=['Cups'])
            # Number_of_eggs
            if request.GET.get('next[167]'):
                s = s.query("multi_match", query=request.GET.get('next[167]'), fields=['Number_of_eggs'])
            # Number_of_slices
            if request.GET.get('next[168]'):
                s = s.query("multi_match", query=request.GET.get('next[168]'), fields=['Number_of_slices'])
            # Screen_size
            if request.GET.get('next[169]'):
                s = s.query("multi_match", query=request.GET.get('next[169]'), fields=['Screen_size'])
            # Operating_system
            if request.GET.get('next[170]'):
                s = s.query("multi_match", query=request.GET.get('next[170]'), fields=['Operating_system'])
            # Hard_disk_capacity
            if request.GET.get('next[171]'):
                s = s.query("multi_match", query=request.GET.get('next[171]'), fields=['Hard_disk_capacity'])
            # Storage_type
            if request.GET.get('next[172]'):
                s = s.query("multi_match", query=request.GET.get('next[172]'), fields=['Storage_type'])
            # Processor
            if request.GET.get('next[173]'):
                s = s.query("multi_match", query=request.GET.get('next[173]'), fields=['Processor'])
            # Processor_brand
            if request.GET.get('next[174]'):
                s = s.query("multi_match", query=request.GET.get('next[174]'), fields=['Processor_brand'])
            # Processor_gen
            if request.GET.get('next[175]'):
                s = s.query("multi_match", query=request.GET.get('next[175]'), fields=['Processor_gen'])
            # RAM_type
            if request.GET.get('next[176]'):
                s = s.query("multi_match", query=request.GET.get('next[176]'), fields=['RAM_type'])
            # RAM
            if request.GET.get('next[177]'):
                s = s.query("multi_match", query=request.GET.get('next[177]'), fields=['RAM'])
            # Graphics
            if request.GET.get('next[178]'):
                s = s.query("multi_match", query=request.GET.get('next[178]'), fields=['Graphics'])
            # Graphics_name
            if request.GET.get('next[179]'):
                s = s.query("multi_match", query=request.GET.get('next[179]'), fields=['Graphics_name'])
            # Graphics_processor_series
            if request.GET.get('next[180]'):
                s = s.query("multi_match", query=request.GET.get('next[180]'), fields=['Graphics_processor_series'])
            # Graphics_memory_type
            if request.GET.get('next[181]'):
                s = s.query("multi_match", query=request.GET.get('next[181]'), fields=['Graphics_memory_type'])
            # Touch_screen
            if request.GET.get('next[182]'):
                s = s.query("multi_match", query=request.GET.get('next[182]'), fields=['Touch_screen'])
            # Interface
            if request.GET.get('next[183]'):
                s = s.query("multi_match", query=request.GET.get('next[183]'), fields=['Interface'])
            # Water_proof
            if request.GET.get('next[184]'):
                s = s.query("multi_match", query=request.GET.get('next[184]'), fields=['Water_proof'])
            # Operation_type
            if request.GET.get('next[185]'):
                s = s.query("multi_match", query=request.GET.get('next[185]'), fields=['Operation_type'])
            # Number_of_cells
            if request.GET.get('next[186]'):
                s = s.query("multi_match", query=request.GET.get('next[186]'), fields=['Number_of_cells'])
            # Compatible_laptop_size
            if request.GET.get('next[187]'):
                s = s.query("multi_match", query=request.GET.get('next[187]'), fields=['Compatible_laptop_size'])
            # Ergonomic
            if request.GET.get('next[188]'):
                s = s.query("multi_match", query=request.GET.get('next[188]'), fields=['Ergonomic'])
            # Illuminated_keys
            if request.GET.get('next[189]'):
                s = s.query("multi_match", query=request.GET.get('next[189]'), fields=['Illuminated_keys'])
            # Shock_resistance
            if request.GET.get('next[190]'):
                s = s.query("multi_match", query=request.GET.get('next[190]'), fields=['Shock_resistance'])
            # Wireless_speed
            if request.GET.get('next[191]'):
                s = s.query("multi_match", query=request.GET.get('next[191]'), fields=['Wireless_speed'])
            # Number_of_Ethernet_ports
            if request.GET.get('next[192]'):
                s = s.query("multi_match", query=request.GET.get('next[192]'), fields=['Number_of_Ethernet_ports'])
            # Transfer_speed
            if request.GET.get('next[193]'):
                s = s.query("multi_match", query=request.GET.get('next[193]'), fields=['Transfer_speed'])
            # Voice_support
            if request.GET.get('next[194]'):
                s = s.query("multi_match", query=request.GET.get('next[194]'), fields=['Voice_support'])
            # Memory_capacity
            if request.GET.get('next[195]'):
                s = s.query("multi_match", query=request.GET.get('next[195]'), fields=['Memory_capacity'])
            # Max_wireless_transmission_rate
            if request.GET.get('next[196]'):
                s = s.query("multi_match", query=request.GET.get('next[196]'), fields=['Max_wireless_transmission_rate'])
            # Frequency_band
            if request.GET.get('next[197]'):
                s = s.query("multi_match", query=request.GET.get('next[197]'), fields=['Frequency_band'])
            # Compatibility
            if request.GET.get('next[198]'):
                s = s.query("multi_match", query=request.GET.get('next[198]'), fields=['Compatibility'])
            # Frequency
            if request.GET.get('next[199]'):
                s = s.query("multi_match", query=request.GET.get('next[199]'), fields=['Frequency'])
            # Number_of_USB_ports
            if request.GET.get('next[200]'):
                s = s.query("multi_match", query=request.GET.get('next[200]'), fields=['Number_of_USB_ports'])
            # Antennae
            if request.GET.get('next[201]'):
                s = s.query("multi_match", query=request.GET.get('next[201]'), fields=['Antennae'])
            # GST_invoice
            if request.GET.get('next[202]'):
                s = s.query("multi_match", query=request.GET.get('next[202]'), fields=['GST_invoice'])
            # Offers
            if request.GET.get('next[203]'):
                s = s.query("multi_match", query=request.GET.get('next[203]'), fields=['Offers'])
            # Printer_type
            if request.GET.get('next[204]'):
                s = s.query("multi_match", query=request.GET.get('next[204]'), fields=['Printer_type'])
            # Scanner_type
            if request.GET.get('next[205]'):
                s = s.query("multi_match", query=request.GET.get('next[205]'), fields=['Scanner_type'])
            # Printer_output
            if request.GET.get('next[206]'):
                s = s.query("multi_match", query=request.GET.get('next[206]'), fields=['Printer_output'])
            # Refilling_type
            if request.GET.get('next[207]'):
                s = s.query("multi_match", query=request.GET.get('next[207]'), fields=['Refilling_type'])
            # Function
            if request.GET.get('next[208]'):
                s = s.query("multi_match", query=request.GET.get('next[208]'), fields=['Function'])
            # Portable
            if request.GET.get('next[209]'):
                s = s.query("multi_match", query=request.GET.get('next[209]'), fields=['Portable'])
            # Device_chipset
            if request.GET.get('next[210]'):
                s = s.query("multi_match", query=request.GET.get('next[210]'), fields=['Device_chipset'])
            # Lamp_life
            if request.GET.get('next[211]'):
                s = s.query("multi_match", query=request.GET.get('next[211]'), fields=['Lamp_life'])
            # Brightness
            if request.GET.get('next[212]'):
                s = s.query("multi_match", query=request.GET.get('next[212]'), fields=['Brightness'])
            # Edition
            if request.GET.get('next[213]'):
                s = s.query("multi_match", query=request.GET.get('next[213]'), fields=['Edition'])
            # Architecture
            if request.GET.get('next[214]'):
                s = s.query("multi_match", query=request.GET.get('next[214]'), fields=['Architecture'])
            # Board
            if request.GET.get('next[215]'):
                s = s.query("multi_match", query=request.GET.get('next[215]'), fields=['Board'])
            # Class
            if request.GET.get('next[216]'):
                s = s.query("multi_match", query=request.GET.get('next[216]'), fields=['Class'])
            # Subject
            if request.GET.get('next[217]'):
                s = s.query("multi_match", query=request.GET.get('next[217]'), fields=['Subject'])
            # Validity
            if request.GET.get('next[218]'):
                s = s.query("multi_match", query=request.GET.get('next[218]'), fields=['Validity'])
            # Screen_resolution
            if request.GET.get('next[219]'):
                s = s.query("multi_match", query=request.GET.get('next[219]'), fields=['Screen_resolution'])
            # Screen_form_factor
            if request.GET.get('next[220]'):
                s = s.query("multi_match", query=request.GET.get('next[220]'), fields=['Screen_form_factor'])
            # Inbuilt_speaker
            if request.GET.get('next[221]'):
                s = s.query("multi_match", query=request.GET.get('next[221]'), fields=['Inbuilt_speaker'])
            # Panel_type
            if request.GET.get('next[222]'):
                s = s.query("multi_match", query=request.GET.get('next[222]'), fields=['Panel_type'])
            # Connectivity
            if request.GET.get('next[223]'):
                s = s.query("multi_match", query=request.GET.get('next[223]'), fields=['Connectivity'])
            # Response_time
            if request.GET.get('next[224]'):
                s = s.query("multi_match", query=request.GET.get('next[224]'), fields=['Response_time'])
            # Fan_diameter
            if request.GET.get('next[225]'):
                s = s.query("multi_match", query=request.GET.get('next[225]'), fields=['Fan_diameter'])
            # Max_fan_speed
            if request.GET.get('next[226]'):
                s = s.query("multi_match", query=request.GET.get('next[226]'), fields=['Max_fan_speed'])
            # Number_of_satacables
            if request.GET.get('next[227]'):
                s = s.query("multi_match", query=request.GET.get('next[227]'), fields=['Number_of_satacables'])
            # Power_output
            if request.GET.get('next[228]'):
                s = s.query("multi_match", query=request.GET.get('next[228]'), fields=['Power_output'])
            # Number_of_cores
            if request.GET.get('next[229]'):
                s = s.query("multi_match", query=request.GET.get('next[229]'), fields=['Number_of_cores'])
            # Processor_speed
            if request.GET.get('next[230]'):
                s = s.query("multi_match", query=request.GET.get('next[230]'), fields=['Processor_speed'])
            # Data_rate
            if request.GET.get('next[231]'):
                s = s.query("multi_match", query=request.GET.get('next[231]'), fields=['Data_rate'])
            # Device
            if request.GET.get('next[232]'):
                s = s.query("multi_match", query=request.GET.get('next[232]'), fields=['Device'])
            # Chipset
            if request.GET.get('next[233]'):
                s = s.query("multi_match", query=request.GET.get('next[233]'), fields=['Chipset'])
            # Clock_speed
            if request.GET.get('next[234]'):
                s = s.query("multi_match", query=request.GET.get('next[234]'), fields=['Clock_speed'])
            # Number_of_HDMI_ports
            if request.GET.get('next[235]'):
                s = s.query("multi_match", query=request.GET.get('next[235]'), fields=['Number_of_HDMI_ports'])
            # Configuration
            if request.GET.get('next[236]'):
                s = s.query("multi_match", query=request.GET.get('next[236]'), fields=['Configuration'])
            # Smart_tv
            if request.GET.get('next[237]'):
                s = s.query("multi_match", query=request.GET.get('next[237]'), fields=['Smart_tv'])
            # Screen_type
            if request.GET.get('next[238]'):
                s = s.query("multi_match", query=request.GET.get('next[238]'), fields=['Screen_type'])
            # Curve_tv
            if request.GET.get('next[239]'):
                s = s.query("multi_match", query=request.GET.get('next[239]'), fields=['Curve_tv'])
            # Internal_storage
            if request.GET.get('next[240]'):
                s = s.query("multi_match", query=request.GET.get('next[240]'), fields=['Internal_storage'])
            # Battery_capacity
            if request.GET.get('next[241]'):
                s = s.query("multi_match", query=request.GET.get('next[241]'), fields=['Battery_capacity'])
            # Network_type
            if request.GET.get('next[242]'):
                s = s.query("multi_match", query=request.GET.get('next[242]'), fields=['Network_type'])
            # SIM_type
            if request.GET.get('next[243]'):
                s = s.query("multi_match", query=request.GET.get('next[243]'), fields=['SIM_type'])
            # Primary_camera
            if request.GET.get('next[244]'):
                s = s.query("multi_match", query=request.GET.get('next[244]'), fields=['Primary_camera'])
            # Secondary_camera
            if request.GET.get('next[245]'):
                s = s.query("multi_match", query=request.GET.get('next[245]'), fields=['Secondary_camera'])
            # Operating_system_name
            if request.GET.get('next[246]'):
                s = s.query("multi_match", query=request.GET.get('next[246]'), fields=['Operating_system_name'])
            # Speciality
            if request.GET.get('next[247]'):
                s = s.query("multi_match", query=request.GET.get('next[247]'), fields=['Speciality'])
            # Voice_calling
            if request.GET.get('next[248]'):
                s = s.query("multi_match", query=request.GET.get('next[248]'), fields=['Voice_calling'])
            # Battery_type
            if request.GET.get('next[249]'):
                s = s.query("multi_match", query=request.GET.get('next[249]'), fields=['Battery_type'])
            # Syncing_method
            if request.GET.get('next[250]'):
                s = s.query("multi_match", query=request.GET.get('next[250]'), fields=['Syncing_method'])
            # Wireless_standard
            if request.GET.get('next[251]'):
                s = s.query("multi_match", query=request.GET.get('next[251]'), fields=['Wireless_standard'])
            # Indicator
            if request.GET.get('next[252]'):
                s = s.query("multi_match", query=request.GET.get('next[252]'), fields=['Indicator'])
            # Compatible_mobile
            if request.GET.get('next[253]'):
                s = s.query("multi_match", query=request.GET.get('next[253]'), fields=['Compatible_mobile'])
            # Extension
            if request.GET.get('next[254]'):
                s = s.query("multi_match", query=request.GET.get('next[254]'), fields=['Extension'])
            # Movement
            if request.GET.get('next[255]'):
                s = s.query("multi_match", query=request.GET.get('next[255]'), fields=['Movement'])
            # Fixture_type
            if request.GET.get('next[256]'):
                s = s.query("multi_match", query=request.GET.get('next[256]'), fields=['Fixture_type'])
            # Installation_type
            if request.GET.get('next[257]'):
                s = s.query("multi_match", query=request.GET.get('next[257]'), fields=['Installation_type'])
            # Sweep_diameter
            if request.GET.get('next[258]'):
                s = s.query("multi_match", query=request.GET.get('next[258]'), fields=['Sweep_diameter'])
            # Phase
            if request.GET.get('next[259]'):
                s = s.query("multi_match", query=request.GET.get('next[259]'), fields=['Phase'])
            # Number_of_poles
            if request.GET.get('next[260]'):
                s = s.query("multi_match", query=request.GET.get('next[260]'), fields=['Number_of_poles'])
            # Flammable
            if request.GET.get('next[261]'):
                s = s.query("multi_match", query=request.GET.get('next[261]'), fields=['Flammable'])
            # Sensor_type
            if request.GET.get('next[262]'):
                s = s.query("multi_match", query=request.GET.get('next[262]'), fields=['Sensor_type'])
            # Effective_pixels
            if request.GET.get('next[263]'):
                s = s.query("multi_match", query=request.GET.get('next[263]'), fields=['Effective_pixels'])
            # Maximum_load_capacity
            if request.GET.get('next[264]'):
                s = s.query("multi_match", query=request.GET.get('next[264]'), fields=['Maximum_load_capacity'])
            # Prime_Zoom
            if request.GET.get('next[265]'):
                s = s.query("multi_match", query=request.GET.get('next[265]'), fields=['Prime_Zoom'])
            # Focal_length
            if request.GET.get('next[266]'):
                s = s.query("multi_match", query=request.GET.get('next[266]'), fields=['Focal_length'])
            # Lens_type
            if request.GET.get('next[267]'):
                s = s.query("multi_match", query=request.GET.get('next[267]'), fields=['Lens_type'])
            # Max_aperture
            if request.GET.get('next[268]'):
                s = s.query("multi_match", query=request.GET.get('next[268]'), fields=['Max_aperture'])
            # Lens_mount
            if request.GET.get('next[269]'):
                s = s.query("multi_match", query=request.GET.get('next[269]'), fields=['Lens_mount'])
            # Max_magnification
            if request.GET.get('next[270]'):
                s = s.query("multi_match", query=request.GET.get('next[270]'), fields=['Max_magnification'])
            # Mount_tracking
            if request.GET.get('next[271]'):
                s = s.query("multi_match", query=request.GET.get('next[271]'), fields=['Mount_tracking'])
            # Placement_type
            if request.GET.get('next[272]'):
                s = s.query("multi_match", query=request.GET.get('next[272]'), fields=['Placement_type'])
            # Male_thread_diameter
            if request.GET.get('next[273]'):
                s = s.query("multi_match", query=request.GET.get('next[273]'), fields=['Male_thread_diameter'])
            # Female_thread_diameter
            if request.GET.get('next[274]'):
                s = s.query("multi_match", query=request.GET.get('next[274]'), fields=['Female_thread_diameter'])
            # Vehicle_brand
            if request.GET.get('next[275]'):
                s = s.query("multi_match", query=request.GET.get('next[275]'), fields=['Vehicle_brand'])
            # Vehicle_model
            if request.GET.get('next[276]'):
                s = s.query("multi_match", query=request.GET.get('next[276]'), fields=['Vehicle_model'])
            # Number_of_indicator_lamps
            if request.GET.get('next[277]'):
                s = s.query("multi_match", query=request.GET.get('next[277]'), fields=['Number_of_indicator_lamps'])
            # Tachometer
            if request.GET.get('next[278]'):
                s = s.query("multi_match", query=request.GET.get('next[278]'), fields=['Tachometer'])
            # Armours
            if request.GET.get('next[279]'):
                s = s.query("multi_match", query=request.GET.get('next[279]'), fields=['Armours'])
            # Platform
            if request.GET.get('next[280]'):
                s = s.query("multi_match", query=request.GET.get('next[280]'), fields=['Platform'])
            # PEGI_rating
            if request.GET.get('next[281]'):
                s = s.query("multi_match", query=request.GET.get('next[281]'), fields=['PEGI_rating'])
            # Game_modes
            if request.GET.get('next[282]'):
                s = s.query("multi_match", query=request.GET.get('next[282]'), fields=['Game_modes'])
            # ESRB_rating
            if request.GET.get('next[283]'):
                s = s.query("multi_match", query=request.GET.get('next[283]'), fields=['ESRB_rating'])
            # Temple_material
            if request.GET.get('next[284]'):
                s = s.query("multi_match", query=request.GET.get('next[284]'), fields=['Temple_material'])
            # Lens_type_supported
            if request.GET.get('next[285]'):
                s = s.query("multi_match", query=request.GET.get('next[285]'), fields=['Lens_type_supported'])
            # Temple_color
            if request.GET.get('next[286]'):
                s = s.query("multi_match", query=request.GET.get('next[286]'), fields=['Temple_color'])


            # to convert the results to model results

            # Product results
            qs = list(s.to_queryset())

            # Marketplace results
            shop_qs = list(r_shops.to_queryset())
            mall_qs = list(r_malls.to_queryset())
            market_qs = list(r_markets.to_queryset())


            # sorting for ascending order or descending order
            if request.GET.get('next[1]')=="asc":
                sorting_price_ascending(qs)
            elif request.GET.get('next[1]')=="dsc":
                sorting_price_descending(qs)
            elif request.GET.get('next[1]')=='Nwst':
                NewestArrivals(qs)
            else:
                pass

            # Combined queryset
            ms = qs + shop_qs + mall_qs + market_qs
            # Marketplace or products
            if request.GET.get('next[300]'):
                marketplace = request.GET.get('next[300]')
                if marketplace == 'Marketplace':
                    ms= shop_qs+mall_qs+market_qs
                else:
                    ms = qs
            return render(request, 'Base/searchbar.html', {'results': ms,
                                                           'order':order,
                                                           'Brands':Brands,
                                                           'Colors':Colors,
                                                           'base':base,

            # Marketplace results
            'results_marketplace':market_qs, 'results_shops':shop_qs, 'results_malls':mall_qs,

            # Product Based Filters

            'Fit':Fit,'Pattern':Pattern,'Neck_type':Neck_type,'Sleeve_type':Sleeve_type,'Theme':Theme,'Fabric':Fabric,'occasion':occasion,

            'Collar':Collar,'type':type,'Distress':Distress,'Fade':Fade,'Waist_rise':Waist_rise,'heel_height':heel_height,'Length':Length,'Closure':Closure

            ,'Sleeve_style':Sleeve_style,'usage':usage,'Hooded':Hooded,'Ornamentation':Ornamentation,'Styling':Styling,'Suitable_for':Suitable_for,

            'Applied_for':Applied_for,'Hair_type':Hair_type,'Pack_of':Pack_of,'Washable':Washable,'Water_resistance':Water_resistance,'Rise':Rise,

            'Straps':Straps,'Wire_support':Wire_support,'Padding':Padding,'Seam':Seam,'Coverage':Coverage,'Back_style':Back_style,'Dial_color':Dial_color,

            'Features':Features,'Dial_shape':Dial_shape,'Strap_material':Strap_material,'Number_of_compartments':Number_of_compartments,'Material':Material,

            'Bag_size':Bag_size,'wheels':wheels,'body_type':body_type,'capacity':capacity,'card_slot':card_slot,'Strap_color':Strap_color,'Compatible_OS':Compatible_OS,

            'Display_type':Display_type,'Gemstones':Gemstones,'Gender':Gender,'Blade_material':Blade_material,'Battery_run_time':Battery_run_time,'Body_material':Body_material,

            'Plate_coating':Plate_coating,'Wattage':Wattage,'Collection':Collection,'Ring_size':Ring_size,'Dress_length':Dress_length,'Length_type':Length_type,

            'Saree_type':Saree_type,'Saree_style':Saree_style,'Saree_length':Saree_length,'Blouse_included':Blouse_included,'Saree_Fall_length':Saree_Fall_length,

            'Saree_Fall_width':Saree_Fall_width,'Dupatta_included':Dupatta_included,'Rechargeable':Rechargeable,'Battery_operated':Battery_operated,'Character':Character,

            'Thermoware':Thermoware,'Age_group':Age_group,'Pot_included':Pot_included,'Bonsai':Bonsai,'Outer_material':Outer_material,'Towel_type':Towel_type,

            'Reversible':Reversible,'width':width,'Shape':Shape,'Microwave_safe':Microwave_safe,'Showpiece_type':Showpiece_type,'No_of_prongs':No_of_prongs,

            'Fragrance':Fragrance,'Quantity':Quantity,'Form':Form,'Light_used':Light_used,'adjustable':adjustable,'Mount_type':Mount_type,'Bulb_included':Bulb_included,

            'Dimmable':Dimmable,'Foldable':Foldable,'Adjustable_height':Adjustable_height,'Mouse_tray':Mouse_tray,'Height':Height,'Storage_included':Storage_included,

            'Separated':Separated,'Weight':Weight,'Heart_rate_sensor':Heart_rate_sensor,'Design':Design,'Diameter':Diameter,'Contains_pump':Contains_pump,

            'Thickness':Thickness,'Grip':Grip,'Playing_level':Playing_level,'Strung_type':Strung_type,'Cover_type':Cover_type,'Grip_size':Grip_size,'Head_size':Head_size,

            'Speed':Speed,'Willow_type':Willow_type,'Bat_grade':Bat_grade,'Cover':Cover,'Visor':Visor,'Bails_included':Bails_included,'Fill_type':Fill_type,

            'Tyre_size':Tyre_size,'Gear_type':Gear_type,'Rear_brake':Rear_brake,'Front_brake':Front_brake,'Playback_mode':Playback_mode,'Accessory_holder':Accessory_holder,

            'Rod_power':Rod_power,'Rod_type':Rod_type,'Rod_action':Rod_action,'Handle_material':Handle_material,'Construction':Construction,'Drag_type':Drag_type,

            'Container_type':Container_type,'Edge_type':Edge_type,'Sheath':Sheath,'Coated':Coated,'Finish':Finish,'Attachment_type':Attachment_type,

            'Auto_locking':Auto_locking,'Tray_included':Tray_included,'Magnetic':Magnetic,'Diary_type':Diary_type,'Steam_burst':Steam_burst,'Spray':Spray,

            'Power_consumption':Power_consumption,'Rated_pressure':Rated_pressure,'Star_rating':Star_rating,'Filter_type':Filter_type,'Auto_revolving_heater':Auto_revolving_heater,

            'Number_of_stitches':Number_of_stitches,'Number_of_blades':Number_of_blades,'Load_type':Load_type,'Number_of_ways':Number_of_ways,'Wired_or_wireless':Wired_or_wireless,

            'Energy_ratings':Energy_ratings,'Condenser_coil':Condenser_coil,'Ideal_for':Ideal_for,'Technology':Technology,'Defrosting_type':Defrosting_type,

            'Year':Year,'Star':Star,'Bee_rating':Bee_rating,'Washing_system':Washing_system,'Power':Power,'Control':Control,'Ductless':Ductless,'Auto_clean':Auto_clean,

            'Cups':Cups,'Number_of_eggs':Number_of_eggs,'Number_of_slices':Number_of_slices,'Screen_size':Screen_size,'Operating_system':Operating_system,

            'Hard_disk_capacity':Hard_disk_capacity,'Storage_type':Storage_type,'Processor':Processor,'Processor_brand':Processor_brand,'Processor_gen':Processor_gen,

            'RAM_type':RAM_type,'RAM':RAM,'Graphics':Graphics,'Graphics_name':Graphics_name,'Graphics_processor_series':Graphics_processor_series,'Graphics_memory_type':Graphics_memory_type,

            'Touch_screen':Touch_screen,'Interface':Interface,'Water_proof':Water_proof,'Operation_type':Operation_type,'Number_of_cells':Number_of_cells,

            'Compatible_laptop_size':Compatible_laptop_size,'Ergonomic':Ergonomic,'Illuminated_keys':Illuminated_keys,'Shock_resistance':Shock_resistance,

            'Wireless_speed':Wireless_speed,'Number_of_Ethernet_ports':Number_of_Ethernet_ports,'Transfer_speed':Transfer_speed,'Voice_support':Voice_support,

            'Memory_capacity':Memory_capacity,'Max_wireless_transmission_rate':Max_wireless_transmission_rate,'Frequency_band':Frequency_band,'Compatibility':Compatibility,

            'Frequency':Frequency,'Number_of_USB_ports':Number_of_USB_ports,'Antennae':Antennae,'GST_invoice':GST_invoice,'Offers':Offers,'Printer_type':Printer_type,

            'Scanner_type':Scanner_type,'Printer_output':Printer_output,'Refilling_type':Refilling_type,'Function':Function,'Portable':Portable,'Device_chipset':Device_chipset,

            'Lamp_life':Lamp_life,'Brightness':Brightness,'Edition':Edition,'Architecture':Architecture,'Board':Board,'Class':Class,'Subject':Subject,'Validity':Validity,

            'Screen_resolution':Screen_resolution,'Screen_form_factor':Screen_form_factor,'Inbuilt_speaker':Inbuilt_speaker,'Panel_type':Panel_type,'Connectivity':Connectivity,

            'Response_time':Response_time,'Fan_diameter':Fan_diameter,'Max_fan_speed':Max_fan_speed,'Number_of_satacables':Number_of_satacables,'Power_output':Power_output,

            'Number_of_cores':Number_of_cores,'Processor_speed':Processor_speed,'Data_rate':Data_rate,'Device':Device,'Chipset':Chipset,'Clock_speed':Clock_speed,

            'Number_of_HDMI_ports':Number_of_HDMI_ports,'Configuration':Configuration,'Smart_tv':Smart_tv,'Screen_type':Screen_type,'Curve_tv':Curve_tv,'Internal_storage':Internal_storage,

            'Battery_capacity':Battery_capacity,'Network_type':Network_type,'SIM_type':SIM_type,'Primary_camera':Primary_camera,'Secondary_camera':Secondary_camera,

            'Operating_system_name':Operating_system_name,'Speciality':Speciality,'Voice_calling':Voice_calling,'Battery_type':Battery_type,'Syncing_method':Syncing_method,

            'Wireless_standard':Wireless_standard,'Indicator':Indicator,'Compatible_mobile':Compatible_mobile,'Extension':Extension,'Movement':Movement,'Fixture_type':Fixture_type,

            'Installation_type':Installation_type,'Sweep_diameter':Sweep_diameter,'Phase':Phase,'Number_of_poles':Number_of_poles,'Flammable':Flammable,'Sensor_type':Sensor_type,

            'Effective_pixels':Effective_pixels,'Maximum_load_capacity':Maximum_load_capacity,'Prime_Zoom':Prime_Zoom,'Focal_length':Focal_length,'Lens_type':Lens_type,

            'Max_aperture':Max_aperture,'Lens_mount':Lens_mount,'Max_magnification':Max_magnification,'Mount_tracking':Mount_tracking,'Placement_type':Placement_type,

            'Male_thread_diameter':Male_thread_diameter,'Female_thread_diameter':Female_thread_diameter,'Vehicle_brand':Vehicle_brand,'Vehicle_model':Vehicle_model,

            'Number_of_indicator_lamps':Number_of_indicator_lamps,'Tachometer':Tachometer,'Armours':Armours,'Platform':Platform,'PEGI_rating':PEGI_rating,'Game_modes':Game_modes,

            'ESRB_rating':ESRB_rating,'Temple_material':Temple_material,'Lens_type_supported':Lens_type_supported,'Temple_color':Temple_color,

                                                           })
            # if the search is empty
        else:
            next = request.GET.get('next[0]', '/')
            return HttpResponseRedirect(next)



# Add item to wishlist
@login_required
def Wishlist_Add(request,slug):
    item = get_object_or_404(Product, slug=slug)
    wishlist_qs = Wishlist.objects.filter(user=request.user)
    if wishlist_qs.exists():
        wishlist=wishlist_qs[0]
        if wishlist.items.filter(slug=slug).exists():
            return redirect('Base:wishlist')
        else:
            wishlist.items.add(item)
            return redirect('Base:wishlist')
    else:
        wishlist = Wishlist(user=request.user)
        wishlist.save()
        wishlist.items.add(item)
        return redirect('Base:wishlist')

# Remove item from wishlist
@login_required
def Wishlist_Remove(request,slug):
    item = get_object_or_404(Product, slug=slug)
    wishlist= Wishlist.objects.get(user=request.user)
    wishlist.items.remove(item)
    return JsonResponse('Done',safe=False)

@login_required
def Wishlist_View(request):
    # for order info
    try:
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order=order_qs[0]
        else:
            order=False
    except :
        order=False
    try:
        wishlist = Wishlist.objects.get(user=request.user)
    except:
        wishlist = Wishlist(user = request.user)
        wishlist.save()

    content={'Wishlist':wishlist,
             'order':order}
    return render(request,'Base/wishlist.html',content)

@login_required
def MyOrdersView(request):
    # for order info
    try:
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order = order_qs[0]
        else:
            order = False
    except:
        order = False

    my_orders = MyOrders.objects.get_or_create(user = request.user)
    return render(request, 'Base/MyOrders.html', {
        'order':order,
        'MyOrders':my_orders[0]
    })
