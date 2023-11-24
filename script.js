var menuBtn = document.getElementById('menuBtn');
var sideNav = document.getElementById('sideNav');
var menu = document.getElementById('menu');
sideNav.style.right = "-200px"
menuBtn.onclick = function x(){
    if(sideNav.style.right == "-200px"){
        sideNav.style.right ="0px";
        menu.src = "./images/close.png"
    }
    else{
        sideNav.style.right ="-200px";
        menu.src = "./images/menu.png"
    }
}