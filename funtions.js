let librosLeidos = [];

const agregarLibro = (titulo) => librosLeidos.push(titulo);

agregarLibro("Cien Años de Soledad");
agregarLibro("Don Quijote de la Mancha");
agregarLibro("La Sombra del Viento");
agregarLibro("1984");

const mostrarLibrosLeidos = () => console.log("Has leído los siguientes libros:", librosLeidos);

mostrarLibrosLeidos();

