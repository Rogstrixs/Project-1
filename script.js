document.addEventListener("DOMContentLoaded", function() {
  var moreButtons = document.querySelectorAll(".more-button");
  var moreTexts = document.querySelectorAll(".moreText");

  for (var i = 0; i < moreButtons.length; i++) {
      moreButtons[i].addEventListener("click", function() {
          var moreText = this.nextElementSibling;
          if (moreText.style.display === "none" || moreText.style.display === "") {
              moreText.style.display = "block";
              this.innerHTML = "Read Less";
          } else {
              moreText.style.display = "none";
              this.innerHTML = "Read More";
          }
      });
  }
});