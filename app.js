    
    var input = document.getElementById("quantidade");

    var botaoIncrementa = document.querySelector("#btn-incrementa");
    botaoIncrementa.addEventListener('click', incrementa);

    var botaoDecrementa = document.querySelector("#btn-decrementa");
    botaoDecrementa.addEventListener('click', decrementa);


function incrementa()
{
    input.value++;
    var item = botaoIncrementa.closest('.item');
    var preco = pegaPrecoItem(item);

    adicionaAoTotal(preco); 

}

function pegaPrecoItem(item){
    var preco = item.querySelector(".preco-item");
    return Number(preco.textContent);
}

function adicionaAoTotal(preco){
    var total = document.querySelector("#total");
    total.textContent = preco + Number(total.textContent);
}

function decrementa()
{
    input.value--;
}

