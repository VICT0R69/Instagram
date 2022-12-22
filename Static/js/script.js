let button = document.querySelector('.btn');
let password = document.getElementById('password');
password.addEventListener('input', () => {
    if (password.value.length > 2) {
        button.style.backgroundColor = 'rgb(0, 149, 246)';
        button.removeAttribute('disabled');
    } else {
        button.style.backgroundColor = 'rgb(160, 215, 251)';
        button.setAttribute('disabled', 'disabled');

    }
});