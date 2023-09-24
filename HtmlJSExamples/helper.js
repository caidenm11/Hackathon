let button = document.getElementById("nav-menu-button");



button.addEventListener("click", function(event){

    console.log("Button Clicked!");

    button.classList.toggle("change");

    let navMenu = document.getElementById("main-navigation");

    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
      } else {
        navMenu.style.display = "block";
      }
});