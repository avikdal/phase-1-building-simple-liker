// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartButtons = document.querySelectorAll(".like-glyph")

heartButtons.forEach((btn) => btn.addEventListener('click', (e) => {
  mimicServerCall()
  .then(()=>{
    if(btn.innerText === EMPTY_HEART){
       btn.innerText = FULL_HEART
    } else if( btn.innerText === FULL_HEART){
      btn.textContent = EMPTY_HEART
    }
  })
  .catch((error) =>{
    message = document.querySelector(".hidden")
    message.className = ""
    setTimeout(()=> message.className = "hidden", 3000 )
    console.log(message)
  })
  
}))








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
