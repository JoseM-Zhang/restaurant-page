import createRestaurantHomePage from "./restaurant";
import createRestaurantMenuPage from "./menu";
import createRestaurantContactPage from "./contact";

const createTabs = () => {
    const content = document.querySelector('#content');

    //creating 3 divs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //set ids for divs
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    //set class for divs
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    //set text content for divs
    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    //append divs to content div
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    });

    div2.addEventListener('click', () => {
        clearContent();
        createRestaurantMenuPage();
    });

    div3.addEventListener('click', () => {
        clearContent();
        createRestaurantContactPage();
    });

}

function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
        content.removeChild(pageContent);
    }
}
export default createTabs;
