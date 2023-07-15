const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo canción con el id ${id}`);
  },
  pausar: function () {
    console.log(`pausando...`);
  },
  borrar: function (id) {
    console.log(`Borrando canción... ${id}`);
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando playlist de ${nombre}`);
  },
  reproducirPlayList: function (nombre) {
    console.log(`reproduciendo playlist con el nombre ${nombre}`);
  },
};

reproductor.reproducir(30);
reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlaylist("Rock 80s");
reproductor.crearPlaylist("Música clásica");
reproductor.reproducirPlayList("Rock 80s");

reproductor.borrar(30);
