var botaoAdicionar = document.querySelector("#adicionar-paciente"); //botão paciente 
botaoAdicionar.addEventListener("click", function(event) { //event evento padrão 

    event.preventDefault(); // remove evento padrao

    var form = document.querySelector("#form-adiciona"); // pega form html
    paciente = obtemPaciente(form); // pega paciente do forme


    var erros = validaPaciente(paciente)

    if (erros.length > 0) {
      exibeMensagemDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes"); //pega tabela aonde vai add no html    
    tabela.appendChild(montaTr(paciente));

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML  = "";
    form.reset();
});


function obtemPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(calculaimc(paciente.peso, paciente.altura), "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {


    var erros = [];
    if(paciente.peso.length == 0) erros.push("Nome do paciente não pode ser em branco");        
    if (!validaPeso(paciente.peso)) erros.push("Peso inválido");        
    if (!validaAltura(paciente.altura)) erros.push("altura inválido");
    if(paciente.gordura.length == 0) erros.push("Nome do paciente não pode ser em branco");        
    if(paciente.peso.length == 0) erros.push("peso do paciente não pode ser em branco");        
    if(paciente.altura.length == 0) erros.push("altura do paciente não pode ser em branco");        
    
    return erros;

}

function exibeMensagemDeErro(erros){

    var ul = document.querySelector("#mensagens-erro");


    erros.forEach(function(erro) {
        var li  = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

