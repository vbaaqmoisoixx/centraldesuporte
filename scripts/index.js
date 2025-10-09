// Carousel
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".btn.prev");
const nextBtn = document.querySelector(".btn.next");
const slides = document.querySelectorAll(".carousel-slide");

let index = 0;

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

/* copiar */
      const botoes = document.querySelectorAll(".copyBtn");
const toast = document.getElementById('toast');

  function mostrarToast(mensagem) {
    toast.textContent = mensagem;
    toast.classList.add('show');

    // Esconde após 2,5s
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const texto = botao.dataset.text;
      navigator.clipboard.writeText(texto)
        .then(() => mostrarToast('Código copiado!'))
        .catch(err => console.error('Erro ao copiar:', err));
    });
  });
