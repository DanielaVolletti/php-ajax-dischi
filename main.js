
// funzione per creare dischi
function creaDischi(){
  $.ajax ({
    url: "api.php",
    success: function (data) {
      console.log(data);
      for (var key in data) {
        console.log(data[key]);
        var singolaCanzone = data[key];

        // inizializzo handlebar
        var source = $('#canzone-template').html();
        var template = Handlebars.compile(source);
        var context = {
            'img': singolaCanzone.poster,
            'title': singolaCanzone.title,
            'author': singolaCanzone.author,
            'year': singolaCanzone.year
          };
        var html = template(context);

        $('.container-canzoni').append(html);


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
