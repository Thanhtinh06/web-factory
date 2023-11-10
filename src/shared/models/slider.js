class SliderAction {
  constructor(listImage, imageCard, slideButtons, idActiveSlide, idPreButton) {
    this.listImage = listImage;
    this.imageCard = imageCard;
    this.slideButtons = slideButtons;
    this.currentSlide = 1;
    this.direction = -1;
    this.idActiveSlide = idActiveSlide;
    this.idPreButton = idPreButton;
  }

  init() {
    document.getElementById(this.idActiveSlide).innerHTML = this.currentSlide;

    this.slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.direction = button.id === this.idPreButton ? -1 : 1;

        const scrollAmount = this.imageCard.clientWidth * this.direction;

        this.scroll(scrollAmount);
      });
    });
  }

  scroll(amount) {
    this.listImage.scrollBy({ left: amount, behavior: "smooth" });

    this.currentSlide += this.direction;

    if (this.currentSlide < 1) {
      this.currentSlide = 1;
    } else if (this.currentSlide > 10) {
      this.currentSlide = 10;
    }

    document.getElementById(this.idActiveSlide).innerHTML = this.currentSlide;
  }
}

export default SliderAction;
