const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

togglebutton.addEventListener('click',() => {
   navbarlinks.classList.toggle('active') 
})
var load = document.getElementById("loader-wrapper");
window.addEventListener("load", function(){
    load.style.display = "none";
})
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides-top");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
     
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}