document.getElementsByClassName("glow-on-hover").addEventListener("click", function() {
  var moreText = document.getElementById("moreText");
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    this.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    this.innerHTML = "Read More";
  }
});
