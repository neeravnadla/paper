
document.addEventListener('DOMContentLoaded', () => {

    // load channel buttons    
    document.querySelectorAll(".coloroption").forEach(element => {
    let e = element;
    element.style.backgroundColor = element.dataset.dcolor;
    e.onclick = ()=>{
        let eid = document.getElementById(e.id).dataset.dcolor;  ;
        document.querySelector(".addnew").style.backgroundColor = eid;       
        document.querySelector("#newmsg").style.backgroundColor = eid;
    } ; 
});


document.querySelector("#clear").addEventListener("click", ()=>{

    document.querySelector("#newmsg").value = "";
});     
});



document.querySelector("#fontplush").addEventListener("click", ()=>{

    fontsize("plus")

});     

document.querySelector("#fontminus").addEventListener("click", ()=>{

    fontsize("minus")

});   

function fontsize(button){

    if (button === "plus"){

        let p = document.querySelector("#fontplush");
     let m = document.querySelector("#fontminus");

    let s = Number(p.dataset.fs) + 2;

    document.querySelector("#newmsg").style.fontSize = s+"px";

    p.dataset.fs = s;
    m.dataset.fs = s;

    }
    
    if(button === "minus"){

        
    let p = document.querySelector("#fontplush");
    let m = document.querySelector("#fontminus");

    let s = Number(p.dataset.fs) - 2;

    document.querySelector("#newmsg").style.fontSize = s+"px";

    p.dataset.fs = s;
    m.dataset.fs = s;

    }

    
}