function run() {
  let userName = document.getElementById("userName").value;
  let play = confirm(
    "Hello, " + userName + "! Would you like to play a game of heads or tails?"
  );
  if (play) {
    let resultImg = document.getElementById("resultImg");
    let resultImage = document.getElementById("resultImage");
    if (Math.floor(Math.random() * 2) === 0) {
      alert("HEADS!");
      resultImg.src = "head.JPG";
    } else {
      alert("TAILS!");
      resultImg.src = "tail.JPG";
    }
    resultImage.style.display = "block";
    // Redirect to the main page after a brief delay
    setTimeout(function () {
      window.location.href = "index.html";
    }, 3000);
  } else {
    alert("Goodbye, " + userName + "!");
  }
}
