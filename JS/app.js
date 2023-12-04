//Função para adicionar e remover igrediente ao hamburguer

function excluirProds(){
    var total = document.querySelector('.total-hamburguer').innerHTML;
    if(total >= 0){
        total = parseFloat(total);
        total = 3.99;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        document.querySelector('.bovina').innerHTML = "Adicionar +";
        document.querySelector('.Frango').innerHTML = "Adicionar +";
        document.querySelector('.Vegetal').innerHTML = "Adicionar +";
        document.querySelector('.Tomate').innerHTML = "Adicionar +";
        document.querySelector('.Alface').innerHTML = "Adicionar +";
        document.querySelector('.Cebola').innerHTML = "Adicionar +";
        document.querySelector('.Cheddar').innerHTML = "Adicionar +";
        document.querySelector('.Bacon').innerHTML = "Adicionar +";
        document.querySelector('.Especial').innerHTML = "Adicionar +";
        document.querySelector('.Barbecue').innerHTML = "Adicionar +";
        document.querySelector('.Maionese').innerHTML = "Adicionar +";
        const divHamburguer = document.querySelector('.hamburguer');
        divHamburguer.innerHTML = '';
    }else{}
}

function adicionarBovina(){
    const btnBovina = document.querySelector('.bovina').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnBovina == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.bovina').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 12.99;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
           '<div class="itens-selecionados">'
         + '<div><h2>Carne Bovina</h2></div>'
         + '<div><img src="IMG/carneBovina.png" alt="carneBovina"></div>'
         + '<div></input><h2>+R$12,99</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarFrango(){
    const btnFrango = document.querySelector('.Frango').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnFrango == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Frango').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 10.99;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Frango</h2></div>'
         + '<div><img src="IMG/carneDeFrango.png" alt="carneFrango"></div>'
         + '<div><h2>+R$10,99</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarVegetal(){
    const btnVegetal = document.querySelector('.Vegetal').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnVegetal == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Vegetal').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 16.90;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Vegetal</h2></div>'
         + '<div><img src="IMG/carneVegetal.png" alt="carneVegetal"></div>'
         + '<div><h2>+R$16,90</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarTomate(){
    const btnTomate = document.querySelector('.Tomate').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnTomate == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Tomate').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 1;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Tomate</h2></div>'
         + '<div><img src="IMG/tomate.png" alt="Tomate"></div>'
         + '<div><h2>+R$1,00</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarAlface(){
    const btnAlface = document.querySelector('.Alface').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnAlface == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Alface').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 0.30;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Alface</h2></div>'
         + '<div><img src="IMG/alface.png" alt="Alface"></div>'
         + '<div><h2>+R$0,30</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarCebola(){
    const btnCebola = document.querySelector('.Cebola').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnCebola == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Cebola').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 0.50;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Cebola</h2></div>'
         + '<div><img src="IMG/cebola.png" alt="Cebola"></div>'
         + '<div><h2>+R$0,50</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarCheddar(){
    const btnCheddar = document.querySelector('.Cheddar').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnCheddar == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Cheddar').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 1.20;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Cheddar</h2></div>'
         + '<div><img src="IMG/chedar.png" alt="Cheddar"></div>'
         + '<div><h2>+R$1,20</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarBacon(){
    const btnBacon = document.querySelector('.Bacon').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnBacon == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Bacon').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 5;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Bacon</h2></div>'
         + '<div><img src="IMG/bacon.png" alt="Bacon"></div>'
         + '<div><h2>+R$5,00</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarEspecial(){
    const btnEspecial = document.querySelector('.Especial').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnEspecial == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Especial').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 3.50;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Molho Especial</h2></div>'
         + '<div><img src="IMG/molhoEspecial.png" alt="Especial"></div>'
         + '<div><h2>+R$3,50</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarBarbecue(){
    const btnBarbecue = document.querySelector('.Barbecue').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnBarbecue == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Barbecue').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 2.30;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Barbecue</h2></div>'
         + '<div><img src="IMG/barbecue.png" alt="Barbecue"></div>'
         + '<div><h2>+R$2,30</h2></div>'
         + '</div>';     
    }
    else{}
}

function adicionarMaionese(){
    const btnMaionese = document.querySelector('.Maionese').innerHTML;
    const divHamburguer = document.querySelector('.hamburguer');

    if(btnMaionese == "Adicionar +"){
        var total = document.querySelector('.total-hamburguer').innerHTML;
        document.querySelector('.Maionese').innerHTML = "Já adicionado ✓";
        total = parseFloat(total);
        total = total + 2.0;
        document.querySelector('.total-hamburguer').innerHTML = total.toFixed(2);
        var valorHamburguer = document.querySelector('.hamburguer').innerHTML;
        divHamburguer.innerHTML = valorHamburguer +
       '<div class="itens-selecionados">'
         + '<div><h2>Maionese Temperada</h2></div>'
         + '<div><img src="IMG/maionese.png" alt="Maionese"></div>'
         + '<div><h2>+R$2,00</h2></div>'
         + '</div>';     
    }
    else{}
}

//Função para remover prtoduto da pagina de compras

function removerProd1(){
    const produto = document.querySelector('.prod1');
    produto.classList.add('remove');
}

function removerProd2(){
    const produto = document.querySelector('.prod2');
    produto.classList.add('remove');
}

function removerProd3(){
    const produto = document.querySelector('.prod3');
    produto.classList.add('remove');
}
