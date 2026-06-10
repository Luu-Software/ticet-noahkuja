export function generarLorem(n: number): string {
  if (n = 1)
    return "Lorem Ipsum"

return "Lorem Ipsum" + generarLorem (n - 1)
  // COMPLETAR: Implementar la función generarLorem que reciba un número n y devuelva una cadena de texto con la frase "Lorem Ipsum" repetida n veces, separada por espacios. Por ejemplo, si n es 3, la función debería devolver "Lorem Ipsum Lorem Ipsum Lorem Ipsum".
}

console.log(generarLorem(5));
