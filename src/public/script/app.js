
const loginBtn = document.querySelector('.taskbar__user .login');
const loginForm = document.querySelector('.loginForm');
const closeBtn = document.querySelector('.loginForm .fa-times');
const seeBtn = document.querySelector('.loginForm .fa-eye-slash');
const passBox = document.querySelector('.loginForm .password input');
const registerBtn = document.querySelector('.taskbar__user .regist');
const seeBtn2 = document.querySelectorAll('.registerForm .fa-eye-slash');
const passBox2 = document.querySelector('.registerForm .password input');





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