document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    // Troca de Tema
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Gerador de Folhas Escuras (Partículas)
    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.classList.add('particle');
        
        // Ícones variados de folhas e natureza
        const icons = ['fa-leaf', 'fa-seedling', 'fa-tree'];
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        
        leaf.innerHTML = `<i class="fas ${randomIcon}"></i>`;
        document.body.appendChild(leaf);

        // Tamanho aleatório
        const size = Math.random() * 12 + 10;
        leaf.style.fontSize = `${size}px`;
        
        // Posição inicial
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.top = `${Math.random() * 100}vh`;
        
        // Velocidade e visibilidade (Verde Escuro)
        const duration = Math.random() * 4 + 5;
        leaf.style.animationDuration = `${duration}s`;
        
        // Garantindo que as folhas fiquem mais visíveis (opacidade controlada no CSS)
        // mas as cores aqui podem variar entre tons de verde escuro
        const shades = ['#1b5e20', '#2e7d32', '#004d40'];
        leaf.style.color = shades[Math.floor(Math.random() * shades.length)];

        // Remove do DOM após a animação
        leaf.addEventListener('animationend', () => {
            leaf.remove();
        });
    }

    // Inicia a chuva de folhas
    setInterval(createLeaf, 700);

    // Efeito de feedback visual nos botões ao clicar
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px)';
            }, 100);
        });
    });
});