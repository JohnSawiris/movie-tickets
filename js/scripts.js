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
var iceAge2 = new Movie ("Ice Age 2: The Meltdown", "images/iceage2.jpg", "Ice Age 2 Movie Poster", "PG", true, "Manny, Sid, and Diego discover that the ice age is coming to an end, and join everybody for a journey to higher ground. On the trip, they discover that Manny, in fact, is not the last of the woolly mammoths.");
var theNotebook = new Movie ("The Notebook", "images/thenotebook.jpg", "The Notebook Movie Poster", "PG-13", true, "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.");
var dumbAndDumber = new Movie ("Dumb & Dumber", "images/dumbanddumber.jpg", "Dumb and Dumber Movie Poster",  "PG-13", true, "The cross-country adventures of two good-hearted but incredibly stupid friends.");

var moviesArray = [warDogs, theBigShort, iceAge2, theNotebook, dumbAndDumber];

var ticketPrice = function(time, age, run) {
  var baseTicketPrice = 13
  if ((time >= 2) && (age < 55) && (run === false)) {
    return baseTicketPrice
  } else if ((time < 2) && (age >= 55) && (run === false)) {
    return baseTicketPrice - 7
  } else if (((time < 2) || (age >= 55)) && (run === false)) {
    return baseTicketPrice - 5
  } else if ((time >= 2) && (age < 55) && (run === true)) {
    return baseTicketPrice - 4
  } else if ((time < 2) && (age < 55) && (run === true)) {
    return baseTicketPrice - 6
  } else if ((time >= 2) && (age >= 55) && (run === true)) {
    return baseTicketPrice - 6
  } else if ((time < 2) && (age >= 55) && (run === true))
    return baseTicketPrice - 8
};

var showingTime = function(time) {
  var times = ["10:15 AM", "12:30 PM", "3:00 PM", "6:45 PM", "9:30 PM"];
  return times[time];
}

//Frontend Logic
$(function() {

  var movieSelected;

  $("#movies-list").on('click', 'li', function() {
    var value = parseInt($(this).val());
    $("#movie-title-display").text(moviesArray[value].name);
    $(".movie-image").attr("src", moviesArray[value].imageSrc).attr("alt", moviesArray[value].imageAlt);
    $("#movie-desc-display").text(moviesArray[value].description);
    $(".movie-info").fadeIn(800);
    $("#user-input-form").fadeOut();
    $("#ticket-display").fadeOut();
    movieSelected = moviesArray[value];
  });//On click end

  $("#get-tickets").click(function() {
    $("#user-input-form").fadeIn();
  });

  $("#user-input").submit(function(event) {
    event.preventDefault();
    var userAge = parseInt($("#age").val());
    var userName = $("#name").val();
    var movieTime = parseInt($("#movie-time").val());
    var showTime = showingTime(movieTime);
    var priceOfTicket = ticketPrice(movieTime, userAge, movieSelected.secondRun);
    $("#user-input-form").slideUp();
    $("div.movie-info").slideUp();
    $("#ticket-display").slideDown();
    $("#ticket-title-output").text("Thanks, " + userName + ". Enjoy the movie!");
    $("#name-output").text("Name: " + userName);
    $("#movie-title-output").text("Movie: " + movieSelected.name);
    $("#showing-time-output").text("Showing Time: " + showTime);
    $("#ticket-price-output").text("Price: $" + priceOfTicket + ".00");
  });
});
