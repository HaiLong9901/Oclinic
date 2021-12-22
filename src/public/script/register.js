// Pop up and down register form
const registerForm = document.querySelector('.registerForm');
const registerBtn2 = document.querySelector('.loginForm a.regist');
const closeBtn2 = document.querySelector('.registerForm .fa-times');;


//pop up and down register form
registerBtn2.addEventListener('click', ()=>{
    loginForm.classList.remove('formOpen');
    registerForm.classList.toggle('formOpen');
})
  closeBtn2.addEventListener('click', ()=>{
    registerForm.classList.remove('formOpen');
});

