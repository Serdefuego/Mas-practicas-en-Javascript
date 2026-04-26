class Persona:
    def __init__(self, nombre):
        self.nombre = nombre


class Alumno(Persona):
    def __init__(self, nombre, nota):
        super().__init__(nombre)  # usa el __init__ del padre
        self.nota = nota


a = Alumno("Marcos", 10)
print(a.nombre, a.nota)