class SliderAction {
  constructor(
    listImage,
    imageCard,
    slideButtons,
    idActiveSlide,
    idPreButton,
    idNextButton
  ) {
    this.listImage = listImage;
    this.imageCard = imageCard;
    this.slideButtons = slideButtons;
    this.itemsSlide = Math.round(
      this.listImage.clientWidth / this.imageCard.clientWidth
    );
    this.currentSlide = this.itemsSlide;
    this.direction = -1;
    this.idActiveSlide = idActiveSlide;
    this.idPreButton = idPreButton;
    this.idNextButton = idNextButton;
    this.maxScrollLeft = listImage.scrollWidth - imageCard.clientWidth;
  }

  init() {
    const totalItems =
      Math.round(this.maxScrollLeft / this.imageCard.clientWidth) + 1;
    document.getElementById(this.idActiveSlide).innerHTML = this.currentSlide;
    document.getElementById(
      `total-items-${this.idActiveSlide}`
    ).innerHTML = `/${totalItems}`;

    this.slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.direction = button.id === this.idPreButton ? -1 : 1;

        const scrollAmount = this.listImage.clientWidth * this.direction;

        this.scroll(scrollAmount);
      });
    });

    this.listImage.addEventListener("scroll", () => {
      this.disableButtonNext();
      this.disableButtonStartList();
      this.updateNumberSlide();
    });
  }

  scroll(amount) {
    this.listImage.scrollBy({ left: amount, behavior: "smooth" });
    this.currentSlide += this.direction;
    document.getElementById(this.idActiveSlide).innerHTML = this.currentSlide;
  }

  disableButtonNext() {
    const nextButton = document.getElementById(this.idNextButton);
    if (
      this.currentSlide ===
      Math.round(this.maxScrollLeft / this.imageCard.clientWidth) + 1
    ) {
      nextButton.setAttribute("disabled", "");
      nextButton.classList.add("disable");
    } else {
      nextButton.removeAttribute("disabled");
      nextButton.classList.remove("disable");
    }
  }

  disableButtonStartList() {
    const startListButton = document.getElementById(this.idPreButton);
    if (this.currentSlide <= this.itemsSlide) {
      startListButton.setAttribute("disabled", "");
      startListButton.classList.add("disable");
    } else {
      startListButton.removeAttribute("disabled");
      startListButton.classList.remove("disable");
    }
  }
  updateNumberSlide() {
    const scrollPosition = this.listImage.scrollLeft;
    const totalItems =
      Math.round(this.maxScrollLeft / this.imageCard.clientWidth) + 1;
    let part =
      Math.round(
        (this.maxScrollLeft - scrollPosition) / this.imageCard.clientWidth
      ) +
      1 -
      this.itemsSlide;
    this.currentSlide = totalItems - part;
    document.getElementById(this.idActiveSlide).innerHTML = this.currentSlide;
  }
}

export default SliderAction;
