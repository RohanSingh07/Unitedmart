# Generated by Django 3.2 on 2021-08-02 02:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Base', '0009_auto_20210730_1132'),
    ]

    operations = [
        migrations.AlterField(
            model_name='delivery_address',
            name='mobile_number',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
    ]
