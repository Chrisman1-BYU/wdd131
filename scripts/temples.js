const button = document.querySelector("#menu-button");
const menu = document.querySelector("#nav-menu");

button.addEventListener("click", () => {
menu.classList.toggle("open");

if(button.textContent === "☰"){
button.textContent = "X";
} else {
button.textContent = "☰";
} 

});

/* footer dates */

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
"Last Modified: " + document.lastModified;