document.addEventListener('DOMContentLoaded', function () {
  // Event listeners and other code here

  new Swiper('.swiper--reviews', {
    slidesPerView: 1.3,
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      769: {
        slidesPerView: 2.8,
        spaceBetween: 50,
    centeredSlides: false,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  new Swiper('.swiper--who', {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    },
  });


  var popupContainer = document.querySelector('.popup-container');
  var scrollThreshold = 1300; // adjust this value as needed
  window.addEventListener('scroll', function() {
    if (window.scrollY >= scrollThreshold) {
      popupContainer.style.bottom = '-1px'; // show the container
    } else {
      popupContainer.style.bottom = '-12rem'; // hide the container
    }
  });

  

  document.addEventListener('click', (e) => {

    if (e.target.classList.contains('program__list-item__btn')) {
      e.target.classList.toggle('active')
      let nextElement = e.target.nextElementSibling;
      if (nextElement) {
        nextElement.classList.toggle('active');
        nextElement.style.maxHeight = nextElement.classList.contains('active') ? nextElement.scrollHeight + 'px' : 0;
        nextElement.style.marginBottom = nextElement.classList.contains('active') ? 16 + 'px' : 0;
      }
    }

    if (e.target.closest('.accordion')) {
      let accordion = e.target;
      accordion.classList.toggle('active');

      let panel = accordion.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.marginBottom = 0
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.style.marginBottom = '2' + 'rem';

      }
    }

  });



})

