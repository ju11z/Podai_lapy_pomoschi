toggleButton=document.getElementById("toggle-menu-btn");
menu=document.getElementById("toggle-menu");

toggleButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    if(menu.style.display=="block"){
        menu.style.display="none";
        alert("off");
    }
    else{
        menu.style.display="block";
        alert("on");
    }
}

