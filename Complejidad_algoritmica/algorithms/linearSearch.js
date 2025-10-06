/* 
Complejidad temporal --> O( n )
Complejidad espacial --> O (  )
espacio auxiliar = complejidad espacial - espacio de entrada
espacio auxiliar = O( n ) - O ( 1 )
espacio auxiliar = O ( 1 )
*/

function linearSearch(arreglo, clave) { // O(n)
  for (let indice = 0; indice < arreglo.length; indice++) { // O(1)
    if (arreglo[indice] === clave) { // No se genera espacio en memoria
      return indice;  // No se genera espacio en memoria
    }
  }
  return -1; // No se genera espacio en memoria
}