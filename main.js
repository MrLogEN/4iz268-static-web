
document.getElementById("nav-menu").style.maxHeight = '0';
function menuRoll(){
    const menu = document.getElementById("nav-menu");
    const burger = document.getElementById("burger-icon");
    const cross = document.getElementById("cross-icon");
    if (menu.style.maxHeight){
        menu.style.maxHeight = null;
        burger.style.display = "none";
        cross.style.display = "flex";

    }
    else{
        menu.style.maxHeight = "0";
        burger.style.display = "flex";
        cross.style.display = "none";
    }
}