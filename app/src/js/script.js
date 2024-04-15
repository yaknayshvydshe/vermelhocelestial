///////////////////////////////////////
// Mobile navbar
document.querySelector('.btn').onclick = function (x) {
  var menu = document.querySelector('.menu');
  var btn = document.querySelector('.btn');

  menu.classList.toggle('is-active');
  btn.classList.toggle('is-active');

  x.preventDefault();
}

function wishList(){
  var list = document.getElementById("toast");
list.classList.add("show");
list.innerHTML = '<i class="far fa-heart wish"></i> Product added to List';
setTimeout(function(){
  list.classList.remove("show");
},3000);
}

function addCart(){
    var cart = document.getElementById("toast-cart");
cart.classList.add("show");
cart.innerHTML = '<i class="fas fa-shopping-cart cart"></i> Product added to cart';
setTimeout(function(){
  cart.classList.remove("show");
}, 3000);
}

///////////////////////////////////////
// Carrousel
var index = 0;

show_slide = (i) => {
  //increment/decrement slide index
  index += i;

  //grab all the images
  var images = document.getElementsByClassName("image");
  //grab all the dots
  var dots = document.getElementsByClassName("dot");

  // hide all the images
  for (i = 0; i < images.length; i++)
    images[i].style.display = "none";
  
  // remove the active class from the dot
  for (i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(" active", "");
  
  // if index is greater than the amount of images (set it to zero)
  if (index > images.length - 1)
    index = 0;
  // if index is less than zero (set it to the length of images)
  if (index < 0)
    index = images.length - 1;
    
    // only display the image that's next or previous
    images[index].style.display = "block";
  // only make the current dot active
    dots[index].className += " active";

}

window.addEventListener("onload", show_slide(index));