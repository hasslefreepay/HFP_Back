from rest_framework.routers import DefaultRouter
from django.urls import path
from adminuser.api.view import userviewset
from adminuser.api.view import mvviewset
from adminuser.api.views_user import UserValidationAPIView  # Asegúrate de que este archivo exista
from adminuser.api.view import TarjetaListView
from adminuser.api.view import CrearTarjeta

# Configuración del enrutador
router = DefaultRouter()
router.register(r'users', userviewset, basename='user')
router.register(r'mv', mvviewset, basename='mv') 

# Definición de las URLs
urlpatterns = [
    path('validate_user/', UserValidationAPIView.as_view(), name='validate_user'),  # Corrige la ruta si es necesario
    path('vertarjetas/<int:user_id>/', TarjetaListView.as_view(), name='tarjeta-list'),
    path('tarjetas/', CrearTarjeta.as_view(), name='tarjeta-create'),
] + router.urls
