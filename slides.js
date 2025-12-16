// Stores the current slide number (starts at the first slide)
var slideIndex = 1;

// Shows the first slide when the page loads
showDivs(slideIndex);

// Function to move to the next or previous slide
// n = 1 moves forward, n = -1 moves backward
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) { // Function that controls which slide is displayed
  var i;
  // Gets all elements with the class "slide"
  var x = document.getElementsByClassName("slide");

  // If the slide number exceeds the total, go back to the first slide
  if (n > x.length) { slideIndex = 1 }
  // If the slide number is less than 1, go to the last slide
  if (n < 1) { slideIndex = x.length }

  // Hides all slides
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";   // Displays the current slide
}

// Listens for keyboard input
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") plusDivs(-1);  // Press left arrow to go to the previous slide
  if (e.key === "ArrowRight") plusDivs(1); // Press right arrow to go to the next slide
});