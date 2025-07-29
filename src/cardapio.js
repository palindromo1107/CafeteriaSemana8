const handleSubmit = (event) => {
    event.preventDefault();
    console.log("assa");

    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value;

    let precoInput = document.getElementById("preco");
    let preco = precoInput.value;

    let descricaoInput = document.getElementById("descricao");
    let descricao = descricaoInput.value;

    let itemCardapio = {
        nome: nome,
        preco: preco,
        descricao: descricao
    };

    itemCardapio.push(itemCardapio);

    localStorage.setItem("itemCardapio", JSON.stringify(itemCardapio));
};

let itemCadastro = document.getElementById("itemCadastro");
itemCadastro.onsubmit = handleSubmit;

//localStorage.setItem()
//localStorage.getItem()
//localStorage.remopveItem()
//localStorage.clear()

//JSON.parse()
//JSON.stringfy()
