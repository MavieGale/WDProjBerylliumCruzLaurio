var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length){slideIndex = 1}  
  if (n < 1) {slideIndex = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "flex";
}

document.addEventListener("keydown", function(e) {
  if(e.key === "ArrowLeft") plusDivs(-1);
  if(e.key === "ArrowRight") plusDivs(1);
});

function showCharacter(img) {
  const char = document.getElementById("character");

  char.classList.remove("active");

  setTimeout(() => {
    char.src = img;
    char.classList.add("active");
  }, 50);
}