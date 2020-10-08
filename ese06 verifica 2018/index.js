"use strict"

window.onload = function(){
    
    let _listBox=document.getElementById("lstNazioni");
    let _table=document.getElementById("table");
    let intestazioni=["name","username","state","nat","img"];
    caricaListbox();
    caricaTabella();

    function caricaListbox(){
        let vetNat=json["results"];
        let vet=[];
        let i=0;
        for (const item of vetNat) {
            if(!vet.includes(item.nat)){
                let _option=document.createElement("option");
                _listBox.appendChild(_option);
                _option.text=item.nat;
                vet[i++]=item.nat;
            }
        }
    }

    function caricaIntestazioni(){
        let _tr=document.createElement("tr");
        _table.appendChild(_tr);
        for(let i=0;i<intestazioni.length;i++)
        {
            let _th=document.createElement("th");
            _th.innerHTML=intestazioni[i];
            _tr.appendChild(_th);
        }
    }

    function caricaTabella(){
        _table.innerHTML="";
        caricaIntestazioni();
        let vetJson=json.results;
        for (const item of vetJson) {
            console.log(item)
            let _tr=document.createElement("tr");
            _table.appendChild(_tr);
            let _td;
            _td=document.createElement("td");
            _tr.appendChild(_td);
            _td.innerHTML=vetJson["first"];
            _td.innerHTM+=" ";
            _td.innerHTML=item.name.first;
            _td.innerHTML+=" ";
            _td.innerHTML+=item.name.last;

            _td=document.createElement("td");
            _tr.appendChild(_td);
            _td.innerHTML=item.login.username;

            _td=document.createElement("td");
            _tr.appendChild(_td);
            _td.innerHTML=item.location.state;

            _td=document.createElement("td");
            _tr.appendChild(_td);
            _td.innerHTML=item.nat;

            _td=document.createElement("td");
            _tr.appendChild(_td);
            let _img=document.createElement("img");
            _img.src=item.picture.thumbnail;
            _img.style.width="50px";
            _img.style.height="50px";
            _td.appendChild(_img);

        }

    }
}