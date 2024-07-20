// Redefinindo para 0 o calculoTotal / Chamando função limpar para limpar ao carregar a página 
let calculoTotal;
limpar();

function adicionar() {
    // Recuperar nome dos produtos,valor dos produtos, quantidade dos produtos
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    // Calcular o preço, subtotal dos produtos
    let preco = quantidade * valorProduto

    //verificar se o produto selecionado é válido
    if (!produto) {
        alert("Por favor, selecione um produto.");
        return;
    }
    //verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    // Adicionando os produtos ao carrinho de forma ordenada e trocando texto da class
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
    
    // Calculando preço total
    calculoTotal = calculoTotal + preco
    
    // Atualizando valor total
    let total = document.getElementById('valor-total');
    total.innerHTML = `R$${calculoTotal}`
    
    // Limpando o campo de quantidade quando adicionar algo no carrinho
    document.getElementById('quantidade').value = '';

}

// Limpando o carrinho e o total ao clicar no botao limpar e ao carregar a página
function limpar() {
    calculoTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
};
