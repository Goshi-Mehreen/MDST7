const themeswitcher = document.querySelector('#themeswitcher');
const savedTheme = localStorage.getItem('theme');
// themeswitcher.addEventListener('change', (e) => { //e is a callback function
//    // console.log(e.target.value);
//     //setTheme(e.target.value);
   
// });

if(savedTheme === 'dark'){
    document.documentElement.classList.add('dark');
    }

    
themeswitcher.addEventListener("click", (e) => {
    if (e.target.value === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});