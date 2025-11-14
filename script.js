
const openside = document.querySelector(".display-hamburguesa");
const difuminadorback = document.getElementById ("fondo");
const sidebar = document.querySelector(".sidebar");
if(openside && difuminadorback){
 openside.onclick = () =>{
    difuminadorback.style.display = "flex";
    sidebar.style.display = "flex";
 } 

 window.onclick = (e) => {
    if (e.target === difuminadorback) {
      difuminadorback.style.display = "none";
        sidebar.style.display = "none";
    }
  };

}