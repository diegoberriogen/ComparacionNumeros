function mostrarEjercicio() {
    const seleccion = document.getElementById('menuEjercicios').value;
    let resultado = '';

    switch (seleccion) {
        case '1': // Suma de dos números
            let num1 = 5, num2 = 10;
            resultado = `La suma de ${num1} + ${num2} es: ${num1 + num2}`;
            break;

        case '2': // Par o impar
            let num = 7;
            resultado = `El número ${num} es ${num % 2 === 0 ? 'par' : 'impar'}`;
            break;

        case '3': // Mayor de tres números
            resultado = `El mayor entre 15, 22 y 10 es: ${Math.max(15, 22, 10)}`;
            break;

        case '4': // Tabla de multiplicar
            num = 5;
            resultado = `Tabla de multiplicar del ${num}:<br>`;
            for (let i = 1; i <= 10; i++) {
                resultado += `${num} x ${i} = ${num * i}<br>`;
            }
            break;

        case '5': // Contar vocales
            let palabra = 'javascript';
            let contador = (palabra.match(/[aeiou]/gi) || []).length;
            resultado = `La palabra "${palabra}" tiene ${contador} vocales`;
            break;

        case '6': // Números del 1 al N
            let N = 10;
            resultado = `Números del 1 al ${N}: `;
            for (let i = 1; i <= N; i++) {
                resultado += `${i} `;
            }
            break;

        case '7': // Factorial
            num = 5;
            let factorial = 1;
            for (let i = 1; i <= num; i++) {
                factorial *= i;
            }
            resultado = `El factorial de ${num} es: ${factorial}`;
            break;

        case '8': // Sumar números pares del 1 al 100
            let sumaPares = 0;
            for (let i = 1; i <= 100; i++) {
                if (i % 2 === 0) sumaPares += i;
            }
            resultado = `La suma de los números pares entre 1 y 100 es: ${sumaPares}`;
            break;

        case '9': // Adivina el número
            let numeroSecreto = 7;
            let intento = 7;
            resultado = `Número secreto: ${numeroSecreto}, Intento: ${intento} - ${intento === numeroSecreto ? '¡Correcto!' : 'Intenta de nuevo'}`;
            break;

        case '10': // Número primo
            num = 7;
            let esPrimo = num > 1 && Array.from({ length: num - 2 }, (_, i) => i + 2).every(i => num % i !== 0);
            resultado = `El número ${num} es ${esPrimo ? 'primo' : 'no primo'}`;
            break;

        // Nuevos ejercicios añadidos del 11 al 20

        case '11': // Invertir una cadena
            palabra = 'hola';
            resultado = `La palabra "${palabra}" invertida es: "${palabra.split('').reverse().join('')}"`;
            break;

        case '12': // Números pares del 1 al 50
            resultado = 'Números pares del 1 al 50: ';
            for (let i = 1; i <= 50; i++) {
                if (i % 2 === 0) resultado += `${i} `;
            }
            break;

        case '13': // Calcular promedio de un array
            let numeros = [10, 20, 30, 40, 50];
            let promedio = numeros.reduce((a, b) => a + b, 0) / numeros.length;
            resultado = `El promedio de [${numeros}] es: ${promedio}`;
            break;

        case '14': // Números impares del 1 al 50
            resultado = 'Números impares del 1 al 50: ';
            for (let i = 1; i <= 50; i++) {
                if (i % 2 !== 0) resultado += `${i} `;
            }
            break;

        case '15': // Potencia de un número
            num1 = 2;
            num2 = 3;
            resultado = `${num1} elevado a la ${num2} es: ${Math.pow(num1, num2)}`;
            break;

        case '16': // Convertir grados Celsius a Fahrenheit
            let celsius = 30;
            let fahrenheit = (celsius * 9 / 5) + 32;
            resultado = `${celsius}°C son ${fahrenheit}°F`;
            break;

        case '17': // Contar palabras en una frase
            let frase = 'Hola, cómo estás hoy';
            let cantidadPalabras = frase.split(' ').length;
            resultado = `La frase "${frase}" tiene ${cantidadPalabras} palabras.`;
            break;

        case '18': // Números del 100 al 1
            resultado = 'Números del 100 al 1: ';
            for (let i = 100; i >= 1; i--) {
                resultado += `${i} `;
            }
            break;

        case '19': // Generar número aleatorio del 1 al 10
            resultado = `Número aleatorio (1-10): ${Math.floor(Math.random() * 10) + 1}`;
            break;

        case '20': // Sumar dígitos de un número
            num = 1234;
            let sumaDigitos = num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
            resultado = `La suma de los dígitos de ${num} es: ${sumaDigitos}`;
            break;

        default:
            resultado = 'Selecciona un ejercicio para mostrar el resultado.';
            break;
    }

    document.getElementById('output').innerHTML = resultado;
}
