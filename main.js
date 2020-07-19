const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorDiv = document.querySelector('#modal')
const errorDivMessage = errorDiv.querySelector('#modal-message')

document.addEventListener('click', (e) => {
  if (e.target.className === 'like-glyph' || e.target.className === 'activated-heart'){
    mimicServerCall()
    .then(val => toggleHeart(e.target))
    .catch(err => displayError(err))
  }
})

let displayError = (message) => {
  console.log('error')
  errorDiv.removeAttribute('class');
  errorDivMessage.innerText = message
  window.setTimeout(hideErrorDiv, 5000)
}

let toggleHeart = (span) => {
  console.log('success')
  if (span.innerText === FULL_HEART){
    span.innerText = EMPTY_HEART;
    span.setAttribute('class', 'like-glyph');
  } else {
    span.innerText = FULL_HEART;
    span.setAttribute('class', 'activated-heart');
  }
}

let hideErrorDiv = () => errorDiv.setAttribute('class', 'hidden')

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  console.log('call invoked');
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
