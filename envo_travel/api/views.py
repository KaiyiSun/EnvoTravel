from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer, TravelSerializer
from .models import Room, Travel

# Create your views here.
class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class TravelView(generics.ListAPIView):
    queryset = Travel.objects.all()
    serializer_class = TravelSerializer
