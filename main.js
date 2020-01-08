'use strict';

const section1 = document.querySelector('.sections-place-title-1');
const section2 = document.querySelector('.sections-place-title-2');
const section3 = document.querySelector('.sections-place-title-3');
const otherDestinations = document.querySelector('.section--discover');
const finalSection = document.querySelector('.section--finally');
section1.addEventListener('click', showInfo);
section2.addEventListener('click', showInfo);
section3.addEventListener('click', showInfo);

const url = "./travelList.json";
let places = '';
const destinySpace = document.querySelector('.new-Sections');


let closeTransition = document.querySelector('.sections-place-image--1').style;


function showInfo1() {
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

function closeInfo(event) {
    if (event.currentTarget.classList.contains('u-hidden') === false) {
        console.log('here');
        event.currentTarget.classList.add('u-hidden')
    } else {
        showInfo()
    }
}

function showInfo(event) {
    document.querySelector('dd:not(.u-hidden)').classList.add('u-hidden');
    event.currentTarget.nextElementSibling.classList.remove('u-hidden');
}


//FETCH
/**
 * fetch to get info from travelList.json and paint the new html structure
 */
function showDestinations() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            places = data.Travelling;
            places.destinations.map((place) => {
                destinySpace.innerHTML += generateHTMLDestiny(place);
            });
            //@See: https://stackoverflow.com/a/36946222
            //Second map because it's necessary wait the previously info
            places.destinations.map((place) => {
                const section = document.querySelector('.sections-place-title-' + place.id);
                section.addEventListener('click', closeInfo);
            });
        });
    //Change the last part of sections. Remove the part which you can search places
    otherDestinations.classList.add('section--hidden');
    finalSection.classList.remove('section--hidden');
}

/**
 * Create html structure
 */
function generateHTMLDestiny(place) {
    return `<dt class="u-place-title sections-place-title-${place.id}">${place.destiny}<i class="fas fa-caret-down"></i></dt>
    <dd class="u-place-image sections-place-image--${place.id} u-hidden">
        <p class="u-place-info sections-place-info--${place.id}">${place.description}
    </p>
    </dd>`;
}

otherDestinations.addEventListener('click', showDestinations);