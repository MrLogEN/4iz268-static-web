function menuRoll(){
    const menu = document.getElementById("nav-menu");
    const disp = menu.style.display;
    if (disp === "none"){
        menu.style.display = "flex";
        //menu.style.transition = "display 0.5s ease 0";
    }
    else {
        menu.style.display = "none";
        //menu.style.transition = "display 0.5s ease 0";
    }
}