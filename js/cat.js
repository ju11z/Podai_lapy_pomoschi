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
    if(validateName() & validateCity() & validatePhone() & validateMail() & validateAbout()){

        //validateName() & validateCity() & validatePhone() & validateMail() & validateAbout()
        modal.style.display = "none";
        modalPost.style.display="block";
    }
}

function validateName(){
    name=document.getElementById("name").value;
    nameMsg=document.getElementById("nameMsg");

    if (name!=""){
        nameMsg.innerHTML="";
        nameMsg.style.display="none";
        return true;
    }

    nameMsg.innerHTML="Пожалуйста, заполните это поле.";
    nameMsg.style.display="block";
    return false;
}

function validateCity(){
    return true;

}
function validatePhone(){
    phone=document.getElementById("phone").value;
    phoneMsg=document.getElementById("phoneMsg");
    phoneRegExp=/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

    if (phoneRegExp.test(phone)){
        phoneMsg.innerHTML="";
        phoneMsg.style.display="none";
        return true;
    }

    phoneMsg.innerHTML="Пожалуйста, введите номер телефона в формате XXX-XXX-XXXX";
    phoneMsg.style.display="block";
    return false;

}
function validateMail(){
    mail=document.getElementById("mail").value;
    mailMsg=document.getElementById("mailMsg");
    mailRegExp=/^([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/;

    if (mailRegExp.test(mail)){
        mailMsg.innerHTML="";
        mailMsg.style.display="none";
        return true;
    }

    mailMsg.innerHTML="Пожалуйста, введите почту верно";
    mailMsg.style.display="block";
    return false;

}
function validateAbout(){
    about=document.getElementById("about").value;
    aboutMsg=document.getElementById("aboutMsg");

    if (about!=""){
        aboutMsg.innerHTML="";
        aboutMsg.style.display="none";
        return true;
    }

    aboutMsg.innerHTML="Пожалуйста, заполните это поле";
    aboutMsg.style.display="block";
    return false;
}