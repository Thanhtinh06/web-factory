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


const initSliderImage = () => {
  const listImage = document.querySelector(".slider-image .listImage");
  const imageCard = document.querySelector(".slider-image .image-card");
  const slideButtons = document.querySelectorAll(".slider-image .slide-button");
  let currentSlide = 1;
  document.getElementById("activeImage").innerHTML = currentSlide;
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "btn-pre-img" ? -1 : 1;

      const scrollAmount = imageCard.clientWidth * direction;

      listImage.scrollBy({ left: scrollAmount, behavior: "smooth" });

      currentSlide =
        button.id === "btn-pre-img" ? (currentSlide -= 1) : (currentSlide += 1);

      if (currentSlide < 1) {
        currentSlide = 1;
      }
      if (currentSlide > 10) {
        currentSlide = 10;
      }
      document.getElementById("activeImage").innerHTML = currentSlide;
    });
  });
};

window.addEventListener("load", initSliderImage);