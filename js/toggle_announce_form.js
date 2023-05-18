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

}

function validateRequestForm() {
    if(validateName() & validateCity() & validatePhone() & validateMail() & validateAbout()){
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