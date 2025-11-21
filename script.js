
const openside = document.querySelector(".display-hamburguesa");
const difuminadorback = document.getElementById ("fondo");
const sidebar = document.querySelector(".sidebar");
const media = window.matchMedia("(min-width: 1025px)");
const buttonsside = document.getElementById("botones-sidebar");

if(openside && difuminadorback){
 openside.onclick = () =>{
    difuminadorback.style.display = "flex";
    sidebar.classList.add("active");
    setTimeout(() => {
    sidebar.scrollTo({
      top: 0,             
      behavior: "smooth"
    });
  }, 300);
}

 } 

 window.onclick = (e) => {
    if (e.target === difuminadorback) {
      difuminadorback.style.display = "none";
     sidebar.classList.remove("active");
    }
  }

    buttonsside.onclick = () =>{
      sidebar.classList.remove("active");
      difuminadorback.style.display = "none";
    }
  function updateDisplay(e) {
    if (e.matches) {
        sidebar.classList.remove("active");
        difuminadorback.style.display = "none";
}
}
media.addEventListener("change", updateDisplay);
updateDisplay(media);