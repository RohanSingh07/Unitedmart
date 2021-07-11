from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('users.urls',namespace='users')),
    path('', include('Base.urls',namespace='Base')),
    path('', include('Seller.urls',namespace='Seller')),
    path('', include('Explore.urls',namespace='Explore')),
    # path('hay/', include('haystack.urls')),
]
