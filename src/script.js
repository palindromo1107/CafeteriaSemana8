import { preparacoesCard } from './dataset/preparacoes.js';

let getCartao = (item) => {
  return `<div class="col p-1">
          <div class="card">
            <img src="${item.src}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.titulo}</h5>
              <p class="card-text">${item.descricao}</p>
              <a href="#" class="btn btn-primary">${item.preco}</a>
            </div>
          </div>
        </div>`;
};

let setCartaoCol = (cartao) => {
  let cartoesDiv = document.getElementById('cartoes');
  cartoesDiv.insertAdjacentHTML('beforeend', cartao);
};

let createCartoes = () => {
  for (let item of preparacoesCard) {
    let cartao = getCartao(item);
    setCartaoCol(cartao);
  }
};

createCartoes();
