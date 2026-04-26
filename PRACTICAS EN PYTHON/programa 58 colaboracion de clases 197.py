import random
class Dado():
    def __init__(self):
        self.lanzar()
        self.imprimir()

    def lanzar(self):
            self.valor= random.randint(1,6)
            return self.valor               
    
    def imprimir(self):
        print(self.valor)
    


arregloDeDados=[]
# Tirar 3 dados
for i in range(3):
    dado = Dado()
    #esta variable aloja el return de la funcion lanzar
    valor = dado.lanzar()
    #guardo el valor dentro del arreglo
    arregloDeDados.append(valor)

# Muestro el arreglo de dados con los 3 dados cargadis
print("Dados:", arregloDeDados)

# Verificar si son iguales mediante un if
if arregloDeDados[0] == arregloDeDados[1] == arregloDeDados[2]:
    print("Ganaste, son todos iguales ")
else:
    print("Perdiste ")