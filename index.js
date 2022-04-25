var sliderImg = document.querySelectorAll('.slider-img');
var itemLinks = document.querySelectorAll('.menu-item-link');
var headerBackground = document.querySelector('.header__wrapper-bot')
var logoCafeColor = document.querySelector('.logo-cafe-color')
var logoWhite = document.querySelector('.logo-white')
var moveToTop = document.querySelector('.move-to-top');
logoCafeColor.style.display = 'none';

window.onscroll = function(s) {
  if(this.scrollY > 500) {
    moveToTop.style.display = 'block';
  } else {
    moveToTop.style.display = 'none';
  }
}

window.onscroll = function(e) {
  if(this.scrollY > 500) {
    headerBackground.style.backgroundColor = "white";
    logoWhite.style.display = 'none';
    logoCafeColor.style.display = 'block';

    for(let itemLink of itemLinks) {
      itemLink.style.color = 'black';
    }
    // console.log(this.scrollY);
  } else {
    headerBackground.style.backgroundColor = "transparent";
    logoCafeColor.style.display = 'none';
    logoWhite.style.display = 'block';
    for(let itemLink of itemLinks) {
      itemLink.style.color = 'white';
    }
  }
}


var customerComments = document.querySelectorAll('.slider-wrapper');
var changeSliderDots = document.querySelectorAll('.slider-dot');

var slideIndex = 0;
showSlide(slideIndex)
function currentDot(n) {
  showSlide(slideIndex = n);
  console.log('current dot: ',slideIndex)

}

function changeSlide(n) {
  showSlide(slideIndex += n)
}
console.log(customerComments.length)

function showSlide(n) {
  var i;
  if(n < 0) {
    slideIndex = customerComments.length -1;
  }
  if(n > customerComments.length -1) {
    slideIndex = 0;
  }
  for(i = 0; i < customerComments.length; i++) {
    customerComments[i].style.display = 'none'
  }
  for(i = 0; i < changeSliderDots.length; i++) {
      changeSliderDots[i].classList.remove('chosen')
  }
  customerComments[slideIndex].style.display = 'block';
  changeSliderDots[slideIndex].classList.add('chosen')
  console.log('show Slide',slideIndex)

}

// console.log(customerComments)
// changeSliderDots.forEach((dot,index) => {
//   cc[index].addEventListener('click', function() {
//     dot[index].style.display = 'block'
//   })
// })