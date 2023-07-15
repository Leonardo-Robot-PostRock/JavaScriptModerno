const reproductor = {
  reproducir: (id) => console.log(`Reproduciendo canción con el id ${id}`),
  pausar: () => console.log(`pausando...`),
  borrar: (id) => console.log(`Borrando canción... ${id}`),
  crearPlaylist: (nombre) => console.log(`Creando playlist de ${nombre}`),
  reproducirPlayList: (nombre) =>
    console.log(`reproduciendo playlist con el nombre ${nombre}`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlaylist("Rock 80s");
reproductor.crearPlaylist("Música clásica");
reproductor.reproducirPlayList("Rock 80s");

reproductor.borrar(30);
