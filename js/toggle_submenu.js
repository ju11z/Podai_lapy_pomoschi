submenuItems=document.getElementsByClassName("submenu-item");
console.log(submenuItems);
Array.from(submenuItems).forEach(i=>i.addEventListener("click", function(){
    toggleSubmenu(i);
}))

function toggleSubmenu(i){
    alert("toggle");
    console.log(i);
    Array.from(submenuItems).forEach(s=>s.classList.remove("active"));
    i.classList.add("active");
}