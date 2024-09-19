from rest_framework import serializers
from adminuser.models import user
from adminuser.models import Tarjeta
from adminuser.models import mv

class Userserializer(serializers.ModelSerializer):
    class Meta:
        model=user
        fields='__all__'
        
        

class Tarjetaserializer(serializers.ModelSerializer):
    class Meta:
        model=Tarjeta
        fields='__all__'


class mvserializer(serializers.ModelSerializer):
    class Meta:
        model=mv
        fields='__all__'