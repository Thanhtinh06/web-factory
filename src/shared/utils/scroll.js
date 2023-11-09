const sections = document.querySelectorAll(".section");
let currentSectionIndex = 0;

window.addEventListener("wheel", (event) => {
  const deltaY = event.deltaY; // Scroll delta in pixels

  if (deltaY > 0) {
    // Scrolling down
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      scrollToSection(currentSectionIndex);
    }
  } else {
    // Scrolling up
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      scrollToSection(currentSectionIndex);
    }
  }
});

function scrollToSection(index) {
  const targetSection = sections[index];
  targetSection.scrollIntoView({ behavior: "smooth" });
}
