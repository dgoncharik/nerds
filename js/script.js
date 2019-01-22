var btnWriteUs = document.querySelector('.contacts-text__btn');
var feedback = document.querySelector('.feedback');
var form = feedback.querySelector('.input-form');
var btnFeedbackClose = feedback.querySelector('.feedback__btn-close');
var inputUserName = feedback.querySelector('#user-name');
var inputEmail = feedback.querySelector('#feedback-email');
var inputText = feedback.querySelector('#feedback-text');

btnWriteUs.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedback.classList.add('popup-show');
  // feedback.classList.remove('popup-hide'); 
  if (!inputUserName.value) {
    inputUserName.focus();
  } else if (!inputEmail.value) {
      inputEmail.focus();
  } else {
      inputText.focus()
  }
})

btnFeedbackClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  // feedback.classList.add('popup-hide'); 
  feedback.classList.remove('popup-show');
  feedback.classList.remove('popup-error');
})

window.addEventListener('keydown', function(evt) {
  if (feedback.classList.contains('popup-show') && evt.keyCode === 27) {
      evt.preventDefault();
      // feedback.classList.add('popup-hide');
      feedback.classList.remove('popup-show');
      feedback.classList.remove('popup-error');
  }
})

form.addEventListener('submit', function(evt) {
  if (!inputUserName.value || !inputEmail.value || !inputText.value) {
    evt.preventDefault();
    feedback.classList.add('popup-error');

    // setTimeout("feedback.classList.remove('popup-error')", 100)

    if (!inputUserName.value) {
      inputUserName.classList.add('input-error')
    }
    if (!inputEmail.value) {
      inputEmail.classList.add('input-error')
    }
    if (!inputText.value) {
      inputText.classList.add('input-error')
    }
  }
})

inputUserName.addEventListener('keydown', function(evt) {
  inputUserName.classList.remove('input-error');
});

inputEmail.addEventListener('keydown', function(evt) {
  inputEmail.classList.remove('input-error');
});

inputText.addEventListener('keydown', function(evt) {
  inputText.classList.remove('input-error');
})
