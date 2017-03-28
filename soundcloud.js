var playButton = document.querySelector("#play")
var pause = document.querySelector("#pause")

var stopButton = document.querySelector("#stop")
var pause = document.querySelector("#pause")

// var box = document.querySelector("#box")



 SC.initialize ({
  client_id:'fd4e76fc67798bfa742089ed619084a6'
});

var promise = SC.stream("/tracks/234589745")

SC.resolve("https://soundcloud.com/lesphinxx/purple").then(function(response) {  
 // things to do after the track info loads...
  // this should display all relevant information regarding the track   // e.g title, author, album art   console.log(response); });
  console.log(response);
});

SC.get("/tracks/234589745").then(function(response) {   // things to do after the tracks load...
  // this should display all relevant information regarding the track   // e.g title, author, album art   console.log(response); });
 console.log(response); });


SC.get("/tracks/234589745").then(function(response){

 var profile=document.querySelector("#profile");
  var genre=document.querySelector("#genre");
  var release=document.querySelector("#release");

 document.getElementById("profile").innerHTML = response.permalink_url;
  document.getElementById("genre").innerHTML = response.genre;
  document.getElementById("cover").src = response.artwork_url;
  document.getElementById("release").innerHTML = response.release_month;
});
// targets the play button from the page and
//  stores a reference to it in the playButton variable
// this play button has global scope
// var playButton = document.querySelector("#play")

// defines the Jukebox object
function Jukebox() {
//  the code for what happens when you create a Jukebox object
//   goes here
    this.song = []
    this.player = [] 

}

var playButton=document.querySelector("#play");
var pauseButton=document.querySelector("#pause");
// defines the Jukebox prototype object
Jukebox.prototype.play = function () {
  promise.then(function(player){   // streams the track   
    player.play(); 
  });
}

Jukebox.prototype.stop = function () {
// // player.pause();
  promise.then(function(player){
    player.pause();
  })
 // this.songs[].pause()
 //  this.songs[].currentTime = 0

// / }); // the code for playing a song would go here
}

// the rest of your prototype methods would go here

// creates a new Jukebox object
// this variable has global scope after this point
var jukebox = new Jukebox()

// adds an event listener for when you click the play button
playButton.addEventListener("click", function(event){
  // prevents link from going to the next page
  event.preventDefault()

  //  for what happens when you click the play button goes here

  // uses the jukebox object to play the music file
  jukebox.play()
})

stopButton.addEventListener("click", function(event){
 // prevents link from going to the next page
  event.preventDefault()

  //  for what happens when you click the play button goes here

  // uses the jukebox object to play the music file
  jukebox.stop()
})
// the rest of your event listeners would go here