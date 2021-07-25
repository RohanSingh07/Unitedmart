from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import Explore_Home,Seller_Detail,Marketplace_Detail,Join_Market,Leave_Market
app_name = 'Explore'

urlpatterns=[
            path('Explore/',Explore_Home,name = 'Explore-home'),
            path('Explore/<slug>/',Seller_Detail,name = 'seller-page'),
            # For Mall / Marketplace
            path('Marketplace/<slug>/',Marketplace_Detail,name='Marketplace-page'),
            # Join Market / Mall
            path('Explore/JoinMarket/<slug>/',Join_Market,name='JoinMarket'),
            # Leave Market / Mall
            path('Explore/LeaveMarket/<slug>/',Leave_Market,name='LeaveMarket'),

]





if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,                       # This is important for media like photos and videos
                          document_root=settings.MEDIA_ROOT)
