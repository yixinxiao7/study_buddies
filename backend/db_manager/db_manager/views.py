#for form handling
from django.http import HttpResponseRedirect
from django.shortcuts import render
#from .forms import NameForm
from .models import SessInfo

#poster: push information to hdatabase

#handle forms
def add_session(request):
    if request.method == 'POST':
        form = NameForm(request.POST)
        if form.is_valid():
            first_name = form.cleaned_data['firstName']
            last_name = form.cleaned_data['lastName']
            class_name = form.cleaned_data['class_']
            location = form.cleaned_data['location']
            description = form.cleaned_data['description']
            time = form.cleaned_data['time']
            numPpl = form.cleaned_data['numberOfPeople']
            joinSet = form.cleaned_data['joinSet']

            #add to db
            session = SessInfo(class_name=class_name, 
                                description = description,
                                first_name = first_name,
                                last_name = last_name,
                                location = location,
                                time = time,
                                num_people = numPpl,
                                join_setting = joinSet,
                               )
            session.save()  

    # if a GET (or any other method) we'll create a blank form
    else:
        form = NameForm()


def delete_session(request, data):
    if request.method == 'POST':
        SessInfo.object.filter(id=data).delete()

# def addLiveSessions(request):
#   if request.method == 'POST':
#     form =  QueryForm(request.POST)
#     if form.is_valid():
#       location = form.cleaned_data['location'] #string
#       time = form.cleaned_data['time'] #integer
#       numberOfPeople = form.cleaned_data['numberOfPeople'] #integer
#       joinSet = form.cleaned_data['joinSet'] #bool
#       class_ = form.cleaned_data['class_'] #string
#   else:
#     #not sure yet
#   print(location)
#   print(time)
#   print(numberOfPeople)
#   print(joinSet)
#   print(class_)

#   #add entry to feed_DB
#   #feed_db = db.child("Feed_DB")
#   #make new user
#   #current_user = feed_db.child("")
#   #new_entry = {""}
#   #add new entry to newpostrr
#   #db.child("")
