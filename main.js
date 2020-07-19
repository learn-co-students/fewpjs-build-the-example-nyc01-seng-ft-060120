// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  const modalErrorElement = document.getElementById('modal');
  modalErrorElement.classList.add('hidden');

  // Add events
  document.querySelectorAll('.like-glyph').forEach((element) => {
    element.addEventListener('click', (e) => {
      mimicServerCall().then((response) => {
        e.target.textContent = (e.target.textContent === FULL_HEART) ? EMPTY_HEART : FULL_HEART;
        e.target.classList.toggle('activated-heart');

      }).catch(err => {
        modalErrorElement.classList.toggle('hidden');
        modalErrorElement.textContent = err;
        setTimeout(() => {
          modalErrorElement.classList.add('hidden');
        }, 5000)
      })
    })
  })

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
