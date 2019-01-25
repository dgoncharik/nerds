var slider = document.querySelector('.slider');

var slides = slider.querySelectorAll('.slider-list__item');
var sliderRadioBtn = slider.querySelectorAll('input[type="radio"]');
var sliderLabel = slider.querySelectorAll('.slider-controls__item');

var indexDisplayedSlide = 0;
var slideIntervalCount = 10000;
var slideTimer;

function nextSlide() {
  slides[indexDisplayedSlide].classList.remove('slider-list__item_active');
  sliderLabel[indexDisplayedSlide].classList.remove('slider-controls__item_active');
  if (indexDisplayedSlide >= slides.length - 1) {
    indexDisplayedSlide = -1;
  }
  indexDisplayedSlide++;
  slides[indexDisplayedSlide].classList.add('slider-list__item_active');
  sliderLabel[indexDisplayedSlide].classList.add('slider-controls__item_active');
}
slideTimer = setInterval(nextSlide, slideIntervalCount);

for (var i=0; i<sliderRadioBtn.length; i++) {
  
  (function(i) {
    var curRadioBtn = sliderRadioBtn[i];
    var curLabel = sliderLabel[i];
    var curSlide = slides[i];

    curRadioBtn.addEventListener('click', function(evt) {
        slides[indexDisplayedSlide].classList.remove('slider-list__item_active');
        sliderLabel[indexDisplayedSlide].classList.remove('slider-controls__item_active');
        curSlide.classList.add('slider-list__item_active');
        curLabel.classList.add('slider-controls__item_active');

        indexDisplayedSlide = i;
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, slideIntervalCount);
    })
  }(i))
}