function obtenerInversoAditivo(numeros) {
    return numeros.map(num => -num);
}
const numeros = [3,2,4,5,-6];
const inversoAditivo = obtenerInversoAditivo(numeros);
console.log(inversoAditivo);