from rest_framework import serializers
from .models import SessInfo


class SessionInfoSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""
    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = SessInfo
        fields = ('id', 'class_name', 'description', 'first_name', 'last_name', 'location', 'time', 'num_people','join_setting')