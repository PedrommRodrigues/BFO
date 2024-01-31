document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("imageContainer");
  const numberOfImages = 52;

  for (let i = 1; i <= numberOfImages; i++) {
    const img = document.createElement("img");
    img.src = `Images/historial/${i}.png`;
    img.alt = "fotografia da banda";
    container.appendChild(img);
  }
});
