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

function validateDonutForm() {
    if(validateFio() & validateCard() & validateCvv() & validateDuedate() & validateSum()){
        //validateFio() & validateCard() & validateCvv() & validateDuedate() & validateSum()
        modal.style.display = "block";
    }
}

function validateFio(){
    fio=document.getElementById("fio").value;
    fioMsg=document.getElementById("fioMsg");
    fioRegExp = /^[A-Z]+\s[A-Z]+$/;

    if (fioRegExp.test(fio)){
        fioMsg.innerHTML="";
        fioMsg.style.display="none";
        return true;
    }

    fioMsg.innerHTML="Пожалуйста, введите имя держателя карты в формате IVANOV IVAN";
    fioMsg.style.display="block";
    return false;
}

function validateCard(){
    card=document.getElementById("card").value;
    cardMsg=document.getElementById("cardMsg");
    cardRegExp=/^(\d{4}([-]|)\d{4}([-]|)\d{4}([-]|)\d{4})$/;

    if (cardRegExp.test(card)){
        cardMsg.innerHTML="";
        fioMsg.style.display="none";
        return true;
    }

    cardMsg.innerHTML="Пожалуйста, введите номер карты в формате XXXX-XXXX-XXXX-XXXX";
    cardMsg.style.display="block";
    return false;

}
function validateCvv(){
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
function validateDuedate(){
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
function validateSum(){
    sum=document.getElementById("sum").value;
    sumMsg=document.getElementById("sumMsg");
    sumRegExp=/^(\d{1,})$/;

    if (sumRegExp.test(sum)){
        sumMsg.innerHTML="";
        sumMsg.style.display="none";
        return true;
    }

    sumMsg.innerHTML="Пожалуйста, введите целое число";
    sumMsg.style.display="block";
    return false;
}