
// letter paper color

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


// paper color button action

var colorPage;
var defaultPaper = "#666";

window.addEventListener("load", startup, false);
function startup() {

  colorPage = document.querySelector("#papercolor");
  colorPage.value = defaultPaper;
  colorPage.addEventListener("input", update, false);
  
}

function update(event) {
   var b = document.querySelector(".addnew");
  var p = document.querySelector("#newmsg");
 

  if (p) {
    p.style.backgroundColor = event.target.value;
    b.style.backgroundColor = event.target.value;
  }
}






// clear text button

document.querySelector("#clear").addEventListener("click", ()=>{
    document.querySelector("#newmsg").value = "";
});     
});


// text resize button

document.querySelector("#fontplush").addEventListener("click", ()=>{fontsize("plus")});     
document.querySelector("#fontminus").addEventListener("click", ()=>{fontsize("minus")});   

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

// font color button action

var colorWell;
var defaultColor = "#666";

window.addEventListener("load", startup, false);
function startup() {

  colorWell = document.querySelector("#fontcolor");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  
}

function updateFirst(event) {
  var p = document.querySelector("#newmsg");

  if (p) {
    p.style.color = event.target.value;
  }
}



