function esPalindromo(cadena) {
    const cadenaLimpia = cadena.replace(/\s/g, '').toLowerCase();
    return cadenaLimpia === cadenaLimpia.split('').reverse().join('');
}
console.log(esPalindromo("nidia")); 
console.log(esPalindromo("reconocer")); 
console.log(esPalindromo("alfredo")); 
console.log(esPalindromo("ana"));
    