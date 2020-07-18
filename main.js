// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.getElementById('modal')
const errorMessage = document.getElementById('modal-message')

// Your JavaScript code goes here!
document.addEventListener('click', function(e) {
  if (e.target.className === 'like-glyph' && e.target.innerHTML === EMPTY_HEART) {
    mimicServerCall()
      .then(() => {
        e.target.innerHTML = FULL_HEART
        e.target.classList.add('activated-heart')
      })
      .catch((reject) => {
        errorModal.classList.remove('hidden')
        errorMessage.innerText = reject
        setTimeout(function() {errorModal.classList.add('hidden'); }, 5000);
      })
  } else if (e.target.classList.contains('activated-heart')) {
    e.target.innerHTML = EMPTY_HEART
    e.target.classList.remove('activated-heart')
  }
})



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
