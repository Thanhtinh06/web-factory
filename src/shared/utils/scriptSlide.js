const initSlider = () => {
  const listImage = document.querySelector(".slider .listImage");
  const imageCard = document.querySelector(".slider .card-post");
  const slideButtons = document.querySelectorAll(".slider .slide-button");
  let currentSlide = 1;
  document.getElementById("activeSlide").innerHTML = currentSlide;
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "btn-pre-post" ? -1 : 1;

      const scrollAmount = imageCard.clientWidth * direction;

      listImage.scrollBy({ left: scrollAmount, behavior: "smooth" });

      currentSlide =
        button.id === "btn-pre-post"
          ? (currentSlide -= 1)
          : (currentSlide += 1);

      if (currentSlide < 1) {
        currentSlide = 1;
      }
      if (currentSlide > 10) {
        currentSlide = 10;
      }
      document.getElementById("activeSlide").innerHTML = currentSlide;
    });
  });
};

window.addEventListener("load", initSlider);
