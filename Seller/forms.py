from Base.models import Product
from django import forms

# Add products to the seller profile and to Products
class AddProduct(forms.ModelForm):
    class Meta:
        model = Product
        fields =('Name','price','discount_price','main_category','sub_category','sub_sub_category','sub_sub_sub_category',
                 'Brand','color',
                 'description','image','image1','image2','image3','image4','image5','image6','image7'
                 ,'image8','image9','video')

