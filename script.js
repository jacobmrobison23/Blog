
const form = document.querySelector('form');


form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(form);

    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    localStorage.setItem('formData', JSON.stringify(data));

    
    window.location.href = 'blog.html';
}
);


