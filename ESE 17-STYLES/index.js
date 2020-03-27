"use strict"
let _title, _txtSize, _imgBox;
let bg;
window.onload = function(){
    _title = document.getElementById("titolo");
    _txtSize = document.getElementById("txtSize");
    _imgBox = document.getElementById("imgBox");
    bg=true;
}
function changeColor()
{
    if(_title.style.backgroundColor == "yellow")
    {
        _title.style.backgroundColor="blue";
        _title.style.color="yellow";
    }
    else
    {
        _title.style.backgroundColor="yellow";
        _title.style.color="blue";
    }
}
function changeSize()
{
    let size = parseInt(_txtSize.value);
    if(size > 0)
        _title.style.fontSize = size + "pt";
    else
        alert("Inserisci un numero valido (>0)");
}
function changeBackground()
{
    if(!bg)
    {
        document.body.style.background="dodgerblue none center repeat-y";
    }
    else
    {
        document.body.style.background="#eaeaea url(\"img/bg.gif\") center repeat-y";
    }
    bg=!bg;
}
function changeBorder()
{
    if(_title.style.borderStyle=="hidden")
        _title.style.borderStyle="solid"
    else
        _title.style.borderStyle="hidden"
}
function image(n)
{
     _imgBox.setAttribute("src", "img/img" + n + ".jpg");
}
function cleanImage()
{
    _imgBox.removeAttribute("src");
}
function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}