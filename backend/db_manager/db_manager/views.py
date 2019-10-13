# from django.shortcuts import render
import pyrebase 

config = {
    'apiKey': "AIzaSyC2k9hJMeJ1ZmMagHIgr-5Qc0GOYqamAeg",
    'authDomain': "study-buddies-db.firebaseapp.com",
    'databaseURL': "https://study-buddies-db.firebaseio.com",
    'projectId': "study-buddies-db",
    'storageBucket': "study-buddies-db.appspot.com",
    'messagingSenderId': "1094935387111",
    'appId': "1:1094935387111:web:f9f01132988aae4531fb42",
    'measurementId': "G-GCQNCJH16N"
  }
firebase = pyrebase.initialize_app(config)
db = firebase.database()

#poster: push information to database
def addLiveSessions(request):
  if request.method == 'POST':
    form =  QueryForm(request.POST)
    if form.is_valid():
      location = form.cleaned_data['location'] #string
      time = form.cleaned_data['time'] #integer
      numberOfPeople = form.cleaned_data['numberOfPeople'] #integer
      joinSet = form.cleaned_data['joinSet'] #bool
      class_ = form.cleaned_data['class_'] #string
  else:
    #not sure yet
  print(location)
  print(time)
  print(numberOfPeople)
  print(joinSet)
  print(class_)

  #add entry to feed_DB
  #feed_db = db.child("Feed_DB")
  #make new user
  #current_user = feed_db.child("")
  #new_entry = {""}
  #add new entry to newpostrr
  #db.child("")
