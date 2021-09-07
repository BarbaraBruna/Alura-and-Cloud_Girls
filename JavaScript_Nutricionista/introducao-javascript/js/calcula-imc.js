// titulo.addEventListener("click", mostraMensagem); //ou pode ser uma função anônima
// function mostraMensagem() {
// console.log("Opa, clicaram em mim");
//alert("Opa, precisa de algo?");
// criar uma função para calcular IMC e levar para o mundo JS

// propriedade textContent para pegar somente o texto sem  as tags do h1 acima por exemplo//
var titulo = document.querySelector(".titulo"); //vai alterar so os elementos q possuem a class titulo, .titulo é seletor CSS de classe//
titulo.textContent = "Aparecida Nutricionista"; // altera o valor de texto da tag h1//

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) { // trocar 5 array por paciente.lenght. O for é para Loop

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; //qero a var tdPeso com o atributo somente do texto

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}


        


// propriedade textContent para pegar somente o texto sem  as tags do h1 acima por exemplo//
	//console.log(titulo);  imprime com tags//
// console.log(titulo.textContent); // imprime so o texto sem tags//
//Vimos também como realizar a busca por algum elemento do HTML, no código JavaScript. Para isto, utilizamos a variável document, que contém todo o conteúdo HTML da página. Quando manipulamos o document, conseguimos manipular o que será exibido ao usuário.

// console.log(document.querySelector("h1")); // isso seria para imprimir no console o conteudo de texto com as tags h1//

// document or DOM(Document Object Model) é a representação da nossa página HTML para o navegador, que é utilizada pelo Javascript para manipular a página.//

// função QUERYSELECTOR ao utilizar na variável document para especificar que queremos trazer apenas uma parte do HTML//



