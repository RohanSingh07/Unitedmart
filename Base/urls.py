from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import Home,Product_Detail,add_to_cart,remove_from_cart,Cart,Checkout,searchbar,Wishlist_Add,Wishlist_Remove,Wishlist_View\
    ,delete_from_cart,add_to_saved,delete_from_saved,move_to_cart,reviews_page,add_review

app_name = 'Base'
urlpatterns = [
        path('',Home,name='Homepage'),
        path('product-page/<slug>/',Product_Detail,name='product-page'),

        # add reviews to product
        path('add-review/<slug>',add_review,name='review-page'),

        # rating and reviews page
        path('ratings-and-reviews/',reviews_page,name='ratings-and-reviews'),
        # rating
        path('add-to-cart/<slug>/',add_to_cart,name='add-to-cart'),
        path('move-to-cart/<id>/',move_to_cart,name='move-to-cart'),
        path('remove-from-cart/<slug>/',remove_from_cart,name='remove-from-cart'),
        path('delete-from-cart/<slug>/',delete_from_cart,name='delete-from-cart'),
        path('delete-from-saved/<id>/',delete_from_saved,name='delete-from-saved'),
        path('add-to-saved/<id>/', add_to_saved, name='add-to-saved'),
        path('add-to-wishlist/<slug>/',Wishlist_Add,name='add-to-wishlist'),
        path('remove-from-wishlist/<slug>/',Wishlist_Remove,name='remove-from-wishlist'),
        path('wishlist/',Wishlist_View,name='wishlist'),
        path('Cart/',Cart,name='Cart'),
        path('Checkout/',Checkout,name='Checkout'),
        path('search/',searchbar,name='searchbar'),
            ]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,                       # This is important for media like photos and videos
                          document_root=settings.MEDIA_ROOT)