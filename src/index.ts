import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.

cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  function calcularTotal (id : string, cantidad : number, codigoDescuento: string): number {
  

  let precioNormal : number; 
  if (id === 'sabrina ') {
    precioNormal = 1000

  }
  else if (id === 'kgatlw '){
    precioNormal = 700;
  } 
  else if (id === 'lali ') {
    precioNormal = 500;
  }
  else if (id === 'magdalena ') {
    precioNormal = 600;
  }
  else  if (id === 'viagra ') {
    precioNormal = 400;
  }
  else if (id === 'dillom ') {
    precioNormal = 350;
  }
  else if (id === 'marilina ') {
    precioNormal = 200;
  }
  else if (id === 'mugre ') {
    precioNormal = 150;
  }
else if (id === '') precioNormal = 0;


  let precio : number  = precioNormal * cantidad;

  if (codigoDescuento === 'TIC10') {
precio = precio * 0.90;
  }

  if (codigoDescuento === 'TIC20') {
    precio = precio * 0.80;
      }

      if (codigoDescuento === 'DARIO') {
        precio = precio * 0.50;
          }

  return precio;
}
  let cantidadNum: number = Number(cantidad);
  let precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
  
  enviarAlFrontend('mostrarPrecio', precio);
  
  
});

iniciar();
