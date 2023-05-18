let form=document.getElementById("announce-form");
form.style.display="none";

function toggleForm(){

    if(form.style.display=="none"){
        form.style.display="block";

    }
    else{
        form.style.display="none";
    }
}

function onFileSelected(event){
    alert('on file selected');
}

function validateAnnounceForm(){
    if(validateName() & validateCity() & validatePhone() & validateMail() & validateTitle() & validateDescr()){
        alert("validate form");
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
    city=document.getElementById("name").value;
    cityMsg=document.getElementById("nameMsg");

    if (city!=""){
        cityMsg.innerHTML="";
        cityMsg.style.display="none";
        return true;
    }

    cityMsg.innerHTML="Пожалуйста, заполните это поле.";
    cityMsg.style.display="block";
    return false;

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