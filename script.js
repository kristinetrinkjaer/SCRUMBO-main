// Toggle menu function
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// Event listener for burger menu
const burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', toggleMenu);

function myFunction() {
  // Get the checkbox
  let checkBox = document.getElementById("myCheck");
  // Get the output text
  let text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
