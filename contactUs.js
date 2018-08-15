const database = firebase.database().ref();

const nameElement = document.querySelector('.name');
const emailElement = document.querySelector('.email');
const commentElement = document.querySelector('.comment');
const button = document.querySelector('.submitButton');
button.addEventListener('click', updateDB);

function updateDB(event){
    event.preventDefault();
    const name       = nameElement.value;
    const email           = emailElement.value;
    const comment        = commentElement.value;


    nameElement.value = "";
    emailElement.value = "";
    commentElement.value = "";

    const userData = {
        name: name,
        email: email,
        comment: comment,
    };

    database.push(userData);

}