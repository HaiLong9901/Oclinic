
const loginBtn = document.querySelector('.taskbar__user .login');
const loginForm = document.querySelector('.loginForm');
const closeBtn = document.querySelector('.loginForm .fa-times');
const seeBtn = document.querySelector('.loginForm .fa-eye-slash');
const passBox = document.querySelector('.loginForm .password input');
const registerBtn = document.querySelector('.taskbar__user .regist');
const registerForm = document.querySelector('.registerForm');
const closeBtn2 = document.querySelector('.registerForm .fa-times');
const seeBtn2 = document.querySelectorAll('.registerForm .fa-eye-slash');
const registerBtn2 = document.querySelector('.loginForm a.regist');
const passBox2 = document.querySelector('.registerForm .password input');

// newsBtn.addEventListener('click', ()=>{
//   console.log('click');
//   let activeBtn = document.querySelector('header .menu__list .menu__items.active');
//   console.log('ok');
//   activeBtn.classList.remove('active');
//   newsBtn.classList.toggle('active');
// });




loginBtn.addEventListener('click', ()=>{
  loginForm.classList.toggle('formOpen');
});
closeBtn.addEventListener('click', ()=>{
  loginForm.classList.remove('formOpen');
});
seeBtn.addEventListener('click', ()=>{
  if(passBox.getAttribute('type') === 'password'){
    passBox.setAttribute('type', 'text');
    seeBtn.setAttribute('class', 'far fa-eye');
  }
  else{
    passBox.setAttribute('type', 'password');
    seeBtn.setAttribute('class', 'far fa-eye-slash');
  }
});
registerBtn.addEventListener('click', ()=>{
  registerForm.classList.toggle('formOpen');
});
registerBtn2.addEventListener('click', ()=>{
  loginForm.classList.remove('formOpen');
  registerForm.classList.toggle('formOpen');
})
closeBtn2.addEventListener('click', ()=>{
  registerForm.classList.remove('formOpen');
});
// seeBtn2.addEventListener('click', ()=>{
//   if(passBox.getAttribute('type') === 'password'){
//     passBox2.setAttribute('type', 'text');
//     seeBtn2[0].setAttribute('class', 'far fa-eye');
//   }
//   else{
//     passBox.setAttribute('type', 'password');
//     seeBtn.setAttribute('class', 'far fa-eye-slash');
//   }
// });













var swiper = new Swiper(".container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
var swiper = new Swiper(".article__container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
var swiper = new Swiper(".reviews__container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });