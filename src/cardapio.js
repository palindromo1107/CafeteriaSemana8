let itensCardapio = [
    { nome: "cafe", preco: "100", descricao: "ta caro" }
];

const addItemCardapioTable = (itemCardapio) => {
    let itemCardapioTbody = document.getElementById("itensCardapioTbody");

    let itemCardapioTr = `<tr>
        <td scope = "row">1</td>
        <td>${itemCardapio.nome}</td>
        <td>${itemCardapio.preco}</td>
        <td>${itemCardapio.descricao}</td>
    </tr>`;

    itemCardapioTbody.insertAdjacentHTML('beforeend', itemCardapioTr);
};

let itemCardapio = JSON.parse(localStorage.getItem('itemCardapio'));

for (let itemCardapio of itensCardapio) {
    addItemCardapioTable(itemCardapio);
};

const setFormValues = (nome = " ", descricao = " ", preco = " ") => {
    const myname = document.querySelector("nome");
    const mydecs = document.querySelector("descricao");
    const myprec = document.querySelector("preco");

    myname.value = nome;
    mydecs.value = descricao;
    myprec.value = preco;

};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("cadastrado");

    let cardapioForm = document.getElementById("itemCadastro");

    let cardapioFormData = new FormData(cardapioForm);

    let itemCardapio = Object.fromEntries(cardapioFormData);

    itensCardapio.push(itemCardapio);

    localStorage.setItem("itemCardapio", JSON.stringify(itensCardapio));

    cardapioForm.reset();
    setFormValues();

    //$('#cardapioModal').modal('toggle')

};

let itemCadastro = document.getElementById("itemCadastro");
itemCadastro.onsubmit = handleSubmit;

//localStorage.setItem()
//localStorage.getItem()
//localStorage.remopveItem()
//localStorage.clear()

//JSON.parse()
//JSON.stringfy()


//let nomeInput = document.getElementById("nome");
//let nome = nomeInput.value;

//let precoInput = document.getElementById("preco");
//let preco = precoInput.value;

//let descricaoInput = document.getElementById("descricao");
//let descricao = descricaoInput.value;