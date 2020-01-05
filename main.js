'use strict';

const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const section3 = document.querySelector('.section-3');
const otherDestinations = document.querySelector('.section--discover');
const finalSection = document.querySelector('.section--finally');
section1.addEventListener('click', showInfo);
section2.addEventListener('click', showInfo);
section3.addEventListener('click', showInfo);



let closeTransition = document.querySelector('.image--1').style;

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
    otherDestinations.classList.add('section--hidden');
    finalSection.classList.remove('section--hidden');
}

function generateHTMLDestiny(place){
    return `<dt class="u-section section-${place.id}">${place.destiny}<i class="fas fa-caret-down"></i></dt>
    <dd class="u-image image--${place.id} hidden">
        <p class="u-content content-${place.id}">${place.description}
    </p>
    </dd>`;
}
otherDestinations.addEventListener('click', showDestinations);