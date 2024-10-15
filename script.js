const grid = document.getElementById('imageGrid');
let images = [];
let totalImages = 9; // Começamos com 9 imagens no grid (pode aumentar conforme a quantidade de imagens)

async function loadImages() {
    const imagePaths = [];
    for (let i = 1; i <= totalImages; i++) {
        const imagePath = `images/image-${i}.jpg`;
        imagePaths.push(imagePath);
    }

    // Agora criamos os elementos de imagem
    for (let i = 0; i < imagePaths.length; i++) {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        imageContainer.innerHTML = `
            <img src="${imagePaths[i]}" alt="Image ${i + 1}">
            <div class="image-title">Image ${i + 1}</div>
        `;
        images.push(imageContainer);
    }

    grid.innerHTML = '';  // Limpa o grid
    grid.append(...images);  // Adiciona todas as imagens

    applyCenterImageBlur();
}

// Função para mover as imagens
function moveImages(direction) {
    const rows = 3;
    const cols = 3;
    const newImages = Array.from(grid.children);

    if (direction === 'up') {
        const firstRow = newImages.slice(0, cols);
        const remainingRows = newImages.slice(cols);
        grid.innerHTML = '';
        grid.append(...remainingRows, ...firstRow);
    } else if (direction === 'down') {
        const lastRow = newImages.slice(-cols);
        const remainingRows = newImages.slice(0, -cols);
        grid.innerHTML = '';
        grid.append(...lastRow, ...remainingRows);
    } else if (direction === 'left') {
        const temp = [];
        for (let i = 0; i < rows; i++) {
            temp.push(newImages[i * cols]);
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols - 1; j++) {
                newImages[i * cols + j] = newImages[i * cols + (j + 1)];
            }
        }

        for (let i = 0; i < rows; i++) {
            newImages[i * cols + (cols - 1)] = temp[i];
        }

        grid.innerHTML = '';
        grid.append(...newImages);
    } else if (direction === 'right') {
        const temp = [];
        for (let i = 0; i < rows; i++) {
            temp.push(newImages[i * cols + (cols - 1)]);
        }

        for (let i = 0; i < rows; i++) {
            for (let j = cols - 1; j > 0; j--) {
                newImages[i * cols + j] = newImages[i * cols + (j - 1)];
            }
        }

        for (let i = 0; i < rows; i++) {
            newImages[i * cols] = temp[i];
        }

        grid.innerHTML = '';
        grid.append(...newImages);
    }

    grid.style.transition = 'transform 2s ease';  // Aumenta o tempo da animação para suavizar o movimento
}

// Mapeamento das teclas
document.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 'ArrowUp':
            moveImages('up');
            break;
        case 'ArrowDown':
            moveImages('down');
            break;
        case 'ArrowLeft':
            moveImages('left');
            break;
        case 'ArrowRight':
            moveImages('right');
            break;
    }

    // Aplica o blur nas imagens fora do centro após o movimento
});

// Rolagem do mouse
grid.addEventListener('wheel', (e) => {
    const direction = e.deltaY > 0 ? 'down' : 'up';
    moveImages(direction);
    e.preventDefault();
});

// Inicializa as imagens
loadImages();
