import autosize from "./autosize.js";

autosize(document.querySelector('textarea'));


// letter paper color

document.addEventListener('DOMContentLoaded', () => {

  // load channel buttons    
  document.querySelectorAll(".coloroption").forEach(element => {
    let e = element;
    element.style.backgroundColor = element.dataset.dcolor;
    e.onclick = () => {
      let eid = document.getElementById(e.id).dataset.dcolor;;
      document.querySelector(".addnew").style.backgroundColor = eid;
      document.querySelector("#newmsg").style.backgroundColor = eid;
    };
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

  document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#newmsg").value = "";
    document.querySelector("#newmsg").style.height = "60vh";

  });
});


// text resize button

document.querySelector("#fontplush").addEventListener("click", () => { fontsize("plus") });
document.querySelector("#fontminus").addEventListener("click", () => { fontsize("minus") });

function fontsize(button) {

  if (button === "plus") {

    let p = document.querySelector("#fontplush");
    let m = document.querySelector("#fontminus");
    let s = Number(p.dataset.fs) + 2;
    document.querySelector("#newmsg").style.fontSize = s + "px";
    p.dataset.fs = s;
    m.dataset.fs = s;
  }

  if (button === "minus") {

    let p = document.querySelector("#fontplush");
    let m = document.querySelector("#fontminus");
    let s = Number(p.dataset.fs) - 2;
    document.querySelector("#newmsg").style.fontSize = s + "px";
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


// copy text from paper 

document.querySelector("#copy").addEventListener('click', () => {
  let copyText = document.querySelector("#newmsg").value;
  if (copyText === "") {
    alert("paper is empty");
  }
  else {
    navigator.clipboard.writeText(copyText);
    alert("Text Copied");
  }
});

// save as image 

document.querySelector("#shot").addEventListener('click', () => {
  var node = document.querySelector('.addnew');

  domtoimage.toPng(node)
    .then(function (dataUrl) {

      download(dataUrl);

    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });



});




// download pic

function download(s) {
  const link = document.createElement('a');
  link.href = s;
  link.setAttribute('download', 'image.jpg');
  document.body.appendChild(link);
  link.click();
  link.remove();
}



// resize page


// textarea = document.querySelector("#newmsg");
// textarea.addEventListener('input', autoResize, false);

// function autoResize() {

//   this.style.height = this.scrollHeight + 'px';
// }

