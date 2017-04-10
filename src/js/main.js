import Nav from './nav';
import Api from './api';

let nav = new Nav(document.getElementById('hamburger'));
let api = new Api();

if (document.getElementById('main')) {
    let main = document.getElementById('main');
    if (main.getAttribute('data-get')) {
        // simulate a call to the API
        api.get().then(function(response) {
            // create the element and update the UI
            let itemElement = document.createElement('div');
            itemElement.classList.add('item');

            let titleElement = document.createElement('span');
            titleElement.classList.add('title');
            titleElement.innerHTML = response.title;
            itemElement.appendChild(titleElement);

            let descriptionElement = document.createElement('p');
            descriptionElement.innerHTML = response.description;
            itemElement.appendChild(descriptionElement);

            main.appendChild(itemElement);
        });
    }
}
