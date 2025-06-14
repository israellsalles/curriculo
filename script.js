// Interatividade simples

document.getElementById('surpriseButton').addEventListener('click', function() {
    alert('Gratidão por visitar meu currículo! Vamos juntos construir um mundo melhor com tecnologia e consciência 🌟');
});

// Efeito fade-in ao rolar
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeElements.forEach(el => {
    observer.observe(el);
});