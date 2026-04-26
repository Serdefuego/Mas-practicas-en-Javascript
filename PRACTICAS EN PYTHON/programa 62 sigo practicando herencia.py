class Padre:
    def saludar(self):
        print("Hola desde el padre")


class Hijo(Padre):
    def saludar(self):
        super().saludar()  # llama al método del padre UTILIZANDO SUPER
        print("Hola desde el hijo")


h = Hijo()
h.saludar()

''' Salida:
Hola desde el padre
Hola desde el hijo '''