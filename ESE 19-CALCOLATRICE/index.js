"use strict"
let _btnNum, _btnOper, _btnReset, _btnRis, _txtDisplay;
let oper1, segno, oper2,risultato;
window.onload = function() {
    _txtDisplay = document.getElementById("txtDisplay");
    _btnOper = document.getElementsByName("btnOperatore");
    _btnNum = document.getElementsByName("btnNum");
    _btnReset = document.getElementById("btnReset");
    _btnRis = document.getElementById("btnRis");
    _btnRis.enabled=false;
}
function n(num)
{
    _txtDisplay.value += num;
}
function op(i)
{
    oper1 = parseInt(_txtDisplay.value);
    _txtDisplay.value = "";
    for (let i = 0; i < _btnOper.length; i++)
        _btnOper[i].enabled=false;
    _btnRis.enabled=true;
    segno=i;
}

function calcola()
{
    oper2 = parseInt(_txtDisplay.value);
    switch (segno)
    {
        case "*":
            risultato = oper1 * oper2;
            break;
        case "/":
            if(oper2 == 0)
            {
                alert("Impossibile dividere per 0");
                reset();
            }
            else
                risultato = oper1 / oper2;
            break;
        case "+":
            risultato = oper1 + oper2;
            break;
        case "-":
            risultato = oper1 - oper2;
            break;
    }
    _txtDisplay.value = risultato;
    for (let i = 0; i < _btnOper.length; i++)
        _btnOper[i].enabled=true;
    _btnRis.enabled=false;
}
function reset()
{
    oper1 = undefined;
    segno = undefined;
    _txtDisplay.value = "";
    for (let i = 0; i < _btnOper.length; i++)
        _btnOper[i].enabled=true;
    _btnRis.enabled=false;
}
function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}