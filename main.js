'use strict';

//
const url = "./travelList.json";

//
const section1 = document.querySelector('.sections-place-title-1');
const section2 = document.querySelector('.sections-place-title-2');
const section3 = document.querySelector('.sections-place-title-3');
const otherDestinations = document.querySelector('.section--discover');
section1.addEventListener('click', showInfo);
section2.addEventListener('click', showInfo);
section3.addEventListener('click', showInfo);

/**
 *
 * @param event
 */
function showInfo(event) {
    let placeToClose = document.querySelector('dd:not(.u-place-close)');
    placeToClose.classList.add('u-place-close');
    placeToClose.classList.remove('u-place-open');

    let placeSelected = event.currentTarget.nextElementSibling;

    setTimeout(function() {
        placeSelected.classList.remove('u-place-close');
        placeSelected.classList.toggle('u-place-open');
    }, 150);

}

/**
 * Make a request to get info from travelList.json and render the new html structure
 */
function showDestinations() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let places = data.Travelling;
            const destinySpace = document.querySelector('.new-Sections');

            places.destinations.map((place) => {
                destinySpace.innerHTML += generateHTMLDestiny(place);
            });
            //@See: https://stackoverflow.com/a/36946222
            //Second map because it's necessary to wait to be rendered all html
            places.destinations.map((place) => {
                const section = document.querySelector('.sections-place-title-' + place.id);
                section.addEventListener('click', showInfo);
            });
        });
    //Change the last part of sections. Remove the part which you can search places
    otherDestinations.classList.add('section--hidden');
    const finalSection = document.querySelector('.section--finally');
    finalSection.classList.remove('section--hidden');
}

/**
 * Create html structure for a place
 * @param place an object that contains info from a specific destiny
 */
function generateHTMLDestiny(place) {
    return `<dt class="u-place-title sections-place-title-${place.id}">${place.destiny}<i class="fas fa-caret-down"></i></dt>
    <dd class="u-place-image sections-place-image--${place.id} u-place-close">
        <p class="u-place-info sections-place-info--${place.id}">${place.description}
    </p>
    </dd>`;
}

//
otherDestinations.addEventListener('click', showDestinations);