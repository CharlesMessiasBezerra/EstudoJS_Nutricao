var titulo = document.querySelector(".titulo"); //pega o titulo
titulo.textContent = "Aparecida Nutricionistaa"; // muda o nome do cabeçalho

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    var pesovalido = validaPeso(peso);
    var alturavalida = validaAltura(altura);

    if (peso < 0 || peso > 99) {
        tdIMC.textContent = "Peso inválido"
        pesovalido = false;
        paciente.classList.add("paciente-invalido"); // add propriedade css
    }

    if (altura <= 0 || altura > 3.00) {
        tdIMC.textContent = "altura inválida"
        alturavalida = false;
        paciente.classList.add("paciente-invalido"); // add propriedade css
    }

    if (pesovalido && alturavalida) {
        tdIMC.textContent = calculaimc(peso, altura);
    }
}


titulo.addEventListener("click", mostramensagem);

function mostramensagem() {
    alert("fui clicado!");
}


function calculaimc(peso, altura) {
    var imc = 0;
    imc = (peso / (altura * altura));
    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }

}

function validaAltura(altura) {

    if (altura >= 0 && altura < 2) {
        return true;
    } else {
        return false;
    }
}