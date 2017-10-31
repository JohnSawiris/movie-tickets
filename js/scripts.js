function Movie (name, imageSrc, imageAlt, rating, secondRun, description) {
  this.name = name;
  this.imageSrc = imageSrc;
  this.imageAlt = imageAlt;
  this.rating = rating;
  this.secondRun = secondRun;
  this.description = description;
}

var warDogs = new Movie ("War Dogs", "images/wardogs.jpg", "War Dogs Movie Poster", "R", false, "Based on the true story of two young men, David Packouz and Efraim Diveroli, who won a $300 million contract from the Pentagon to arm America's allies in Afghanistan.");
var theBigShort = new Movie ("The Big Short", "images/thebigshort.jpg", "The Big Short Movie Poster", "R", false, "Four denizens in the world of high-finance predict the credit and housing bubble collapse of the mid-2000s, and decide to take on the big banks for their greed and lack of foresight.");
var iceAge2 = new Movie ("Ice Age 2: The Big Short", "images/iceage2.jpg", "Ice Age 2 Movie Poster", "PG", true, "Manny, Sid, and Diego discover that the ice age is coming to an end, and join everybody for a journey to higher ground. On the trip, they discover that Manny, in fact, is not the last of the woolly mammoths.");
var theNotebook = new Movie ("The Notebook", "images/thenotebook.jpg", "The Notebook Movie Poster", "PG-13", true, "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.");
var dumbAndDumber = new Movie ("Dumb & Dumber", "images/dumbanddumber.jpg", "Dumb and Dumber Movie Poster",  "PG-13", true, "The cross-country adventures of two good-hearted but incredibly stupid friends.");

var moviesArray = [warDogs, theBigShort, iceAge2, theNotebook, dumbAndDumber]

 

$(function() {
  $("#movies-list").on('click', 'li', function() {
    var value = parseInt($(this).val());
    $("#movie-title-display").text(moviesArray[value].name);
    $(".movie-image").attr("src", moviesArray[value].imageSrc).attr("alt", moviesArray[value].imageAlt);
    $("#movie-desc-display").text(moviesArray[value].description);
    $(".movie-info").slideDown(800);
  });//On click end

  $("#user-input").submit(function(event) {
    event.preventDefault();
    var userAge = parseInt($("#age").val());
    var userName = $("#name").val();
    $("#user-input").slideUp();
    $("#ticket-display").slideDown();
  });
});
