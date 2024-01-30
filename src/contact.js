const createRestaurantContactPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    //create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Contact';
    pageContent.appendChild(headline);

    //create and append copy element
    const formList = document.createElement('form');

    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('name','fullName');

    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('name', 'email');

    const message = document.createElement('input');
    message.setAttribute('type', "text");
    message.setAttribute('name', "message");

    const submitForm = document.createElement('input');
    submitForm.setAttribute('type', 'submit');
    submitForm.setAttribute('value', 'Submit');
    
    formList.appendChild(name);
    formList.appendChild(email);
    formList.appendChild(message);
    formList.appendChild(submitForm);

    
    pageContent.appendChild(formList);
    content.appendChild(pageContent);
}

export default createRestaurantContactPage;