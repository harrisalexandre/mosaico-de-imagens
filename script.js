* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.carousel-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    flex-wrap: nowrap;
    transition: transform 0.5s ease;
    cursor: grab;
}

.carousel-row {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    width: 100vw;
}

.carousel-row img {
    width: 23vw;
    height: 35vh;
    object-fit: cover;
    filter: grayscale(100%) blur(2px); /* Imagens iniciais em preto e branco com blur */
    transition: filter 0.3s ease, transform 0.3s ease;
}

/* Imagem central (2,6,10) sem efeito */
.carousel-row img:nth-child(2),
.carousel-row img:nth-child(6),
.carousel-row img:nth-child(7) {
    filter: grayscale(0%) blur(0); /* Sem blur e em cores */
    transform: scale(1.1);
}

/* Distorção nas bordas */
.carousel-row img:nth-child(1),
.carousel-row img:nth-child(4),
.carousel-row img:nth-child(5),
.carousel-row img:nth-child(8),
.carousel-row img:nth-child(9),
.carousel-row img:nth-child(12) {
    filter: grayscale(100%) blur(2px); /* Imagens em preto e branco e com blur */
    transform: perspective(800px) rotateY(-10deg);
}

/* Ocultar a quarta coluna até o arraste */
.carousel-row img:nth-child(4),
.carousel-row img:nth-child(8),
.carousel-row img:nth-child(12) {
    display: none; /* Coluna 4 inicialmente oculta */
}

/* Responsividade para celulares */
@media only screen and (max-width: 720px) {
    .carousel-row img {
        width: 30vw;
        height: 45vh;
    }
}
