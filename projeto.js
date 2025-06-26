// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', function () {
  // Ativa botão de modo escuro
  const button = document.getElementById('toggle-dark-mode');
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    button.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });

  // Animação simples para h3
  const h3s = document.querySelectorAll('h3');
  h3s.forEach(h3 => {
    h3.style.opacity = 0;
    h3.style.transform = 'translateY(20px)';
    setTimeout(() => {
      h3.style.transition = 'all 0.6s ease';
      h3.style.opacity = 1;
      h3.style.transform = 'translateY(0)';
    }, 300);
  });

  // Inicialização de carrossel (Bootstrap)
  $('.carousel').carousel();
});
