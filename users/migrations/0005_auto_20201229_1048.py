# Generated by Django 2.2 on 2020-12-29 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20201222_1239'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='is_bank_verified',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='account',
            name='is_email_verified',
            field=models.BooleanField(default=False),
        ),
    ]
