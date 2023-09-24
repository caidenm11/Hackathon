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

button.addEventListener("wheel", greet); 

function greet(name) {
  console.log("Hello, " + name + "!");
  let navMenu = document.getElementById("main-navigation");
  navMenu.innerHTML = "mehmehmeh";
  navMenu.style.fontSize = "36px";
}
