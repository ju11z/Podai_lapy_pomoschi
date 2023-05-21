let form=document.getElementById("announce-form");
form.style.display="none";

var modal = document.getElementById("modal-window");
var close = document.getElementById("modal-popup-btn-close");


close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleForm(){

    if(form.style.display=="none"){
        form.style.display="block";

    }
    else{
        form.style.display="none";
    }
}

previewImage=document.getElementById("previewImage");

function onFileSelected(input){


    var ext = input.files[0]['name'].substring(input.files[0]['name'].lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")){
        var reader = new FileReader();
    reader.onload = function (e) {
        $('#previewImage').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
}else{
}
}

function validateAnnounceForm(){
    if(true){
        //validateName() & validateCity() & validatePhone() & validateMail() & validateTitle() & validateDescr ()
        modal.style.display = "block";
    }
}

function validateName(){
    name=document.getElementById("name").value;
    nameMsg=document.getElementById("nameMsg");

    if (name!=""){
        console.log('name success');
        nameMsg.innerHTML="";
        nameMsg.style.display="none";
        return true;
    }

    console.log('name fail');
    nameMsg.innerHTML="Пожалуйста, заполните это поле.";
    nameMsg.style.display="block";
    console.log(nameMsg.innerHTML);
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

function validateTitle(){
    title=document.getElementById("title").value;
    titleMsg=document.getElementById("titleMsg");

    if (title!="" && title.length>5){
        titleMsg.innerHTML="";
        titleMsg.style.display="none";
        return true;
    }

    titleMsg.innerHTML="Длина названия должна быть более 5 символов.";
    titleMsg.style.display="block";
    return false;
}

function validateDescr(){
    descr=document.getElementById("descr").value;
    descrMsg=document.getElementById("descrMsg");

    if (descr!="" && title.length>20){
        descrMsg.innerHTML="";
        descrMsg.style.display="none";
        return true;
    }

    descrMsg.innerHTML="Длина описания должна быть более 20 символов.";
    descrMsg.style.display="block";
    return false;
}