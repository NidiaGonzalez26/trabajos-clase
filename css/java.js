// Días que tiene cada mes.
var mesnum =12 ; // Si se cambia, se obtiene el número de días correspondiente.
var mesnom = ['Enero de enamorado', 'Febrero loco', 'Marzo de cochadera', 'Abril de viejonas', 'Mayo de papucho', 'Junio de putos', 'Julio 70', 'Agosto de visita', 'Septiembre de gritadera', 'Octubre de griingos', 'Noviembre de muertos', 'Diciembre de balazos'];
switch (mesnum){
case 1: case 3: case 5: case 7: case 8: case 10: case 12:
console.log('El mesesote de ', mesnom[mesnum-1], ' tiene 31 días.');
break;
case 2:
console.log('El mesesote de ', mesnom[mesnum-1], ' tiene 28 días.');
break;
case 4: case 6: case 9: case 11:
console.log('El mesesote de ', mesnom[mesnum-1], ' tiene 30 días.');
break;
}
