import imp
from django import views
from django.urls import path
from .views import RoomView, TravelView

urlpatterns = [path("room", RoomView.as_view()), path("travel", TravelView.as_view())]
