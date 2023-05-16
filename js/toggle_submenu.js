submenuItems=document.getElementsByClassName("submenu-item");
Array.from(submenuItems).forEach(i=>i.addEventListener("click", function(){
    toggleSubmenu(i);
    }
));

function toggleSubmenu(i){
    Array.from(submenuItems).forEach(s=>s.classList.remove("active"));
    i.classList.add("active");
}