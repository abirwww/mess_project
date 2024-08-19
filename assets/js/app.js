
window.Alpine = Alpine;


let search_keywords = [
    "MacBook Pro ",
    "AirPods Pro",
    "Samsung S9",
    "Tablet",
    "Xiaomi",
    "JBL speaker",
    "Canon",
    "AirPods Max",
    "Asus",
    "MagSafe",
]


function increment_cart(){
    event.preventDefault();
    let input = event.currentTarget.previousElementSibling;
    input.value = parseInt(input.value) + 1;
}

function decrement_cart(){
    event.preventDefault();
    let input = event.currentTarget.nextElementSibling;
    input.value = parseInt(input.value) - 1;
}

function toggle_nav(){
    let nav_bar_menue = document.getElementById('nav_bar_menue');
    if(nav_bar_menue){
        nav_bar_menue.classList.toggle('active');
    }
}