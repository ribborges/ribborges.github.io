/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openMenu() {
    var x = document.getElementById("navbar");
    
    if (x.style.opacity == 0) {
        x.style.opacity = 1;
        x.style.zIndex = 1;
    }
    
    else {
        x.style.opacity = 0;
        x.style.zIndex = -1;
    }
}