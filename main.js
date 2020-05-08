
// funzione per creare dischi
function creaDischi(){
  $.ajax ({
    url: "api.php",
    success: function (data) {
      console.log(data);
      for (var key in data) {
        console.log(data[key]);
        var singoloFilm = data[key];

        // inizializzo handlebar
        var source = $('#film-template').html();
        var template = Handlebars.compile(source);
        var context = {
            'img': singoloFilm.poster,
            'title': singoloFilm.title,
            'author': singoloFilm.author,
            'year': singoloFilm.year
          };
        var html = template(context);

        $('.container-film').append(html);
          

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
