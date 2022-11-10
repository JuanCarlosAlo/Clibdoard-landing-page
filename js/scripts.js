const body = document.body;
const rootStyles = document.documentElement.style;
const switchTheme = document.getElementById('switch-theme');
const switchThemeLogo = document.getElementById('switch-theme-icon')
const switchLogo = document.getElementById('logo')
const switchColor = document.getElementById('change-color')

switchTheme.addEventListener('click' , () =>{
    if(body.classList.contains('dark-mode')){
        body.classList.remove('dark-mode')
        switchThemeLogo.src = "assets/images/icon-sun.svg"
        switchLogo.src = "assets/images/logo-light.svg"; 
    } else {
        body.classList.add('dark-mode')
        switchThemeLogo.src = "assets/images/icon-moon.svg"
        switchLogo.src = "assets/images/logo-dark.svg"
    }
});

switchColor.addEventListener('click', event => {
    if(event.target.classList.contains('color')){
    rootStyles.setProperty('--primary-color', event.target.dataset.color)
}
})
