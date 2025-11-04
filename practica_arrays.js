frutas = ["manzana", "plátano", "cereza", "naranja"];

tiposDeFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i]; //
    if (tiposDeFrutas[element]) {
        tiposDeFrutas[element] += 1; // Contar la ocurrencia de cada fruta
    } else {
        tiposDeFrutas[element] = 1;
    }
}

console.log(tiposDeFrutas); 

contador = 0;

while (contador < frutas.length) {
    const element = frutas[contador];
    if (tiposDeFrutas[element]) {
        tiposDeFrutas[element] += 1;
    } else {
        tiposDeFrutas[element] = 1;
    }
    contador++;
}

console.log(tiposDeFrutas); // Mostrar el conteo de frutas