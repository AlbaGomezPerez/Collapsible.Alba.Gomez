'use strict';

const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const section3 = document.querySelector('.section-3');
const info1 = document.querySelector('.image--1');
const info2 = document.querySelector('.image--2');
const info3 = document.querySelector('.image--3');
let closeTransition = document.querySelector('.image--1').style;


function showInfo1(){
    if(info1.classList.contains('hidden') === false){
        /*(function hola(){
            closeTransition.opacity = 1;
            (closeTransition.opacity-=.1)>0 ? closeTransition.display="none" : setTimeout(hola,60)
        })();*/
        info1.classList.add('hidden');

    }else{
        info2.classList.add('hidden');
        info3.classList.add('hidden');
        info1.classList.remove('hidden');
        /*(function fade(){
            closeTransition.opacity=.1;
            closeTransition.display="block";

            (closeTransition.opacity+=.1)>1 ? closeTransition.color="red" : setTimeout(fade,60)
        })();*/
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

// let transition = document.querySelector('.section-2').style;
// transition.opacity = 1;
// (function fade(){
//     (transition.opacity-=.1)<0 ? transition.display="none" : setTimeout(fade,60)
// })();

