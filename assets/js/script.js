// Adiciona um listener que será executado quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento do hamburger (menu de navegação em tela pequena) pelo ID
    const hamburger = document.getElementById('hamburger');
    // Seleciona o elemento que contém os links de navegação
    const navLinks = document.querySelector('.nav-links');

    // Verifica se ambos os elementos foram encontrados
    if (hamburger && navLinks) {
        // Define o atributo 'aria-expanded' do hamburger como 'false' inicialmente
        hamburger.setAttribute('aria-expanded', 'false');
        
        // Adiciona um listener de clique ao hamburger
        hamburger.addEventListener('click', function() {
            // Alterna a classe 'active' do hamburger, que pode alterar seu estilo
            this.classList.toggle('active');
            // Alterna a classe 'active' dos links de navegação, mostrando ou escondendo o menu
            navLinks.classList.toggle('active');
            // Verifica se o hamburger está ativo e atualiza o atributo 'aria-expanded'
            const expanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', expanded);
        });

        // Fecha o menu quando um link é clicado, para melhorar a experiência do usuário em dispositivos móveis
        // Converte os links de navegação em um array para iterar sobre eles
        const navLinksArray = Array.from(navLinks.children);
        // Adiciona um listener de clique a cada link de navegação
        navLinksArray.forEach(link => {
            link.addEventListener('click', () => {
                // Remove a classe 'active' do hamburger
                hamburger.classList.remove('active');
                // Remove a classe 'active' dos links de navegação
                navLinks.classList.remove('active');
                // Atualiza o atributo 'aria-expanded' do hamburger para 'false'
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
