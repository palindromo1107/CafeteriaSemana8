import (preparacaoCard)
//'./src/cardapio.js';

let itens = [{
        src: './assets/image/Download (1).jpeg',
        titulo: 'Cafe pilão',
        descricao: '500g',
        preco: '1 rim',
    },
    {
        src: './assets/image/download.jpeg',
        titulo: 'café tres corações',
        descricao: '250g',
        preco: '100 Milhões',
    },
    {
        src: './assets/image/images.jpeg',
        titulo: 'capsulas café expresso',
        descricao: '10 capsulas de 8g',
        preco: '10 R$',
    }
]
let getCartao = (item) => {
    return `<div class = "card"
    style = "width: 18rem;" >
        <img src = "${item.src}"
    class = "card-img-top"
    alt = "..." >
        <div class = "card-body">
        <h5 class = "card-title" >${item.titulo}</h5> 
        <p class = "card-text">${item.descricao}</p>  
        <a href = "#" class = "btn btn-primary">${item.preco}</a>
    </div>
        </div>`;
};
let setCartaoCol = (cartao) => {
    let cartoesDiv = document.getElementById('cartoes');
    cartoesDiv.insertAdjacentHTML('beforeend', cartao);
};
let createCartoes = () => {
    for (let item of itens) {
        // html completo referente a cada card com o conteudo
        let cartao = getCartao(item);
        // Inserir cartao dentro do código html na div com id cartoes.
        setCartaoCol(cartao);
    }
};
createCartoes();