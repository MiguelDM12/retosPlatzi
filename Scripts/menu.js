function menuDisplayer(){
let menuPlace = document.querySelector(".menu-container");
menuPlace.classList.toggle("menu-container-displayer");
}

let iconMenuLocalization = document.getElementById("menu-icon");

iconMenuLocalization.onclick = function(){
    menuDisplayer();
}
