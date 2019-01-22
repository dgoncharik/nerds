var btnWriteUs = document.querySelector('.contacts-text__btn');
var feedback = document.querySelector('.feedback');
var btnFeedbackClose = feedback.querySelector('.feedback__btn-close');

btnWriteUs.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedback.classList.add('popup-show');
})

btnFeedbackClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  feedback.classList.remove('popup-show');
})

window.addEventListener('keydown', function(evt) {
  if (feedback.classList.contains('popup-show')) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      feedback.classList.remove('popup-show');
    }
  }
})