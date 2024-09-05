# Generated by Django 5.1 on 2024-09-05 02:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='user',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('apellidos', models.CharField(max_length=50)),
                ('correo', models.EmailField(max_length=50)),
                ('contraseña', models.CharField(max_length=50)),
                ('telefono', models.IntegerField()),
                ('pais', models.TextField(max_length=50)),
                ('departamento', models.TextField(max_length=50)),
                ('ciudad', models.TextField(max_length=50)),
                ('codp', models.IntegerField()),
            ],
        ),
    ]
