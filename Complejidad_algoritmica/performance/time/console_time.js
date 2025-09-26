function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
console.time("duracion");
contar(5);
console.timeEnd("duracion");

