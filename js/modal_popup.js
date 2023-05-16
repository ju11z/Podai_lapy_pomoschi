var modal = document.getElementById("modal-window");
var btn = document.getElementById("modal-popup-btn");
var span = document.getElementById("modal-popup-btn-close");


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}