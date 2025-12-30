
let totalGeral = 0;

function adicionar(){

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço, subtotal
    let preco = quantidade * valorUnitario;
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$${totalGeral}`;
    document.getElementById('quantidade').value = 0;

}

function limpar(){
    //Limpar carrinho carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML =`<section class="carrinho__produtos__produto">
    <span class="texto-azul"></span><span class="texto-azul"></span>
  </section>`;

    //atualizar o valor total
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ 0,00`
}
