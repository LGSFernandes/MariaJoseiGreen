document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.classList.add('particle');
        
        const icons = ['fa-leaf', 'fa-seedling', 'fa-tree'];
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        
        leaf.innerHTML = `<i class="fas ${randomIcon}"></i>`;
        document.body.appendChild(leaf);

        const size = Math.random() * 15 + 10;
        leaf.style.fontSize = `${size}px`;
        leaf.style.left = `${Math.random() * 100}vw`;
        
        const startPos = 100 + (Math.random() * 20); 
        leaf.style.top = `${startPos}vh`;
        
        const duration = Math.random() * 5 + 6;
        leaf.style.animationDuration = `${duration}s`;
        
        leaf.style.opacity = Math.random() * 0.5 + 0.2;

        const shades = ['#1b5e20', '#0a260c', '#2e7d32', '#000000'];
        leaf.style.color = shades[Math.floor(Math.random() * shades.length)];

        leaf.addEventListener('animationend', () => {
            leaf.remove();
        });
    }

    setInterval(createLeaf, 300);

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.96)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px)';
            }, 100);
        });
    });
});