const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function preguntar(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

async function iniciarJuego() {
    const numero_secreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    const maxIntentos = 5;
    let adivinanza;

    console.log("Adivina el numero secreto entre 1 y 100");
    console.log(`Tienes ${maxIntentos} intentos`);

    do {
        let entrada;
        let esValido = false;

        while (!esValido) {
            entrada = await preguntar(`Intento ${intentos + 1}/${maxIntentos}. Ingrese su numero: `);
            adivinanza = parseInt(entrada);

            if (!isNaN(adivinanza) && adivinanza >= 1 && adivinanza <= 100) {
                esValido = true;
            } else {
                console.log("🚫 Entrada inválida. Por favor, ingresa un número entre 1 y 100.");
            }
        }
        
        intentos++;

        if (adivinanza > numero_secreto) {
            console.log("El número secreto es menor.");
        } else if (adivinanza < numero_secreto) {
            console.log("El número secreto es mayor.");
        }

    } while (adivinanza !== numero_secreto && intentos < maxIntentos);

    if (adivinanza === numero_secreto) {
        console.log(`\n🎉 ¡Felicidades! Adivinaste el número secreto (${numero_secreto}) en ${intentos} intentos.`);
    } else {
        console.log(`\n😔 Lo siento, has agotado tus ${maxIntentos} intentos. El número secreto era ${numero_secreto}.`);
    }

    rl.close();
}

iniciarJuego();