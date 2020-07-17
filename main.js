// Defining text characters for the empty and full hearts for you to use later.
document.addEventListener("DOMContentLoaded", (e) => {
    // CONSTANT DECLARATIONS
    const EMPTY_HEART = '♡'
    const FULL_HEART = '♥'
    const heartSwitcher = {
        [EMPTY_HEART]: FULL_HEART,
        [FULL_HEART]: EMPTY_HEART
    }
    const errorModal = document.querySelector('#modal')
    const errorMessagePlace = errorModal.firstChild

    // FUNCTION DECLARATIONS
    const hideErrorModal = () => {
        errorModal.classList.add('hidden')
    }

    const showErrorModal = (error) => {
        errorModal.classList.remove('hidden')
        errorMessagePlace.textContent = error
        setTimeout(hideErrorModal, 5000)
    }

    const likeTheHeart = (targetElement) => {
        targetElement.textContent = heartSwitcher[targetElement.textContent]
        targetElement.classList.add('activated-heart')
    }

    const unlikeTheHeart = (targetElement) => {
        targetElement.textContent = heartSwitcher[targetElement.textContent]
        targetElement.classList.remove('activated-heart')
    }

    const toggleHeartLike = (targetElement) => {
        const liked = targetElement.classList.contains('activated-heart')
        if (liked) {
            unlikeTheHeart(targetElement)
        } else {
            likeTheHeart(targetElement)
        }
    }

    const heartClicker = () => {
            document.addEventListener("click", (e) => {
                if (e.target.classList.contains("like-glyph")) {
                    mimicServerCall()
                        .then(() => toggleHeartLike(e.target))
                        .catch(error => showErrorModal(error))
                }
            })
        }
        //------------------------------------------------------------------------------
        // Ignore after this point. Used only for demo purposes
        //------------------------------------------------------------------------------

    function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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









    // FUNCTION CALLS
    hideErrorModal()
    heartClicker()
})