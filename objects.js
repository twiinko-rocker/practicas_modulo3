class Libro {
    constructor(titulo, autor, anio, estado){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado; // 'leido' o 'pendiente'
    }

    describirLibro() {
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
    }
}

const libro1 = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 1967, "leido");
const libro2 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605, "leido");
const libro3 = new Libro("La Sombra del Viento", "Carlos Ruiz Zafón", 2001, "leido");
const libro4 = new Libro("1984", "George Orwell", 1949, "leido");

console.log(libro1.describirLibro());
console.log(libro2.describirLibro());
console.log(libro3.describirLibro());
console.log(libro4.describirLibro());
