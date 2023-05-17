var modal = document.getElementById("modal-window");
var modalPost = document.getElementById("modal-window-post");
var btn = document.getElementById("modal-popup-btn");
var close = document.getElementById("modal-popup-btn-close");
var closePost = document.getElementById("modal-post-close");
var send = document.getElementById("send-request");


btn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}
closePost.onclick = function() {
    modalPost.style.display = "none";
}
send.onclick = function() {
    validateRequestForm();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalPost) {
        modalPost.style.display = "none";
    }
}


function validateRequestForm() {
    if(true){
        alert("validate form");
        //validateName() & validateCity() & validatePhone() & validateMail() & validateAbout()
        modal.style.display = "none";
        modalPost.style.display="block";
    }
}

function validateName(){
    name=document.getElementById("name").value;
    nameMsg=document.getElementById("nameMsg");
    nameRegExp = /^[A-Z]+\s[A-Z]+$/;

    if (nameRegExp.test(name)){
        nameMsg.innerHTML="";
        nameMsg.style.display="none";
        return true;
    }

    nameMsg.innerHTML="Длина имени должна быть не менее 3х символов.";
    nameMsg.style.display="block";
    return false;
}

function validateCity(){
    city=document.getElementById("city").value;
    cityMsg=document.getElementById("cityMsg");
    cityRegExp=/^(\d{4}([-]|)\d{4}([-]|)\d{4}([-]|)\d{4})$/;

    if (cityRegExp.test(city)){
        cityMsg.innerHTML="";
        cityMsg.style.display="none";
        return true;
    }

    cityMsg.innerHTML="Пожалуйста, введите номер карты в формате XXXX-XXXX-XXXX-XXXX";
    cityMsg.style.display="block";
    return false;

}
function validatePhone(){
    cvv=document.getElementById("cvv").value;
    cvvMsg=document.getElementById("cvvMsg");
    cvvRegExp=/^(\d{3})$/;

    if (cvvRegExp.test(cvv)){
        cvvMsg.innerHTML="";
        cvvMsg.style.display="none";
        return true;
    }

    cvvMsg.innerHTML="Пожалуйста, введите номер CVV в формате XXX";
    cvvMsg.style.display="block";
    return false;

}
function validateMail(){
    duedate=document.getElementById("duedate").value;
    duedateMsg=document.getElementById("duedateMsg");
    duedateRegExp=/^(\d{2}([-]|)\d{2})$/;

    if (duedateRegExp.test(duedate)){
        duedateMsg.innerHTML="";
        duedateMsg.style.display="none";
        return true;
    }

    duedateMsg.innerHTML="Пожалуйста, введите срок действия карты в формате XX-XX";
    duedateMsg.style.display="block";
    return false;

}
function validateAbout(){
    about=document.getElementById("about").value;
    aboutMsg=document.getElementById("aboutMsg");
    aboutRegExp=/^(\d{1,})$/;

    if (aboutRegExp.test(about)){
        aboutMsg.innerHTML="";
        aboutMsg.style.display="none";
        return true;
    }

    aboutMsg.innerHTML="Пожалуйста, заполните это поле";
    aboutMsg.style.display="block";
    return false;
}