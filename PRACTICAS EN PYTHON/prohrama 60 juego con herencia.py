import random

class Jugador():
    def __init__(self):
        self.nombre = input("Ingrese nombre: ")
        self.puntos = 100
        self.valor_dado = self.dado()  # guardo el resultado
        self.imprimir()

    def dado(self):
        return random.randint(1, 6)

    def imprimir(self):
        print("El número de su dado es:", self.valor_dado)
        print("Sus puntos son:", self.puntos)


class Gamer(Jugador):
    def __init__(self):
        super().__init__() 
        self.jugando()

    def jugando(self):
        if self.valor_dado > 4:
            self.puntos += 100
            print("Ganaste puntos!")
        else:
            self.puntos -= 100
            print("Perdiste puntos!")

        print("Su nuevo puntaje es:", self.puntos)


nuevo = Gamer()