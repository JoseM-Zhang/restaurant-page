const createRestaurantMenuPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append image
    const image = document.createElement('img');
    image.src='./heroimage.jpeg';
    pageContent.appendChild(image);

    //create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Menu';
    pageContent.appendChild(headline);

    //create and append menuList element
    const foods = [
        'Fried chicken - 5.99', 
        'Soda - 1.99', 
        'Hamburger - 5.99',
        'Tacos - 3.99',
        'Cake - 2.99'];
    const menuList = document.createElement('ul');
    for (let i = 0; i < foods.length; i++) {
        var foodList = document.createElement('li');
        foodList.textContent = foods[i];
        menuList.appendChild(foodList);
    }
    pageContent.appendChild(menuList)
    content.appendChild(pageContent);
}

export default createRestaurantMenuPage;