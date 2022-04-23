from rest_framework import serializers
from .models import Room, Travel


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = (
            "id",
            "code",
            "host",
            "guest_can_pause",
            "votes_to_skip",
            "created_at",
        )


class TravelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Travel
        fields = (
            "id",
            "user",
            "distance",
            "created_at",
        )
