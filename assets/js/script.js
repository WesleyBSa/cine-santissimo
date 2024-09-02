document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});
// Script para mostrar/esconder o botão e rolar para o topo
document.addEventListener('DOMContentLoaded', function () {
    var backToTopButton = document.getElementById('backToTop');

    // Função para mostrar ou esconder o botão
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Mostra o botão se rolar mais de 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Função para rolar para o topo
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Adiciona efeito de rolagem suave
        });
    });
});
