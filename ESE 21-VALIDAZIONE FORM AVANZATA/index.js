"use strict"
let _nom, _sex,_ateneo,_cap,_lavoratore,_desc;
let errorMess=["","","","","","",""];
window.onload = function(){
    _nom=document.getElementById("nominativo")
    _sex=document.getElementsByName("sesso");
    _ateneo=document.getElementsByName("ateneo")[0];
    _lavoratore=document.getElementsByName("lavoratore")[0];
    _desc=document.getElementsByName("descr")[0];
    _cap=document.getElementsByName("cap")[0];
}

function invio() {
    if (_nom.value==""){
        errorMess[0]="Manca il Nominativo";
        _nom.classList.add("red-border");
    }
    if (_cap.value==""){
        errorMess[1]="Manca il Cap";
        _cap.classList.add("red-border");
    }
    errorMess[2]=_ateneo.selectedIndex==0?"Manca l'ateneo":"";
    let select=false;
    for (let i=0;i<_sex.length&&select==false;i++){
        if (_sex[i].checked==true){
            select=true;
        }
    }
    errorMess[3]=!select?"Manca il Sesso":"";
    if (_lavoratore.checked){
        if (_desc.value==""){
            errorMess[4]="Manca la tua Occupazione";
            _desc.classList.add("red-border");
        }
        else {
            errorMess[4]="";
            _desc.classList.remove("red-border");
        }

    }
    else{
        errorMess[4]="";
    }
    let messaggio="";
    for (let i=0;i<errorMess.length;i++){
        if (errorMess[i]!=""){
            messaggio+=errorMess[i]+"\n";
        }
    }

    if (messaggio!=""){
        alert(messaggio);
        return false;
    }
}


function cambioStatoChk() {
   _desc.disabled=!_lavoratore.checked;
    _desc.classList.remove("red-border");
}

function cambioStatoNominativo() {
    errorMess[0]="";
    let isNumber=false;
    for (let i=0;i<_nom.value.length&&!isNumber;i++){
        if(!isNaN(_nom.value[i])&&_nom.value[i]!=" "){
            isNumber=true;
        }
    }
    if (isNumber){
        errorMess[0]="É presente un carattere numerico nel nominativo";
        _nom.classList.add("red-border");

    }
    else{
        errorMess[0]="";
        _nom.classList.remove("red-border");
    }
}

function cambioStatoCAP() {
    let errore,carattere=false;
    errorMess[1]="";
    if (_cap.value.length!=5){
        errorMess[1]+="La lunghezza del CAP è errata - ";
        _cap.classList.add("red-border");
        errore=true;
    }
    for (let i=0;i<_cap.value.length&&!carattere;i++) {
        if (isNaN(_cap.value[i])) {
            carattere=true;
        }
    }
    if (carattere){
        errore=true;
        _cap.classList.add("red-border");
        errorMess[1]+="Il cap contiene caratteri non numerici";
    }
     if(!errore){
         errorMess[1]="";

        _cap.classList.remove("red-border");
    }
}