class Personaje():
    def __init__(self, nombre, tipo, poder):
        self.nombre = nombre
        self.tipo = tipo
        self.poder = poder

    def saludar(self):
        print("Hola, mi nombre es", self.nombre)
        print("Soy un", self.tipo)
        print("Mi poder es", self.poder)


class Mago(Personaje):
    def __init__(self, nombre):
        super().__init__(nombre, "Mago", 20)


# prueba
nuevo = Mago("Merlin")
nuevo.saludar()