from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import ProfileView,AddProductView,Seller_Home,Delete_Product,Order_history,Ordered_products,Dispatch_item,refund_requests,\
    returns,profile_edit,My_products,Bank_details,AddProduct2,AddProduct3

app_name = 'Seller'
urlpatterns = [
                path('seller/',Seller_Home,name='seller-home'),
                # Seller Dashboard
                path('seller/dashboard', ProfileView, name='dashboard'),
                # Adding products to the seller profile
                path('seller/add-product/', AddProductView, name='add-product'),
                # add product-2
                path('seller/add-product/Quantity/',AddProduct2, name='add-product-2'),
                # add product-3
                path('seller/add-product/products-info/',AddProduct3, name='add-product-3'),
                # Delete product from seller profile
                path('seller/remove-product/', Delete_Product, name='delete-product'),
                # History of the Ordered products
                path('seller/order-history/', Order_history, name='order-history'),
                # Orders
                path('seller/orders/', Ordered_products, name='orders'),
                # Dispatched
                path('seller/dispatched/<id>', Dispatch_item,name='dispatched'),
                # Refund requests
                path('seller/refund-requests/',refund_requests,name='refund-requests'),
                # Returns
                path('seller/returns/',returns,name='returns'),
                # upload seller profile picture
                path('seller/profile-edit/',profile_edit,name='profile-edit'),
                # My products
                path('seller/my-products/',My_products,name='my-products'),
                # Bank details
                path('seller/bank-details/',Bank_details,name='bank-details'),

]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,                       # This is important for media like photos and videos
                          document_root=settings.MEDIA_ROOT)
