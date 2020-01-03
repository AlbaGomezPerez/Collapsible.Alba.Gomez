'use strict';

const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const section3 = document.querySelector('.section-3');
const info1 = document.querySelector('.content-1');
const info2 = document.querySelector('.content-2');
const info3 = document.querySelector('.content-3');


function showInfo1(){
    if(info1.classList.contains('hidden') === false){
        info1.classList.add('hidden');
    }else{
        info2.classList.add('hidden');
        info3.classList.add('hidden');
        info1.classList.remove('hidden');
    }
}
section1.addEventListener('click', showInfo1);


function showInfo2(){
    if(info2.classList.contains('hidden') === false){
        info2.classList.add('hidden');
    }else{
        info1.classList.add('hidden');
        info3.classList.add('hidden');
        info2.classList.remove('hidden');
    }
}
section2.addEventListener('click', showInfo2);


function showInfo3(){
    if(info3.classList.contains('hidden') === false){
        info3.classList.add('hidden');
    }else{
        info1.classList.add('hidden');
        info2.classList.add('hidden');
        info3.classList.remove('hidden');
    }
}
section3.addEventListener('click', showInfo3);


    // let s = document.querySelector('.section-2').style;
    // s.opacity = 1;
    // (function fade(){
    //     (s.opacity-=.1)<0 ? s.display="none" : setTimeout(fade,60)
    // })();
