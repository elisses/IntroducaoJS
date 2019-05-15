   //Incrementa

    var botoesIncrementa = document.querySelectorAll(".btn-incrementa");

    for(let botao of botoesIncrementa ){

        botao.addEventListener('click', incrementa);

        function incrementa()
        {
            var item = botao.closest('.item');
            var input = item.querySelector(".quantidade");
            input.value++;
            var preco = pegaPrecoItem(item);

            adicionaAoTotal(preco); 
        }

    }
    

//Decrementa
    var botoesDecrementa = document.querySelectorAll(".btn-decrementa");

    for(let botao of botoesDecrementa ){
        botao.addEventListener('click', decrementa);

        function decrementa()
        {
            var item = botao.closest('.item');
            var input = item.querySelector(".quantidade");
        
            if(input.value > 0){
        
            input.value--;
            var preco = pegaPrecoItem(item);
            adicionaAoTotal(-preco); 
        
            }else{
                console.log(input.value);
            }
        }
    }
    
var formPedido = document.forms.pedido;
formPedido.addEventListener('submit',function (event){
        var contador = 0;
        var inputs = formPedido.querySelectorAll("input.quantidade");

        for(let input of inputs){
            if(input.value > 0){
                contador++;
            }
        }

        if(contador === 0){
            alert("Deve ter pelo menos uma pizza no pedido!!");
            event.preventDefault();
        }
});

//Pegar o preço

function pegaPrecoItem(item){
    var preco = item.querySelector(".preco-item");
    return Number(preco.textContent);
}

//Adicionar o total

function adicionaAoTotal(preco){
    var total = document.querySelector("#total");
    total.textContent = preco + Number(total.textContent);
}



