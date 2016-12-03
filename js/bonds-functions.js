var renderFilm = function(film) {
  var title = '<strong class="title">' + film.title + '</strong>';
  var actor = '<em> starring <span class="actor">' + film.actor + '</span></em>';
  return ('<div class="film">' + title + actor + '</div>');
}

var render = function(bondFilms) {
  var html = bondFilms.map(function(film) {
    return renderFilm(film);
  }).join('');
  return html;
}



//NEED TO COMPLETE BONUS
var renderGross = function(calcGross){
  var result = calcGross.gross;
  return result;
}

var renderTopGross = function(bondFilms){
  var highestGross = bondFilms[1]['gross'];
    for (var count=0;count<bondFilms.length;count++){
      var testGross = bondFilms[count]['gross'];

      if ( testGross > highestGross){
       highestGross = testGross;
       testGross = bondFilms[count]['gross'];
       console.log("hey");
     }
   }
  var amount = highestGross;
  return amount;
}

document.querySelector('.bond-films').innerHTML = render(bondFilms);
document.querySelector('#top-grossing').innerHTML = renderTopGross(bondFilms);
