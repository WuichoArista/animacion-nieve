const snowButton = document.getElementById("snow-button");

snowButton.addEventListener("click", function() {
  // create snowflakes
  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.body.appendChild(snowflake);

    // position and animate snowflake
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.animationDelay = Math.random() * 3 + "s";
  }
});

