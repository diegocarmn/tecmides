// Change the navbar current class (transparent and light)

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
    var navbar = document.querySelector(".navbar");
	  if (scroll > 0) {
	    navbar.classList.add("navbar-on-scroll");
      navbar.classList.add("navbar-light");
      navbar.classList.remove("navbar-dark");
	  }
	  else{
      navbar.classList.add("navbar-dark");
      navbar.classList.remove("navbar-on-scroll");
      navbar.classList.remove("navbar-light");
	  }
  })
});
