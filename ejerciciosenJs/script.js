function mostrarEjercicio() {
    const seleccion = document.getElementById('menuEjercicios').value;
    let resultado = '';


    switch (seleccion) {
        case '1': // Suma de dos números
            let num1 = parseFloat(prompt('Ingresa el primer número:'));
            let num2 = parseFloat(prompt('Ingresa el segundo número:'));
            resultado = `La suma de ${num1} + ${num2} es: ${num1 + num2}`;
            break;

        case '2': // Par o impar
            let num = parseInt(prompt('Ingresa un número:'));
            resultado = `El número ${num} es ${num % 2 === 0 ? 'par' : 'impar'}`;
            break;

        case '3': // Mayor de tres números
            let n1 = parseFloat(prompt('Primer número:'));
            let n2 = parseFloat(prompt('Segundo número:'));
            let n3 = parseFloat(prompt('Tercer número:'));
            resultado = `El mayor es: ${Math.max(n1, n2, n3)}`;
            break;

        case '4': // Tabla de multiplicar
            num = parseInt(prompt('Número para la tabla de multiplicar:'));
            resultado = `Tabla del ${num}:<br>`;
            for (let i = 1; i <= 10; i++) {
                resultado += `${num} x ${i} = ${num * i}<br>`;
            }
            break;

        case '5': // Contar vocales
            let palabra = prompt('Ingresa una palabra:');
            let contador = (palabra.match(/[aeiouáéíóú]/gi) || []).length;
            resultado = `La palabra "${palabra}" tiene ${contador} vocales.`;
            break;

        case '6': // Números del 1 al N
            let N = parseInt(prompt('Ingresa un número N:'));
            resultado = `Números del 1 al ${N}: `;
            for (let i = 1; i <= N; i++) {
                resultado += `${i} `;
            }
            break;

        case '7': // Factorial
            N = parseInt(prompt('Ingresa un número para el factorial:'));
            let factorial = 1;
            for (let i = 1; i <= N; i++) {
                factorial *= i;
            }
            resultado = `El factorial de ${N} es: ${factorial}`;
            break;

        case '8': // Sumar números pares del 1 al 100
            let sumaPares = 0;
            for (let i = 2; i <= 100; i += 2) {
                sumaPares += i;
            }
            resultado = `La suma de los números pares del 1 al 100 es: ${sumaPares}`;
            break;

        case '9': // Adivina el número
            let aleatorio = Math.floor(Math.random() * 100) + 1;
            let adivinanza = parseInt(prompt('Adivina el número (1-100):'));
            resultado = (adivinanza === aleatorio)
                ? '¡Correcto!'
                : `Incorrecto, el número era ${aleatorio}.`;
            break;

        case '10': // Número primo
            num = parseInt(prompt('Ingresa un número:'));
            let esPrimo = num > 1;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
            resultado = `El número ${num} es ${esPrimo ? 'primo' : 'no primo'}.`;
            break;

        case '11': // Promedio de calificaciones
            let calificaciones = prompt('Ingresa las calificaciones separadas por comas:').split(',');
            let suma = calificaciones.reduce((acc, val) => acc + parseFloat(val), 0);
            resultado = `El promedio es: ${suma / calificaciones.length}`;
            break;

        case '12': // Números pares hasta N
            N = parseInt(prompt('Ingresa un número N:'));
            resultado = `Números pares hasta ${N}: `;
            for (let i = 2; i <= N; i += 2) {
                resultado += `${i} `;
            }
            break;

        case '13': // Celsius a Fahrenheit
            let celsius = parseFloat(prompt('Grados Celsius:'));
            resultado = `${celsius}°C = ${(celsius * 9 / 5 + 32).toFixed(2)}°F`;
            break;

        case '14': // Día de la semana
            let dia = parseInt(prompt('Ingresa un número (1-7):'));
            let diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
            resultado = diasSemana[dia - 1] || 'Número inválido';
            break;

        case '15': // Área de un círculo
            let radio = parseFloat(prompt('Ingresa el radio del círculo:'));
            resultado = `El área es: ${(Math.PI * Math.pow(radio, 2)).toFixed(2)}`;
            break;
        case '16': // Conversión de metros a kilómetros
            let metros = parseFloat(prompt('Ingresa la distancia en metros:'));
            resultado = `${metros} metros son ${(metros / 1000).toFixed(2)} kilómetros.`;
            break;

        case '17': // Invertir una cadena
            let cadena = prompt('Ingresa una cadena de texto:');
            resultado = `Cadena invertida: ${cadena.split('').reverse().join('')}`;
            break;

        case '18': // Contar palabras en una frase
            let frase = prompt('Ingresa una frase:');
            let cantidadPalabras = frase.trim().split(/\s+/).length;
            resultado = `La frase tiene ${cantidadPalabras} palabras.`;
            break;

        case '19': // Calcular el interés simple
            let capital = parseFloat(prompt('Ingresa el capital:'));
            let tasa = parseFloat(prompt('Ingresa la tasa de interés (%):')) / 100;
            let tiempo = parseFloat(prompt('Ingresa el tiempo (en años):'));
            resultado = `El interés simple es: ${(capital * tasa * tiempo).toFixed(2)}`;
            break;

        case '20': // Generar números aleatorios en un rango
            let min = parseInt(prompt('Ingresa el valor mínimo:'));
            let max = parseInt(prompt('Ingresa el valor máximo:'));
            let random = Math.floor(Math.random() * (max - min + 1)) + min;
            resultado = `Número aleatorio entre ${min} y ${max}: ${random}`;
            break;

        default:
            resultado = 'Selecciona un ejercicio válido.';
            break;
    }

    document.getElementById('output').innerHTML = resultado;
}
