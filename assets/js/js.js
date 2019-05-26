function opendetail(obj) {
    obj.setAttribute('open','')
}

function closedetail(obj) {
    obj.removeAttribute('open')
}


function expand(obj) {
    console.log(obj.style.width)
    if (obj.offsetWidth > 300) {
        return
    }
    if (obj.style.width=="100%"){
        return
    }
    obj.style.width="300px"
}
function resize(obj) {
  obj.style.width="15%"
}

function showmenu(obj) {
    obj.open ="open"
}

function hiddenmenu(obj) {
    obj.open =""
}
function hiddennav() {
    document.getElementById("nav").style.width="5%";
}
