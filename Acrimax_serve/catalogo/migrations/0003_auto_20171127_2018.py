# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-28 01:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalogo', '0002_auto_20171127_1954'),
    ]

    operations = [
        migrations.AlterField(
            model_name='venta',
            name='fecha',
            field=models.TimeField(auto_now_add=True),
        ),
    ]
