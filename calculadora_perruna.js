// CALCULADORA PERRUNA 

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

// Paso 1: Mensaje de bienvenida
console.log("🐾 Bienvenido a la Calculadora Perruna ➡️ Humana 🐾");

async function iniciar() {
    let unidad;
    
    // --- 1. Validar la Unidad ---
    while (true) {
        unidad = await preguntar("¿La edad está en años o en meses? (a/m): ");
        unidad = unidad.toLowerCase();

        if (unidad === "a" || unidad === "m") {
            break; 
        }
        console.log("🚫 Opción inválida. Debe ser 'a' para años o 'm' para meses. Intenta nuevamente.");
    }

    // --- 2. Validar y Obtener la Edad ---
    let edad_perro;
    
    while (true) {
        let edadStr = await preguntar("Ingrese la edad de su perro: ");
        edad_perro = parseFloat(edadStr);

    
        if (!isNaN(edad_perro) && edad_perro > 0) {
            break; 
        }
        console.log("🚫 La edad ingresada no es válida. Debe ser un número positivo. Inténtalo nuevamente.");
    }
    
    // --- 3. Conversión a Años (si es en meses) ---
    if (unidad === "m") {
        edad_perro = edad_perro / 12;
    }

    // --- 4. Lógica de Conversión a Años Humanos ---
    let edad_humana;

    if (edad_perro <= 1) {
        edad_humana = 15 * edad_perro;
    } else if (edad_perro <= 2) {
        edad_humana = 15 + (edad_perro - 1) * 9;
    } else {
        edad_humana = 15 + 9 + (edad_perro - 2) * 5;
    }

    // --- 5. Mostrar el Resultado y Cerrar ---
    // Mostrar como número entero (sin decimales) usando redondeo estándar
    console.log(`👤 La edad equivalente en años humanos es: ${Math.round(edad_humana)} años`);

    rl.close();
}

iniciar();