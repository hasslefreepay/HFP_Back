from rest_framework.permissions import BasePermission

class IsAuthenticatedOrReadOnly(BasePermission):
    """
    Permiso que permite la lectura a cualquier usuario, pero solo la escritura
    a usuarios autenticados.
    """
    def has_permission(self, request, view):
        # Permite acceso si el método es GET, HEAD, o OPTIONS (lectura)
        if request.method in ['POST', 'HEAD', 'OPTIONS']:
            return True
        # Para métodos que no son de lectura, requiere autenticación
        return request.user and request.user.is_authenticated



class validacion(BasePermission):
    """
    Permiso que permite la lectura a cualquier usuario, pero solo la escritura
    a usuarios autenticados.
    """
    def has_permission(self, request, view):
        # Permite acceso si el método es GET, HEAD, o OPTIONS (lectura)
        if request.method in ['GET', 'HEAD', 'OPTIONS']:
            return True
        # Para métodos que no son de lectura, requiere autenticación
        return request.user and request.user.is_authenticated


class Crear(BasePermission):
    """
    Permiso que permite la lectura a cualquier usuario, pero solo la escritura
    a usuarios autenticados.
    """
    def has_permission(self, request, view):
        if request.method in ['POST', 'PUT', 'PATCH', 'DELETE']:
            return True
        return request.user and request.user.is_authenticated
    



class Ver(BasePermission):
    """
    Permiso que permite la lectura a cualquier usuario, pero solo la escritura
    a usuarios autenticados.
    """
    def has_permission(self, request, view):
        # Permite acceso si el método es GET, HEAD, o OPTIONS (lectura)
        if request.method in ['GET', 'HEAD', 'OPTIONS']:
            return True
        # Para métodos que no son de lectura, requiere autenticación
        return request.user and request.user.is_authenticated
