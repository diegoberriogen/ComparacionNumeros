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

        default:
            resultado = 'Selecciona un ejercicio para mostrar el resultado.';
            break;
    }

    document.getElementById('output').innerHTML = resultado;
}
