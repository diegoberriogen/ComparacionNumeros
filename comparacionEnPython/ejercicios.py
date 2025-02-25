# Ejercicio 1: Suma de dos números
import random
num1 = float(input('Ingrese el primer número: '))
num2 = float(input('Ingrese el segundo número: '))
print('La suma es:', num1 + num2)

# Ejercicio 2: Par o impar
num = int(input('Ingrese un número: '))
print('El número es par' if num % 2 == 0 else 'El número es impar')

# Ejercicio 3: Mayor de tres números
num1 = float(input('Ingrese el primer número: '))
num2 = float(input('Ingrese el segundo número: '))
num3 = float(input('Ingrese el tercer número: '))
print('El mayor es:', max(num1, num2, num3))

# Ejercicio 4: Tabla de multiplicar
num = int(input('Ingrese un número para ver su tabla de multiplicar: '))
for i in range(1, 11):
    print(f'{num} x {i} = {num * i}')

# Ejercicio 5: Contar vocales
palabra = input('Ingrese una palabra: ').lower()
vocales = 'aeiou'
contador = sum(1 for letra in palabra if letra in vocales)
print('La palabra tiene', contador, 'vocales')

# Ejercicio 6: Números del 1 al N
N = int(input('Ingrese un número: '))
num = 1
while num <= N:
    print(num)
    num += 1

# Ejercicio 7: Factorial
num = int(input('Ingrese un número para calcular su factorial: '))
factorial = 1
for i in range(1, num + 1):
    factorial *= i
print('El factorial de', num, 'es:', factorial)

# Ejercicio 8: Sumar números pares
suma_pares = sum(i for i in range(1, 101) if i % 2 == 0)
print('La suma de los números pares entre 1 y 100 es:', suma_pares)

# Ejercicio 9: Adivina el número
numero_secreto = random.randint(1, 10)
intento = int(input('Adivina el número entre 1 y 10: '))
while intento != numero_secreto:
    if intento < numero_secreto:
        print('Muy bajo')
    else:
        print('Muy alto')
    intento = int(input('Intenta de nuevo: '))
print('¡Correcto!')

# Ejercicio 10: Número primo
num = int(input('Ingrese un número: '))
es_primo = num > 1 and all(num % i != 0 for i in range(2, int(num**0.5) + 1))
print('El número es primo' if es_primo else 'El número no es primo')

# Ejercicio 11: Área de un triángulo


def area_triangulo(base, altura):
    return (base * altura) / 2

# Ejercicio 12: Número mayor de tres


def numero_mayor(a, b, c):
    return max(a, b, c)

# Ejercicio 13: Contar palabras


def contar_palabras(cadena):
    return len(cadena.split())

# Ejercicio 14: Suma de una lista


def suma_lista(lista):
    return sum(lista)

# Ejercicio 15: Es palíndromo


def es_palindromo(palabra):
    if palabra == palabra[::-1]:
        print(f'"{palabra}" es un palíndromo')
    else:
        print(f'"{palabra}" no es un palíndromo')

# Ejercicio 16: Fibonacci


def fibonacci(n):
    secuencia = [0, 1]
    while len(secuencia) < n:
        secuencia.append(secuencia[-1] + secuencia[-2])
    return secuencia[:n]

# Ejercicio 17: Invertir una cadena


def invertir_cadena(cadena):
    return cadena[::-1]


# Ejercicio 18: Frecuencia de letras
palabra = input('Ingrese una palabra: ').lower()
frecuencia = {}
for letra in palabra:
    if letra.isalpha():
        frecuencia[letra] = frecuencia.get(letra, 0) + 1
print('Frecuencia de letras:', frecuencia)

# Ejercicio 19: Números perfectos
for num in range(1, 1001):
    if num == sum(i for i in range(1, num) if num % i == 0):
        print(num, 'es un número perfecto')

# Ejercicio 20: Menú interactivo
while True:
    print('\nMenú:')
    print('1. Calcular el cuadrado de un número')
    print('2. Mostrar números pares entre dos valores')
    print('3. Salir del programa')
    opcion = input('Elija una opción: ')

    if opcion == '1':
        num = float(input('Ingrese un número: '))
        print('El cuadrado es:', num ** 2)

    elif opcion == '2':
        inicio = int(input('Ingrese el valor inicial: '))
        fin = int(input('Ingrese el valor final: '))
        for i in range(inicio, fin + 1):
            if i % 2 == 0:
                print(i, end=' ')
        print()

    elif opcion == '3':
        print('Saliendo del programa...')
        break

    else:
        print('Opción no válida. Intente de nuevo.')
