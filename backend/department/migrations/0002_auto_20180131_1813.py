# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-01-31 18:13
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('department', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='faculty',
            name='joining_year',
            field=models.DateField(default=datetime.datetime(2018, 1, 31, 18, 13, 39, 724897)),
        ),
        migrations.AlterField(
            model_name='research',
            name='date',
            field=models.DateField(default=datetime.datetime(2018, 1, 31, 18, 13, 39, 725469)),
        ),
    ]
