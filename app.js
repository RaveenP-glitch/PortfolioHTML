// // Get the container element
// var btnContainer = document.getElementsByClassName("nav-items");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("item");

// // Loop through the buttons and add the active class to the current/clicked button

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active", "");
//     this.className += "active";
//   });
// }

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }