var sectionSlider = document.querySelector('.slider');
var radioBtn = sectionSlider.querySelectorAll('input[type="radio"]');
var mainSlider;

function Slider (htmlClassLiActive, htmlClassLabelActive) {
  this._htmlClasses = {
    liActive: htmlClassLiActive,
    labelActive: htmlClassLabelActive
  }
  this._allSlides = [];
  this._activeSlide;

  this._timerProperties = {
    timerId:undefined,
    startTime:undefined,
    interval:undefined
  }

  function _Slide(li, radio, label) {
    this.li = li;
    this.radio = radio;
    this.label = label;
    return this;
  }

  this._hideActiveSlide = function() {
    if (this._activeSlide) {
      this._activeSlide.li.classList.remove(this._htmlClasses.liActive);
      this._activeSlide.label.classList.remove(this._htmlClasses.labelActive);
      this._activeSlide = undefined;
    }
  }

  this._getNextSlide = function() {
    var nextSlide;
    var indexActiveSlide = this._allSlides.indexOf(this._activeSlide);
    if (indexActiveSlide >= this._allSlides.length - 1) {
      nextSlide = this._allSlides[0];
    } else {
      nextSlide = this._allSlides[indexActiveSlide + 1];
    }
    return nextSlide;
  }

  this._enableClickRadio = function(slide) {
    var self = this;
    slide.radio.addEventListener('click', function(){
      if (self._timerProperties.timerId) {
        self.restartTimer();
      }
      self.setActiveSlide(slide)
    })
  }

  this.createSlide = function(li, radio, label) {
    var newSlide = new _Slide(li, radio, label);
    if (newSlide.li.classList.contains(this._htmlClasses.liActive) && newSlide.label.classList.contains(this._htmlClasses.labelActive)) {
      this.setActiveSlide(newSlide)
    }
    this._enableClickRadio(newSlide);
    this._allSlides.push(newSlide);
  }

  this.setActiveSlide = function(slide) {
    this._hideActiveSlide();
    if (!slide.li.classList.contains(this._htmlClasses.liActive) && !slide.label.classList.contains(this._htmlClasses.labelActive)) {
      slide.li.classList.add(this._htmlClasses.liActive);
      slide.label.classList.add(this._htmlClasses.labelActive);
    }
    this._activeSlide = slide;
  }

  this.getAllSlides = function() {
    return this._allSlides;
  }

  this.enableTimer = function(interval) {
    var self = this;
      self._timerProperties.startTime = new Date();
      self._timerProperties.interval = interval;

      self._timerProperties.timerId = setInterval(function() {
        var nextSlide = self._getNextSlide();
        self.setActiveSlide(nextSlide);
      }, self._timerProperties.interval);
    }
    
  this.disableTimer = function() {
    clearInterval(this._timerProperties.timerId);
    this._timerProperties.timerId = undefined;
  }

  this.restartTimer = function() {
    this.disableTimer();
    this.enableTimer(this._timerProperties.interval);
  }
}

mainSlider = new Slider('slider-list__item_active', 'slider-controls__item_active');

for(var i=0; i<radioBtn.length; i++) {
  mainSlider.createSlide(
    sectionSlider.querySelectorAll('.slider-list__item')[i],
    sectionSlider.querySelectorAll('input[type="radio"]')[i],
    sectionSlider.querySelectorAll('.slider-controls__item')[i]
  );
}

mainSlider.enableTimer(10000);