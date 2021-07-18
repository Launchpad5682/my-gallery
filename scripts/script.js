imageGrid = document.getElementsByClassName("image-grid")[0];

paths = "assets/photo";
extension = ".png";

for (let i = 1; i <= 6; i++) {
  let img = document.createElement("img");
  img.src = paths + String(i) + extension;
  img.classList.add("image-" + String(i));
  img.classList.add("image");
  imageGrid.appendChild(img);
}
