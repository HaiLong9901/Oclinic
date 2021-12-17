// const newsBtn = document.querySelector('header .menu__list .menu__item.news');
// console.log(newsBtn);

// newsBtn.onclick = function() {
//   let activeBtn = document.querySelector('header .menu__list .menu__item.active');
//   let aBtn = document.querySelector('header .menu__list .menu__item.news a');
//   activeBtn.classList.remove('active');
//   aBtn.href = '#';
//   console.log('click');
//   newsBtn.classList.add('active');
//   console.log('success');
// }
// console.log(newsBtn);

const itemBtns = document.querySelectorAll('header .menu__list .menu__item');
for(let element in itemBtns){
  element.onclick = () =>{
    let activeBtn = document.querySelector('header .menu__list .menu__item.active');
    let aBtn = element.querySelector('a');
    activeBtn.classList.remove('active');
    aBtn.href = '#';
    console.log('click');
    newsBtn.classList.add('active');
    console.log('success');
  }
}