function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
let inicio_tiempo = performance.now();
contar(5);
let fin_tiempo = performance.now();

let duracion = fin_tiempo - inicio_tiempo;
console.log(`Duración: ${duracion.toFixed(4)} ms`);

