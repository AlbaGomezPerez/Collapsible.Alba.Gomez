'use strict';

const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const section3 = document.querySelector('.section-3');
const info1 = document.querySelector('.content-1');
const info2 = document.querySelector('.content-2');
const info3 = document.querySelector('.content-3');


function showInfo1(){
    console.log('soy 1');
}
section1.addEventListener('click', showInfo1);


function showInfo2(){
    console.log('soy 2');
}
section2.addEventListener('click', showInfo2);

function showInfo3(){
    console.log('soy 3');
}
section3.addEventListener('click', showInfo3);


    // let s = document.querySelector('.section-2').style;
    // s.opacity = 1;
    // (function fade(){
    //     (s.opacity-=.1)<0 ? s.display="none" : setTimeout(fade,60)
    // })();
