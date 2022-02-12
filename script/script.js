/* Toggle opacity */
function openMenu() {
    var x = document.getElementById("menu");
    
    if (x.style.opacity == 0) {
        x.style.opacity = 1;
        x.style.zIndex = 1;
        x.style.display = "flex";
    }
    
    else {
        x.style.opacity = 0;
        x.style.zIndex = -1;
        x.style.display = "none";
    }
}