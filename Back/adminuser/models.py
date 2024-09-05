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
    
    
    
