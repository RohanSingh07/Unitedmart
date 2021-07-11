from django import forms
from django.core.validators import MaxValueValidator,MinValueValidator
class signup(forms.Form):
    phone_number = forms.IntegerField(required=True,validators=[MinValueValidator(1000000000),MaxValueValidator(9999999999)])
    username = forms.CharField(required=True,max_length=30)

class OTPForm(forms.Form):
    otp_user = forms.CharField(required=True,max_length=6)
class PasswordForm(forms.Form):
    password1 = forms.CharField(max_length=20, widget=forms.PasswordInput)
    password2 = forms.CharField(max_length=20, widget=forms.PasswordInput)

