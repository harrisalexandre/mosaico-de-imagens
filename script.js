let carousel = document.querySelector('.carousel');
let startX, scrollLeft;

function startDrag(e) {
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = 'grabbing';
    carousel.style.userSelect = 'none';
}

function dragMove(e) {
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 3; // Ajuste a velocidade do arrasto (quanto maior, mais rápido)
    carousel.scrollLeft = scrollLeft - walk;
}

function endDrag() {
    carousel.style.cursor = 'grab';
    carousel.style.removeProperty('user-select');
}

// Eventos de arrastar (para mouse e toque)
carousel.addEventListener('mousedown', startDrag);
carousel.addEventListener('mousemove', dragMove);
carousel.addEventListener('mouseup', endDrag);

carousel.addEventListener('touchstart', startDrag);
carousel.addEventListener('touchmove', dragMove);
carousel.addEventListener('touchend', endDrag);
