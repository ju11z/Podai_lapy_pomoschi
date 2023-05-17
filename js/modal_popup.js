var modal = document.getElementById("modal-window");
var btn = document.getElementById("modal-popup-btn");
var close = document.getElementById("modal-popup-btn-close");
var send = document.getElementById("send-request");


btn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}
send.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}