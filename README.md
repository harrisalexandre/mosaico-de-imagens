# Mosaico Interativo com Efeito de Carrossel e Distorção

Este projeto consiste em um **mosaico de imagens interativo**, com um efeito de carrossel de três linhas, onde as imagens distorcidas nas bordas criam a ilusão de estarem sobre uma esfera. As imagens ficam em preto e branco até serem selecionadas, quando ganham cor e um leve efeito de zoom. O carrossel permite que as imagens se movam como um todo, proporcionando uma experiência fluida de navegação.

## Teste através do link
Link: https://harrisalexandre.github.io/mosaico-de-imagens

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura do conteúdo.
- **CSS3**: Para estilização, animações e efeitos de transição.
- **JavaScript**: Para interação (efeito de seleção de imagem).
- **Sass (ou CSS puro)**: Utilizado para estilização avançada e animações.

## Funcionalidades

1. **Carrossel de Imagens**:
   - As imagens são organizadas em 3 linhas.
   - As imagens nas extremidades sofrem distorção, criando uma ilusão de profundidade, como se estivessem sobre uma esfera.
   - As imagens do centro giram um pouco mais rápido, aumentando a sensação de movimento.

2. **Seleção de Imagem**:
   - Ao clicar em uma imagem, ela se destaca com um efeito de zoom e revela suas cores.
   - As demais imagens continuam em preto e branco com um leve efeito de desfoque (blur).

3. **Interatividade**:
   - O carrossel pode ser movido horizontalmente com o mouse, revelando diferentes imagens.
   - O efeito de distorção é aplicado de acordo com a posição da imagem no carrossel (bordas mais distorcidas, centro sem distorção).

4. **Responsividade**:
   - O layout é responsivo e se ajusta para diferentes tamanhos de tela, incluindo dispositivos móveis.
   - As imagens e o carrossel adaptam-se a telas de tamanhos variados.

## Como Usar

1. **Estrutura de Arquivos**:
   - `index.html`: O arquivo HTML que contém a estrutura do projeto.
   - `style.css`: Arquivo CSS com a estilização do carrossel e os efeitos de distorção.
   - `script.js`: JavaScript que controla a interação de seleção e movimento do carrossel.
   - **Pasta `images/`**: Contém as imagens (nomes como `image-1.jpg`, `image-2.jpg`, etc.).

2. **Instruções**:
   1. **Clone o repositório** ou baixe os arquivos.
   2. Abra o arquivo `index.html` no seu navegador.
   3. Use o mouse para **navegar** pelo carrossel de imagens.
   4. **Clique nas imagens** para vê-las em cores e com o efeito de zoom.

## Estrutura de Diretórios
 ```bash
/mosaic-project
    ├── index.html
    ├── style.css
    ├── script.js
    └── /images
        ├── image-1.jpg
        ├── image-2.jpg
        ├── image-3.jpg
        └── ... (mais imagens)
  ```


## Personalização

1. **Imagens**: Substitua as imagens na pasta `images/` por suas próprias imagens. Certifique-se de nomeá-las de forma sequencial (por exemplo, `image-1.jpg`, `image-2.jpg`, etc.).
2. **Tamanhos**: Ajuste as dimensões do carrossel no arquivo `style.css` para personalizar o tamanho e a posição das imagens, dependendo das necessidades do seu design.
3. **Efeitos**: Modifique os valores de distorção e de zoom diretamente no arquivo `style.css` para aumentar ou diminuir os efeitos visuais.

## Contribuição

1. Faça um fork deste repositório.
2. Crie uma nova branch para suas mudanças (`git checkout -b feature-name`).
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature-name`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
