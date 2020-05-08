
// funzione per creare dischi
function creaDischi(){
  $.ajax ({
    url: "api.php",
    success: function (data) {
      console.log(data);
      for (var key in data) {
        console.log(data[key]);
        var singoloFilm = data[key];
        for (var key in singoloFilm) {
          console.log(singoloFilm[key]);
          $('.container-film').append(singoloFilm[key] + '<br>');
        }

      }
    },
    error: function (richiesta,stato,error) {

    }
  })
};

// funzione iniziale
function init() {
  creaDischi();
}

$(document).ready(init);
