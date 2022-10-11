function clienteInformacao(){
    let nome = localStorage.getItem('nomeCliente');
    let endereco = localStorage.getItem('enderecoCliente');

    document.getElementById("nomeCliente").innerHTML = nome;
    document.getElementById("enderecoCliente").innerHTML = endereco;
}

function pizzaPedido(){
    let tamanho = localStorage.getItem('pizzaTamanho');
    let sabores = localStorage.getItem('pizzaSabor');
    let adicional = localStorage.getItem('pizzaAdicional');
    let bebida = localStorage.getItem('pizzaBebida');
    let retirada = localStorage.getItem('retirada');
    let valorTotal = localStorage.getItem('valorTotal');

    document.getElementById('tamanho').innerHTML = tamanho;
    document.getElementById('sabores').innerHTML = sabores;
    document.getElementById('adicional').innerHTML = adicional;
    document.getElementById('bebida').innerHTML = bebida;
    document.getElementById('retirada').innerHTML = retirada;
    document.getElementById('valorTotal').innerHTML = valorTotal;
}