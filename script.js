
// define variables
const postForm = document.querySelector("#blogForm");
const nameInput = document.querySelector("#formUsername");
const titleInput = document.querySelector("#formTitle");
const contentInput = document.querySelector("#formcontent");


document.getElementById(`blogForm`).addEventListener(`Submit`, function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('formUsername').value;
    const titleInput = document.getElementById('formTitle').value;
    const contentInput = document.getElementById('formContent').value;

    const data = {
        nameInput: username,
        titleInput: title,
        contentInput: content
    };

    saveFormData(data);
});

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('data')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}