# -*- coding: utf-8 -*-
from __future__ import unicode_literals
#for model handling
from django.shortcuts import render
from rest_framework import generics
from .serializers import SessionInfoSerializer
from .models import SessInfo
#for form handling
# from django.http import HttpResponseRedirect
# from django.shortcuts import render
# from .forms import NameForm

# Model Views
class CreateView(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""
    queryset = SessInfo.objects.all()
    serializer_class = SessionInfoSerializer
    def perform_create(self, serializer):
        """Save the post data when creating a new bucketlist."""
        serializer.save()

class DetailsView(generics.RetrieveUpdateDestroyAPIView):
    """This class handles the http GET, PUT and DELETE requests."""
    queryset = SessInfo.objects.all()

    serializer_class = SessionInfoSerializer

# def add_session(request):
#     if request.method == 'POST':
#         form = NameForm(request.POST)
#         if form.is_valid():
#             class_name = form.cleaned_data['class_']
#             description = form.cleaned_data['location']
#             time = form.cleaned_data['time']
#             numPpl = form.cleaned_data['numberOfPeople']
#             joinSet = form.cleaned_data['joinSet']

#             #add to db
#             return HttpResponseRedirect('/thanks/')

#     # if a GET (or any other method) we'll create a blank form
#     else:
#         form = NameForm()