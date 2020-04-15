"use strict"
let _cognome,_nome,_matricola,_regione,_tel, _mail,_ric;
window.onload = function(){
    _cognome=document.getElementsByName("cognome")[0];
    _nome=document.getElementById("nome");
    _matricola=document.getElementsByName("matricola")[0];
    _regione=document.getElementsByName("regione")[0];
    _mail=document.getElementsByName("email")[0];
    _tel=document.getElementsByName("tel")[0];
    _ric=document.getElementsByName("richiesta")[0];

}
function validaForm() {
    if(_cognome.value==""){
        alert("Manca il cognome");
        _cognome.classList.add("red-border");
        return false;//necessario per evitare submit
    }else{
        _cognome.classList.remove("red-border")
    }
    if(_nome.value==""){
        alert("Manca il nome");
        _nome.classList.add("red-border");
        return false;//necessario per evitare submit
    }else{
        _nome.classList.remove("red-border")
    }
    if (isNaN(parseInt(_matricola.value))){
        alert("Manca la matricola oppure non e'numerica");
        _matricola.classList.add("red-border");
        return false;
    }else{
        _matricola.classList.remove("red-border");
    }
    if (_regione.selectedIndex==0){
        alert("Manca la regione");
        return false;
    }
    if(_mail.value==""&&_tel.value==""){
        alert("Manca un contatto");
        _tel.classList.add("red-border");
        _mail.classList.add("red-border");
        return false;
    }else{
        _tel.classList.remove("red-border");
        _mail.classList.remove("red-border");
    }
}

