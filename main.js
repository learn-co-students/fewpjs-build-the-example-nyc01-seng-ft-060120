// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const heartBttns = document.querySelectorAll(".like-glyph");
const errorContainer = document.getElementById("modal");

heartBttns.forEach((bttn) => {
  bttn.addEventListener("click", () => {
    if (bttn.innerText === EMPTY_HEART) {
      mimicServerCall()
        .then(function () {
          bttn.classList.add("activated-heart");
          bttn.innerText = FULL_HEART;
        })
        .catch(function (error) {
          setTimeout(hideErrorContainer, 5000);
          errorContainer.classList.remove("hidden");
          errorContainer.innerText = error;
        });
    } else {
      if (bttn.innerText === FULL_HEART) {
        bttn.innerText = EMPTY_HEART;
        bttn.classList.remove('activated-heart')
      }
    }
  });
});

function hideErrorContainer() {
  errorContainer.classList.add('hidden')
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
