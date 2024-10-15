// Seleção das imagens
const images = document.querySelectorAll('.mosaic img');

// Função para definir a imagem selecionada
images.forEach(image => {
    image.addEventListener('click', () => {
        // Remove a classe 'selected' de todas as imagens
        images.forEach(img => img.classList.remove('selected'));
        // Adiciona a classe 'selected' à imagem clicada
        image.classList.add('selected');
    });
});
