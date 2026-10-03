const themeswitcher = document.querySelector('#themeswitcher');
themeswitcher.addEventListener('change', (e) => { //e is a callback function
   // console.log(e.target.value);
    setTheme(e.target.value);
});

function setTheme(theme) {
    document.documentElement.className = theme;
}