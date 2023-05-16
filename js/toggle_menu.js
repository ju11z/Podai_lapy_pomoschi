toggleButton=document.getElementById("toggle-menu-btn");
menu=document.getElementById("toggle-menu");
menu.style.display="none";

toggleButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    if(menu.style.display=="block"){
        menu.style.display="none";
    }
    else{
        menu.style.display="block";
    }
}

