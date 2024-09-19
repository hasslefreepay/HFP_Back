from rest_framework import viewsets
from rest_framework import generics
from adminuser.models import user
from adminuser.api.serializer import Userserializer
from adminuser.models import Tarjeta
from adminuser.models import mv
from adminuser.api.serializer import mvserializer
from adminuser.api.serializer import Tarjetaserializer
from rest_framework.permissions import IsAuthenticated
from adminuser.api.permissions import IsAuthenticatedOrReadOnly
from adminuser.api.permissions import Crear
from adminuser.api.permissions import Ver

class userviewset(viewsets.ModelViewSet):
    queryset=user.objects.all()
    serializer_class=Userserializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    

class mvviewset(viewsets.ModelViewSet):
    queryset=mv.objects.all()
    serializer_class=mvserializer
    permission_classes = [IsAuthenticated]

class TarjetaListView(generics.ListAPIView):
    serializer_class = Tarjetaserializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Tarjeta.objects.filter(user_id=user_id)
    

class  CrearTarjeta(generics.CreateAPIView):
    queryset = Tarjeta.objects.all()
    serializer_class = Tarjetaserializer
    permission_classes = [Crear]
    
    
