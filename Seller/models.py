from django.db import models
from django.conf import settings
from Base.models import States
from django.shortcuts import reverse
import uuid
from django.core.validators import MinValueValidator, MaxValueValidator
# Pincode deleted

# Malls
class Mall(models.Model):

    name =  models.CharField(max_length=100)
    unique_id = models.CharField(blank=True,null=True,unique=True,max_length=100)
    Area = models.CharField(max_length=200, blank=True, null=True)
    shops = models.ManyToManyField('SellerProfile',blank=True)
    shop_photo1 = models.ImageField(upload_to='Malls/')
    shop_photo2 = models.ImageField(upload_to='Malls/')
    shop_photo3 = models.ImageField(upload_to='Malls/', blank=True, null=True)
    shop_photo4 = models.ImageField(upload_to='Malls/', blank=True, null=True)
    shop_photo5 = models.ImageField(upload_to='Malls/', blank=True, null=True)
    shop_photo6 = models.ImageField(upload_to='Malls/', blank=True, null=True)
    shop_photo7 = models.ImageField(upload_to='Malls/', blank=True, null=True)
    shop_photo8 = models.ImageField(upload_to='Malls/', blank=True, null=True)
    shop_photo9 = models.ImageField(upload_to='Malls/', blank=True, null=True)
    shop_photo10 = models.ImageField(upload_to='Malls/', blank=True, null=True)
    district = models.CharField(max_length=100)
    state =  models.CharField(choices=States,max_length=100)

    def get_abs_url(self):
        return reverse(viewname="Explore:Marketplace-page",  # url-app-name:url_patter_name
                       kwargs={
                           'slug': self.unique_id
                       })

# Profile of the shop
Bank_choices = (
    ('Saving','Saving'),
    ('Current','Current'),
)
class SellerProfile(models.Model):

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # Unique id of the shop
    unique_id = models.CharField(unique=True,blank=True,null=True,max_length=100)

    # Owner Details
    name_of_owner = models.CharField(max_length=100,blank=True,null=True)
    photo_of_owner = models.ImageField(upload_to='sellers/',blank=True,null=True)
    email_of_owner = models.EmailField(blank=True,null=True)

    # Bank Details
    signature = models.ImageField(upload_to='sellers/',blank=True,null=True)
    cancel_cheque = models.ImageField(upload_to='sellers/',blank=True,null=True)
    bank_account_name = models.CharField(blank=True,null=True,max_length=100)
    IFSC_code = models.CharField(blank=True,null=True,max_length=100)
    bank_account_number = models.BigIntegerField(blank=True,null=True)
    Account_type = models.CharField(max_length=100,blank=True,null=True,choices=Bank_choices)

    mobile_number = models.BigIntegerField(blank=True, null=True)
    alternate_number = models.BigIntegerField(blank=True, null=True)

    name= models.CharField(max_length=100,blank=True,null=True)
    shop_photo1 = models.ImageField(upload_to='Shops/',blank=True,null=True)
    shop_photo2 = models.ImageField(upload_to='Shops/',blank=True,null=True)
    shop_photo3 = models.ImageField(upload_to='Shops/',blank=True,null=True)
    shop_photo4 = models.ImageField(upload_to='Shops/',blank=True,null=True)
    shop_photo5 = models.ImageField(upload_to='Shops/',blank=True,null=True)

    # Shop address
    address = models.CharField(blank=True,null=True,max_length=200)
    Area = models.CharField(max_length=100, blank=True, null=True)
    landmark = models.CharField(max_length=100, blank=True, null=True)
    zipcode = models.IntegerField(blank=True,null=True)
    district = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(choices=States, max_length=100, blank=True, null=True)

    products = models.ManyToManyField("Base.Product",blank=True)
    mall_to = models.ForeignKey(Mall,on_delete=models.SET_NULL,blank=True,null=True)
    market_to = models.ForeignKey('Market',on_delete=models.SET_NULL,blank=True,null=True)

    Order_history = models.ManyToManyField("Base.Order_Item",blank=True,symmetrical=False,related_name="OH")
    My_orders = models.ManyToManyField("Base.Order_Item",blank=True,symmetrical=False,related_name='MO')
    # sales and total earning
    sales = models.IntegerField(blank=True,null=True,default=0)
    Earning = models.BigIntegerField(blank=True,null=True,default=0)
    # url of the shop
    def get_abs_url(self):
        return reverse(viewname="Explore:seller-page",  # url-app-name:url_patter_name
                       kwargs={
                           'slug': self.unique_id
                       })

# Payments made and advertising to be added
# markets
class Market(models.Model):

    name = models.CharField(max_length=100)
    # Changes
    malls = models.ManyToManyField(Mall,blank=True)
    shops = models.ManyToManyField(SellerProfile,blank=True)
    Area = models.CharField(max_length=100,blank=True,null=True)
    unique_id = models.CharField(unique=True,blank=True,null=True,max_length=100)
    shop_photo1 = models.ImageField(upload_to='Markets/')
    shop_photo2 = models.ImageField(upload_to='Markets/')
    shop_photo3 = models.ImageField(upload_to='Markets/', blank=True, null=True)
    shop_photo4 = models.ImageField(upload_to='Markets/', blank=True, null=True)
    shop_photo5 = models.ImageField(upload_to='Markets/', blank=True, null=True)
    shop_photo6 = models.ImageField(upload_to='Markets/', blank=True, null=True)
    shop_photo7 = models.ImageField(upload_to='Markets/', blank=True, null=True)
    shop_photo8 = models.ImageField(upload_to='Markets/', blank=True, null=True)
    shop_photo9 = models.ImageField(upload_to='Markets/', blank=True, null=True)
    shop_photo10 = models.ImageField(upload_to='Markets/', blank=True, null=True)
    district = models.CharField(max_length=100)
    state = models.CharField(choices=States, max_length=100)

    def get_abs_url(self):
        return reverse(viewname="Explore:Marketplace-page",  # url-app-name:url_patter_name
                       kwargs={
                           'slug': self.unique_id
                       })

