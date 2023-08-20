
// function toggle() {
//   let a = document.getElementById('box');
//   if (a.style.display === 'none') {
//     a.style.display = 'block';
//   } else {
//     a.style.display = 'none';
//   }
// }

// function toggleDisapper() {
//   let a = document.getElementById('box');
//   a.style.display = 'none';
// }

let btn = document.getElementById('btn')
btn.addEventListener('click',toggle)
function toggle(){
  let box=document.getElementById('box')
  box.classList.toggle('hidden')
}

let btn1 = document.getElementById('btn1')
btn1.addEventListener('click',toggle1)
function toggle1(){
  let box1=document.getElementById('box1')
  box1.classList.toggle('hidden')
}

let btn2=document.getElementById('btn2')
btn2.addEventListener('click', toggle2)

function toggle2(){
  let box2=document.getElementById('box2')
  box2.classList.toggle('hidden')
}

let btn3=document.getElementById('btn3')
btn3.addEventListener('click',toggle3)

function toggle3(){
  let box3=document.getElementById('box3')
  box3.classList.toggle('hidden')
}

let btn4=document.getElementById('btn4')
btn4.addEventListener('click',toggle4)

function toggle4(){
  let box4= document.getElementById('box4')
  box4.classList.toggle('hidden')
}


let btn5=document.getElementById('btn5')
btn5.addEventListener('click',toggle5)
function toggle5(){
  let box5=document.getElementById('box5')
  box5.classList.toggle('hidden')
}


let btn6 = document.getElementById('btn6')
btn6.addEventListener('click',toggle6)
function toggle6(){
  let box6=document.getElementById('box6')
  box6.classList.toggle('hidden')
}

let btn7=document.getElementById('btn7')
btn7.addEventListener('click',toggle7)

function toggle7(){
  let box7=document.getElementById('box7')
  box7.classList.toggle('hidden')
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay:{
    delay:2500,
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});













document.addEventListener('DOMContentLoaded', function () {
   let showBtn = document.querySelector('#showBtn');
   let box = document.querySelector('#box');
   let hideBtn = document.querySelector('#hideBtn');
 
   showBtn.addEventListener('click', function () {
     showBtn.style.display = 'none';
     a.style.display = 'block';
   });
 
   hideBtn.addEventListener('click', function () {
     a.style.display = 'none';
     showBtn.style.display = 'block';
   });
 });

 