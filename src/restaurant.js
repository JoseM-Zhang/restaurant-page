const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append image
    const image = document.createElement('img');
    image.src='./heroimage.jpeg';
    pageContent.appendChild(image);

    //create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Best food all around or something';
    pageContent.appendChild(headline);

    //create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'good food, yummy, quite good, very affordable, and myriad of other things!';
    pageContent.appendChild(copy)
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;