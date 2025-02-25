def menu():
    print('--- Menú de Ejercicios ---')
    print('1. Suma de dos números')
    print('2. Par o impar')
    print('3. Mayor de tres números')
    print('4. Tabla de multiplicar')
    print('5. Contar vocales en una palabra')
    print('6. Números del 1 al N')
    print('7. Factorial de un número')
    print('8. Suma de números pares del 1 al 100')
    print('9. Verificar si un número es primo')
    print('10. Promedio de calificaciones')
    print('11. Números pares hasta N')
    print('12. Conversión de Celsius a Fahrenheit')
    print('13. Días de la semana')
    print('14. Área de un círculo')
    print('15. Conversión de metros a kilómetros')
    print('16. Cuenta regresiva desde N')
    print('17. Suma de dígitos de un número')
    print('18. Verificar si una palabra es palíndromo')
    print('19. Frecuencia de letras en una palabra')
    print('20. Números perfectos del 1 al 1000')
    print('0. Salir')


def suma_dos_numeros():
    num1 = float(input('Ingrese el primer número: '))
    num2 = float(input('Ingrese el segundo número: '))
    print('La suma es:', num1 + num2)


def par_o_impar():
    num = int(input('Ingrese un número: '))
    print('El número es par' if num % 2 == 0 else 'El número es impar')


def mayor_de_tres_numeros():
    num1 = float(input('Ingrese el primer número: '))
    num2 = float(input('Ingrese el segundo número: '))
    num3 = float(input('Ingrese el tercer número: '))
    print('El mayor es:', max(num1, num2, num3))


def tabla_de_multiplicar():
    num = int(input('Ingrese un número para ver su tabla de multiplicar: '))
    for i in range(1, 11):
        print(f'{num} x {i} = {num * i}')


def contar_vocales():
    palabra = input('Ingrese una palabra: ').lower()
    vocales = 'aeiou'
    contador = sum(1 for letra in palabra if letra in vocales)
    print('La palabra tiene', contador, 'vocales')


def numeros_hasta_n():
    N = int(input('Ingrese un número: '))
    for i in range(1, N + 1):
        print(i, end=' ')
    print()


def factorial():
    num = int(input('Ingrese un número para calcular su factorial: '))
    factorial = 1
    for i in range(1, num + 1):
        factorial *= i
    print('El factorial de', num, 'es:', factorial)


def suma_pares_1_a_100():
    suma_pares = sum(i for i in range(1, 101) if i % 2 == 0)
    print('La suma de los números pares entre 1 y 100 es:', suma_pares)


def numero_primo():
    num = int(input('Ingrese un número: '))
    es_primo = num > 1 and all(
        num % i != 0 for i in range(2, int(num**0.5) + 1))
    print('El número es primo' if es_primo else 'El número no es primo')


def promedio_calificaciones():
    cantidad = int(input('¿Cuántas calificaciones desea promediar?: '))
    suma = sum(
        float(input(f'Ingrese la calificación {i + 1}: ')) for i in range(cantidad))
    print('El promedio es:', suma / cantidad)


def numeros_pares_hasta_n():
    N = int(input('Ingrese un número: '))
    print('Números pares hasta', N, ':', [i for i in range(2, N + 1, 2)])


def celsius_a_fahrenheit():
    celsius = float(input('Ingrese la temperatura en grados Celsius: '))
    fahrenheit = (celsius * 9 / 5) + 32
    print(f'{celsius}°C equivalen a {fahrenheit}°F')


def dias_de_la_semana():
    dias = ['Lunes', 'Martes', 'Miércoles',
            'Jueves', 'Viernes', 'Sábado', 'Domingo']
    num = int(input('Ingrese un número (1-7) para ver el día de la semana: '))
    if 1 <= num <= 7:
        print('El día de la semana es:', dias[num - 1])
    else:
        print('Número inválido. Debe estar entre 1 y 7.')


def area_circulo():
    import math
    radio = float(input('Ingrese el radio del círculo: '))
    area = math.pi * radio ** 2
    print('El área del círculo es:', area)


def metros_a_kilometros():
    metros = float(input('Ingrese la distancia en metros: '))
    kilometros = metros / 1000
    print(f'{metros} metros equivalen a {kilometros} kilómetros')


def cuenta_regresiva():
    N = int(input('Ingrese un número para la cuenta regresiva: '))
    for i in range(N, 0, -1):
        print(i, end=' ')
    print()


def suma_digitos():
    num = input('Ingrese un número: ')
    suma_digitos = sum(int(digito) for digito in num if digito.isdigit())
    print('La suma de los dígitos es:', suma_digitos)


def es_palindromo():
    palabra = input('Ingrese una palabra: ').lower()
    print(f'"{palabra}" es un palíndromo' if palabra ==
          palabra[::-1] else f'"{palabra}" no es un palíndromo')


def frecuencia_letras():
    palabra = input('Ingrese una palabra: ').lower()
    frecuencia = {letra: palabra.count(letra)
                  for letra in set(palabra) if letra.isalpha()}
    print('Frecuencia de letras:', frecuencia)


def numeros_perfectos():
    for num in range(1, 1001):
        if num == sum(i for i in range(1, num) if num % i == 0):
            print(num, 'es un número perfecto')


opciones = {
    '1': suma_dos_numeros,
    '2': par_o_impar,
    '3': mayor_de_tres_numeros,
    '4': tabla_de_multiplicar,
    '5': contar_vocales,
    '6': numeros_hasta_n,
    '7': factorial,
    '8': suma_pares_1_a_100,
    '9': numero_primo,
    '10': promedio_calificaciones,
    '11': numeros_pares_hasta_n,
    '12': celsius_a_fahrenheit,
    '13': dias_de_la_semana,
    '14': area_circulo,
    '15': metros_a_kilometros,
    '16': cuenta_regresiva,
    '17': suma_digitos,
    '18': es_palindromo,
    '19': frecuencia_letras,
    '20': numeros_perfectos
}

while True:
    menu()
    eleccion = input('Seleccione una opción (0 para salir): ')
    if eleccion == '0':
        print('Saliendo del programa...')
        break
    elif eleccion in opciones:
        opciones[eleccion]()
    else:
        print('Opción inválida, intente de nuevo.')
