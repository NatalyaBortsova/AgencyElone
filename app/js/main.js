$(function () {

  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.menu');
  const menuLink = document.querySelectorAll('.menu__link')
  const bodyLock = document.querySelector('body');
  const logo = document.querySelector('.logo');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu_active');
    if (mobileMenu.classList.contains('menu_active')) {
      burger.classList.add('burger_active');
      bodyLock.classList.add('lock');
      logo.classList.add('hide')
    } else {
      burger.classList.remove('burger_active');
      bodyLock.classList.remove('lock');
      logo.classList.remove('hide')
    }
  });

  menuLink.forEach((el) => {
    el.addEventListener('click', () => {
      mobileMenu.classList.remove('menu_active');
      burger.classList.remove('burger_active');
      logo.classList.remove('hide');
      bodyLock.classList.remove('lock');
    })
  })


  let menuItems = document.getElementsByClassName("menu__item");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


  const langSelect = document.querySelector('.lang');
  const langItem = document.querySelector('.lang__item');


  langSelect.addEventListener('click', function () {
    this.classList.toggle('open');
  });


  const scrollBtn = document.querySelector('.scrolltop');
  window.onscroll = () => {
    if (window.scrollY > 500) {
      scrollBtn.classList.remove('_hide');
    } else if (window.scrollY < 500) {
      scrollBtn.classList.add('_hide');
    }
  };

  scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
  };


  const anchors = document.querySelectorAll('[data-where="anchor"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }


  let sortBtn = document.querySelector('.portfolio__filter').children;
  let sortItem = document.querySelector('.portfolio__list').children;

  for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener('click', function () {
      for (let j = 0; j < sortBtn.length; j++) {
        sortBtn[j].classList.remove('active');
      }

      this.classList.add('active');


      let targetData = this.getAttribute('data-target');

      for (let k = 0; k < sortItem.length; k++) {
        sortItem[k].classList.remove('active');
        sortItem[k].classList.add('delete');

        if (sortItem[k].getAttribute('data-item') == targetData || targetData == "all") {
          sortItem[k].classList.remove('delete');
          sortItem[k].classList.add('active');
        }
      }
    });
  }


const hiddenItems = document.querySelectorAll('.blog__item');
const blogbutton = document.querySelector('.blog__button');

let currentImg = 3;

blogbutton.addEventListener('click', function(){
  for(let i = currentImg; i < currentImg + 3; i++){
    if (hiddenItems[i]) {
      hiddenItems[i].style.display = 'block';
    }
  }
  currentImg += 3;
  if(currentImg >= hiddenItems.length) {
    event.target.style.display = 'none';
  }
})

const socialLink = document.querySelectorAll('.footer__social-link');

socialLink.forEach((socialLink) => socialLink.addEventListener('click', (e) => e.preventDefault()));


});