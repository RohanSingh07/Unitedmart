from django.contrib import admin
from .models import Product,Order_Item,Order,Delivery_Address,Wishlist,saved_order,rating_and_reviews,rating_images

# To display the field on the top of the model in django admin
class OrderAdmin(admin.ModelAdmin):
    model = Order
    list_display = ['user',
                    'ordered',
                    'shipped',
                    'received',
                    'refund_requested',
                    'refund_granted',
                    'Address',
                    ]

    list_display_links = [
                        'user',
                        'Address'
    ]

class ProductAdmin(admin.ModelAdmin):
    model=Product
    readonly_fields = ('date',)

# Register your models here.
admin.site.register(Product,ProductAdmin)
admin.site.register(Order_Item)
admin.site.register(Order,OrderAdmin)
admin.site.register(Delivery_Address)
admin.site.register(Wishlist)
admin.site.register(saved_order)
admin.site.register(rating_and_reviews)
admin.site.register(rating_images)

