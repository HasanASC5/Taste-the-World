const database = firebase.database().ref();

const firstNameElement = document.querySelector('.name1');
const lastNameElement = document.querySelector('.name2');
const emailElement = document.querySelector('.user_email');
const button = document.querySelector('.submitButton');
button.addEventListener('click', updateDB);

function updateDB(event){
    event.preventDefault();
    const firstName       = firstNameElement.value;
    const lastName        = lastNameElement.value;
    const email           = emailElement.value;

    firstNameElement.value = "";
    lastNameElement.value = "";
    emailElement.value = "";

    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
    };

    console.log(userData);
    database.push(userData);

}