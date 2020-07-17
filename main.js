// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

/*
let glyphStates = {
  "♡": "♥",
  //this toggles between when you click "toggle"
  "♥": "♡"
};
*/
/*
let colorStates = {
  "red" : "",
  //if its red and you click it turns not red
  "": "red"
};
*/

const heartIcons = document.querySelectorAll('.like')
//let javaScriptHeartIcon = heartIcons[0]
//const rubyHeartIcon = heartIcons[1]
//const pythonHeartIcon = heartIcons[2]
//const javaHeartIcon = heartIcons[3]
//const elixirHeartIcon = heartIcons[4]

for(let heartIcon of heartIcons) {
  heartIcon.addEventListener('click',(e) => {
    mimicServerCall('http://www.whatsthis.com')
    .then((response) => {
      let heart = e.target
      heart.innerText = ( heart.innerText === FULL_HEART ) ? EMPTY_HEART : FULL_HEART
      //heart.innerText = glyphStates[heart.innerText];
      //heart.style.color = colorStates[heart.style.color];
      heart.style.color = ( heart.style.color === "red" ) ? "" : "red"
    })
    .catch(function(error) {
      //why only one .then?
      alert("oops")
    })
  })
}

//for(let heartIcon of heartIcons) {
  //heartIcon.addEventListener('click',likeFunction); }

//function likeFunction(e) {
  //let heart = e.target
    //mimicServerCall('http://www.whatsthis.com')
    //.then(message => {
      //heart.innerText = glyphStates[heart.innerText];
      //heart.style.color = colorStates[heart.style.color];
    //})
    //.catch(function(error) {
     // alert("oops")
    //})
  //}


/*
let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("bogusUrl")
   //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      // Basic
      // alert("Something went wrong!");
      // or....
      document.getElementById("modal").className = "";
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}
*/


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
