//Select HTML elements
const themeButton = document.getElementById('theme-btn');
const body = document.body;

//Listen for click events
themeButton.addEventListener('click', () => {
    //Toggle the darkmode class on the body tag
    body.classList.toggle('dark-mode');

    //Update button label dynamically
    if (body.classList.contains('dark-mode')){
        themeButton.textContent ='Switch to light Mode';
    }else{
        themeButton.textContent ='Switch to Dark Mode';

    }
});