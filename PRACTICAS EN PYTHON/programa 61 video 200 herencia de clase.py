class Operacion():
    def __init__(self):
        self.valor1 = int(input("Ingrese primer valor: "))
        self.valor2 = int(input("Ingrese segundo valor: "))
        self.resultado()  # llama al método de la clase hija


class Suma(Operacion):
    def resultado(self):
        print("Resultado de la suma:", self.valor1 + self.valor2)


class Resta(Operacion):
    def resultado(self):
        print("Resultado de la resta:", self.valor1 - self.valor2)


# probar
nuevo = Resta()