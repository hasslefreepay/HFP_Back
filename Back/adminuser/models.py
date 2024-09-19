from django.db import models

# Create your models here.

class user(models.Model):
    nombre=models.CharField(max_length=50)
    apellidos=models.CharField(max_length=50)
    correo=models.EmailField(max_length=50)
    contraseña=models.CharField(max_length=50)
    telefono=models.IntegerField()
    pais=models.TextField(max_length=50)
    departamento=models.TextField(max_length=50)
    ciudad=models.TextField(max_length=50)
    codp=models.IntegerField()
    
    
    
class Tarjeta(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    numero = models.BigIntegerField()  # Usualmente las tarjetas tienen 16 dígitos
    cvv = models.IntegerField()      # Generalmente el CVV es de 3 dígitos
    fecha_ano = models.PositiveIntegerField() # Año de expiración
    fecha_mes = models.PositiveIntegerField() # Mes de expiración
    apodo=models.CharField(max_length=20, null=True, blank=True)


class mv(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    destino=models.CharField(max_length=100)
    tarjeta=models.CharField(max_length=20)
    cantidad = models.BigIntegerField() 
    fecha=models.DateField()
    tipo=models.TextField(max_length=20)
    estado=models.TextField(max_length=20)

    
