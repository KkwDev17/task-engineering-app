const filterButtons = document.querySelectorAll(".filters button");
const carCards = document.querySelectorAll(".car-card");
const quoteButtons = document.querySelectorAll(".quote-btn");
const carInterest = document.querySelector("#carInterest");
const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    carCards.forEach((card) => {
      const shouldShow = filter === "todos" || card.dataset.type === filter;
      card.style.display = shouldShow ? "block" : "none";
    });
  });
});

quoteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCar = button.dataset.car;
    carInterest.value = selectedCar;
    document.querySelector("#contacto").scrollIntoView({ behavior: "smooth" });
  });
});

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const selectedCar = carInterest.value;

    formMessage.textContent = `Gracias, ${name}. Recibimos tu solicitud para ${selectedCar}. Te contactaremos pronto.`;
    form.reset();
  });
}
