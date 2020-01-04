'use strict';

const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const section3 = document.querySelector('.section-3');
section1.addEventListener('click', showInfo);
section2.addEventListener('click', showInfo);
section3.addEventListener('click', showInfo);


let closeTransition = document.querySelector('.image--1').style;

const otherDestinations = document.querySelector('.section--discover');
const url = "./travelList.json";
let places = '';
const destinySpace = document.querySelector('.new-Sections');


function showInfo1(){
    // if(info1.classList.contains('hidden') === false){
        /*(function hola(){
            closeTransition.opacity = 1;
            (closeTransition.opacity-=.1)>0 ? closeTransition.display="none" : setTimeout(hola,60)
        })();*/
        // info1.classList.add('hidden');

    // }else{
        // info2.classList.add('hidden');
        // info3.classList.add('hidden');
        // info4.classList.add('hidden');
        // info5.classList.add('hidden');
        // info6.classList.add('hidden');
        // info7.classList.add('hidden');
        // info1.classList.remove('hidden');
        /*(function fade(){
            closeTransition.opacity=.1;
            closeTransition.display="block";

            (closeTransition.opacity+=.1)>1 ? closeTransition.color="red" : setTimeout(fade,60)
        })();*/
    // }
}

function showInfo(event){
    document.querySelector('dd:not(.hidden)').classList.add('hidden');
    event.currentTarget.nextElementSibling.classList.remove('hidden');
}


//FETCH
function showDestinations(){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            places = data.Travelling;
            places.destinations.map((place) => {
                destinySpace.innerHTML += generateHTMLDestiny(place);
            });
            //@See: https://stackoverflow.com/a/36946222
            places.destinations.map((place) => {
                const section = document.querySelector('.section-' + place.id);
                section.addEventListener('click', showInfo);
            });
    });
}

function generateHTMLDestiny(place){
    return `<dt class="section section-${place.id}">${place.destiny}<i class="fas fa-caret-down"></i></dt>
    <dd class="u-image image--${place.id} hidden">
        <p class="u-content content-${place.id}">${place.description}
    </p>
    </dd>`;
}
otherDestinations.addEventListener('click', showDestinations);