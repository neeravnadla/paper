
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
});
