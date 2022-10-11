let valorTotal = 0;

function cliente(){
    let nome = document.getElementById("name").value;
    let endereco = document.getElementById("endereco").value;

    localStorage.setItem('nomeCliente', nome);
    localStorage.setItem('enderecoCliente', endereco);
}

function pizzaTamanho(){
    let tamanho1 = document.getElementById("pequena");
    let tamanho2 = document.getElementById("media");
    let tamanho3 = document.getElementById("grande");
    let escolhaTamanho = [];

    if(tamanho1.checked){
        escolhaTamanho.push(tamanho1.value);
        valorTotal = valorTotal + 35;
    }else if(tamanho2.checked){
        escolhaTamanho.push(tamanho2.value);
        valorTotal = valorTotal + 45;
    }else if(tamanho3.checked){
        escolhaTamanho.push(tamanho3.value);
        valorTotal = valorTotal + 55;
    }


    localStorage.setItem('pizzaTamanho', escolhaTamanho);
}

function pizzaSabor(){
    let sabor1 = document.getElementById("frango");
    let sabor2 = document.getElementById("calabresa");
    let sabor3 = document.getElementById("milho");
    let sabor4 = document.getElementById("bacon");
    let sabor5 = document.getElementById("queijo");
    let sabor6 = document.getElementById("presunto");
    let escolhaSabor = [];

    if(sabor1.checked){
        escolhaSabor.push(sabor1.value);
    }

    if(sabor2.checked){
        escolhaSabor.push(sabor2.value);
    }

    if(sabor3.checked){
        escolhaSabor.push(sabor3.value);
    }

    if(sabor4.checked){
        escolhaSabor.push(sabor4.value);
    }

    if(sabor5.checked){
        escolhaSabor.push(sabor6.value);
    }

    if(sabor6.checked){
        escolhaSabor.push(sabor6.value);
    }

    localStorage.setItem('pizzaSabor', escolhaSabor);
}

function pizzaAdicionais(){
    let adicional1 = document.getElementById("nenhum");
    let adicional2 = document.getElementById("borda");
    let adicional3 = document.getElementById("milho");
    let adicional4 = document.getElementById("ervilha");
    let adicional5 = document.getElementById("cebola");
    let escolhaAdicional = [];

    if(adicional1.checked){
        escolhaAdicional.push(adicional1.value);
    }

    if(adicional2.checked){
        escolhaAdicional.push(adicional2.value);
        valorTotal = valorTotal + 5;
    }

    if(adicional3.checked){
        escolhaAdicional.push(adicional3.value);
        valorTotal = valorTotal + 5;
    }

    if(adicional4.checked){
        escolhaAdicional.push(adicional4.value);
        valorTotal = valorTotal + 5;
    }

    if(adicional5.checked){
        escolhaAdicional.push(adicional5.value);
        valorTotal = valorTotal + 5;
    }
    localStorage.setItem('pizzaAdicional', escolhaAdicional);
}

function pizzaBebidas(){
    let bebida1 = document.getElementById("nenhum");
    let bebida2 = document.getElementById("coca");
    let bebida3 = document.getElementById("pepsi");
    let bebida4 = document.getElementById("guarana");
    let bebida5 = document.getElementById("energetico");
    let escolhaBebida = [];


    if(bebida1.checked){
        escolhaBebida.push(bebida1.value);
    }

    if(bebida2.checked){
        escolhaBebida.push(bebida2.value);
        valorTotal = valorTotal + 10;
    }

    if(bebida3.checked){
        escolhaBebida.push(bebida3.value);
        valorTotal = valorTotal + 10;
    }

    if(bebida4.checked){
        escolhaBebida.push(bebida4.value);
        valorTotal = valorTotal + 10;
    }

    if(bebida5.checked){
        escolhaBebida.push(bebida5.value);
        valorTotal = valorTotal + 10;
    }

    localStorage.setItem('pizzaBebida', escolhaBebida);
}

function entrega(){
    let retirada1 = document.getElementById("balcao");
    let retirada2 = document.getElementById("entrega");
    let escolhaRetirada = [];

    if(retirada1.checked){
        escolhaRetirada.push(retirada1.value);
    }else{
        escolhaRetirada.push(retirada2.value);
        valorTotal = valorTotal + 10;
    }
    localStorage.setItem('retirada', escolhaRetirada);
    localStorage.setItem('valorTotal', valorTotal);
}