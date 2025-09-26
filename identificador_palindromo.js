// IDENTIFICADOR DE PALINDROMOS 

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

async function verificarPalindromo() {
    // Paso 1: Solicitar la frase o la palabra al usuario usando 'await'
    const input = await preguntar("Ingrese una palabra o frase: ");

    // Paso 2: Limpiar el texto ingresado (robusta contra espacios, mayúsculas y puntuación)
    const texto_limpio = input
        .toLowerCase()
        // El RegEx elimina cualquier cosa que no sea una letra de la 'a' a la 'z'
        .replaceAll(/[^a-z]/g, ""); 

    // Paso 3: Invertir el texto limpio
    const texto_invertido = texto_limpio.split("").reverse().join("");

    // Paso 4: comprobar si el texto limpio e invertido son iguales
    if (texto_limpio === texto_invertido) {
        console.log(`\n✅ ¡"${input}" es un PALÍNDROMO!`);
    } else {
        console.log(`\n❌ Lo siento, "${input}" NO es un palíndromo.`);
        // mostrar la comparación
         console.log(`   Limpio: ${texto_limpio}`);
         console.log(`Invertido: ${texto_invertido}`);
    }

    rl.close();
}

verificarPalindromo();