// navbar function
window.addEventListener("scroll", function(){
 const header = document.querySelector('header');
 const MenuBar = document.querySelector(".MenuToggle");
  if (window.scrollY > 0){
    MenuBar.style.filter = "invert(0)"
    header.classList.toggle("sticky", true);
  }else{
    MenuBar.style.filter = "invert(1)"
    header.classList.toggle("sticky", false);
  }
})

//  Toggle Menu

function toggleMenu(){
 const MenuBar = document.querySelector(".MenuToggle");
 const nav = document .querySelector (".nav");
 MenuBar.classList.toggle("active");
 nav.classList.toggle("active");


}
