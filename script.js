let moreButtons = document.querySelectorAll('.more-button');

moreButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    let moreTextId = button.parentNode.querySelector('p').id;
    let moreText = document.getElementById(moreTextId);
    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "block";
      button.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      button.innerHTML = "Read More";
    }
  });
});