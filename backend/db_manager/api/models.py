# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class SessionInfo(models.Model):
    class_name = models.CharField(max_length=100, blank = False)
    description = models.CharField(max_length=300, blank = False)
    first_name = models.CharField(max_length = 200, blank = False)
    last_name = models.CharField(max_length = 200, blank = False)
    location = models.CharField(max_length = 100, blank = False)
    def __str__(self):
        return "{}".format(self.name)