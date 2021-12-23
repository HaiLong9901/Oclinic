
const registerForm = document.querySelector('.registerForm');
const registerBtn2 = document.querySelector('.loginForm a.regist');
const closeBtn2 = document.querySelector('.registerForm .fa-times');;
const seeBtn2 = document.querySelectorAll('.registerForm .fa-eye-slash');
const passBox2 = document.querySelector('.registerForm .password input');
const retypeBox = document.querySelector('.registerForm .retype input');
const sendingBtn = document.querySelector('.registerForm button');
const formGroup = document.querySelectorAll('.registerForm .form-group');

//pop up and down register form
registerBtn2.addEventListener('click', ()=>{
    loginForm.classList.remove('formOpen');
    registerForm.classList.toggle('formOpen');
})
  closeBtn2.addEventListener('click', ()=>{
    registerForm.classList.remove('formOpen');
});

// display password
seeBtn2[0].addEventListener('click', () => {
  if(passBox2.getAttribute('type') === 'password'){
    passBox2.setAttribute('type', 'text');
    seeBtn2[0].setAttribute('class', 'far fa-eye');
  }
  else{
    passBox2.setAttribute('type', 'password');
    seeBtn2[0].setAttribute('class', 'far fa-eye-slash');
  }
})
seeBtn2[1].addEventListener('click', () => {
  if(retypeBox.getAttribute('type') === 'password'){
    retypeBox.setAttribute('type', 'text');
    seeBtn2[1].setAttribute('class', 'far fa-eye');
  }
  else{
    retypeBox.setAttribute('type', 'password');
    seeBtn2[1].setAttribute('class', 'far fa-eye-slash');
  }
});

//Check unfilled form
let checked = (form) => {
  let result = [];
  for(let element of form){
    if(element.querySelector('input').value.length === 0) result.push(element);
  }
  return result;
};
sendingBtn.addEventListener('click', () => {
  let check = checked(formGroup);
  if(check.length !== 0){
    for(let element of check) element.querySelector('span').style.display = 'block';
  }
  else sendingBtn.setAttribute('form', 'registerContainer');
});
for(let element of formGroup){
  element.querySelector('input').addEventListener('focus', () => {
    element.querySelector('span').style.display = 'none';
  })
}

