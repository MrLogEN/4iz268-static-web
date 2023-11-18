function menuRoll(){
    const menu = document.getElementById("nav-menu");
    const disp = menu.style.display;
    if (disp === "none"){
        menu.style.display = "flex";
    }
    else {
        menu.style.display = "none";
    }
}
window.onresize = (event)=>{
    const menu = document.getElementById("nav-menu");
    if (window.innerWidth > 900){
        menu.style.display = "flex";
    }
    else{
        menu.style.display = "none";
    }
}