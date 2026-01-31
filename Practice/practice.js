document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = "Liked ❤️";
  });
});
