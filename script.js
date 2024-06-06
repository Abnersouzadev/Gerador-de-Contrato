

//valor do veiculo menos a entrada

function subtrairValorFinanciado() {
    
    let valorFinanciado = document.getElementById('Valor-Financiado')
    let valorVeiculo = document.getElementById('Valor-do-veiculo')
    let entrada = document.getElementById('Entrada')

    
    var valor1 = parseFloat(valorVeiculo.value);
    var valor2 = parseFloat(entrada.value);
    
   
    if (!isNaN(valor1) && !isNaN(valor2)) {
        
        var resultado = valor1 - valor2;
        valorFinanciado.value = resultado.toFixed(2);
    } else {
        
        valorFinanciado.value = "Por favor, insira números válidos em todos os campos";
    }
}


//parcelas restantes : quantidade de parcela - parcelas pagas

function subtrairParcelasRestantes() {
    
    let parcelasRestantes = document.getElementById('parcelas-restantes')
    let quantidadeParcela = document.getElementById('quantidade-de-parcelas')
    let parcelasPagas = document.getElementById('parcelas-pagas')

    
    var valor1 = parseFloat(quantidadeParcela.value);
    var valor2 = parseFloat(parcelasPagas.value);
    
    
    if (!isNaN(valor1) && !isNaN(valor2)) {
        
        var resultado = valor1 - valor2;
        parcelasRestantes.value = resultado;
    } else {
        
        parcelasRestantes.value = "Por favor, insira números válidos em todos os campos";
    }
}

//valor total : quantidade de parcelas restantes X valor atual da parcela

function multiplicarValorTotal() {
    
    let valorTotal = document.getElementById('valor-total')
    let quantidadeParcela = document.getElementById("quantidade-de-parcelas")
    let valorAtualParcela = document.getElementById("Valor-atual-parcela")

    
    var valor2 = parseFloat(quantidadeParcela.value);
    var valor1 = parseFloat(valorAtualParcela.value);
    
    
    if (!isNaN(valor1) && !isNaN(valor2)) {
        
        var resultado = valor1 * valor2;
        valorTotal.value = resultado.toFixed(2);
    } else {
        
        valorTotal.value = "Por favor, insira números válidos em todos os campos";
    }
}



function subtrairValorJuros() {
    
    let valorJuros = document.getElementById('valor-do-juros')
    let valorFinanciado = document.getElementById('Valor-Financiado')
    let valorTotal = document.getElementById('valor-total')

    
    var valor1 = parseFloat(valorFinanciado.value);
    var valor2 = parseFloat(valorTotal.value);
    
    
    if (!isNaN(valor1) && !isNaN(valor2)) {
        
        var resultado = valor2 - valor1;
        valorJuros.value = resultado.toFixed(2);
    } else {
        
        valorJuros.value = "Por favor, insira números válidos em todos os campos";
    }
}



function multiplicarJurosAbusivos() {
    
    let jurosAbusivos = document.getElementById('juros-abusivos')
    let valorJuros = document.getElementById('valor-do-juros')

    
    var valor1 = parseFloat(valorJuros.value);
    
    
    if (!isNaN(valor1)) {
        
        var resultado = valor1 / 1.5;
        jurosAbusivos.value = resultado.toFixed(2);
    } else {
        
        valorJuros.value = "Por favor, insira números válidos em todos os campos";
    }
}



function subtrairJurosPermitidos() {
    
    let jurosPermitidos = document.getElementById('juros-permitidos')
    let jurosAbusivos = document.getElementById('juros-abusivos')
    let valorJuros = document.getElementById('valor-do-juros')

    
    var valor1 = parseFloat(valorJuros.value);
    var valor2 = parseFloat(jurosAbusivos.value);
    
    
    if (!isNaN(valor1) && !isNaN(valor2)) {
        
        var resultado = valor1 - valor2;
        jurosPermitidos.value = resultado.toFixed(2);
    } else {
        
        jurosPermitidos.value = "Por favor, insira números válidos em todos os campos";
    }
}



function dividirJurosPorParcela() {
    
    let jurosPorParcela = document.getElementById('juros-por-parcela')
    let jurosAbusivos = document.getElementById('juros-abusivos')
    let quantidadeParcela = document.getElementById('quantidade-de-parcelas')

    
    var valor1 = parseFloat(jurosAbusivos.value);
    var valor2 = parseFloat(quantidadeParcela.value);
    
    
    if (!isNaN(valor1) && !isNaN(valor2)) {
       
        var resultado = valor1 / valor2;
        jurosPorParcela.value = resultado.toFixed(2);
    } else {
        
        jurosPorParcela.value = "Por favor, insira números válidos em todos os campos";
    }
}



function subtrairParcelaCorrigida() {
    
    let parcelaCorrigida = document.getElementById('parcela-corrigida')
    let valorAtualParcela = document.getElementById('Valor-atual-parcela')
    let jurosPorParcela = document.getElementById('juros-por-parcela')

    
    var valor1 = parseFloat(valorAtualParcela.value);
    var valor2 = parseFloat(jurosPorParcela.value);
    
    
    if (!isNaN(valor1) && !isNaN(valor2)) {
        
        var resultado = valor1 - valor2;
        parcelaCorrigida.value = resultado.toFixed(2);
    } else {
        
        parcelaCorrigida.value = "Por favor, insira números válidos em todos os campos";
    }
}



function multiplicarValorReenbolso() {
    
    let valorReenbolso = document.getElementById('valor-reenbolso')
    let jurosPorParcela = document.getElementById('juros-por-parcela')
    let parcelasPagas = document.getElementById('parcelas-pagas')

    
    var valor1 = parseFloat(jurosPorParcela.value);
    var valor2 = parseFloat(parcelasPagas.value);
    
    
    if (!isNaN(valor1) && !isNaN(valor2)) {
        
        var resultado = valor1 * valor2;
        valorReenbolso.value = resultado.toFixed(2);
    } else {
        
        valorReenbolso.value = "Por favor, insira números válidos em todos os campos";
    }
}



function multiplicarValorEconomia() {
   
    let valorEconomia = document.getElementById('valor-da-economia')
    let jurosPorParcela = document.getElementById('juros-por-parcela')
    let parcelasRestantes = document.getElementById('parcelas-restantes')

    
    var valor1 = parseFloat(jurosPorParcela.value);
    var valor2 = parseFloat(parcelasRestantes.value);
    
    
    if (!isNaN(valor1) && !isNaN(valor2)) {
        
        var resultado = valor1 * valor2;
        valorEconomia.value = resultado.toFixed(2);
    } else {
        
        valorEconomia.value = "Por favor, insira números válidos em todos os campos";
    }
}


function chamarFuncoes() {
    subtrairValorFinanciado();
    setTimeout(subtrairParcelasRestantes, 1000); 
    setTimeout(multiplicarValorTotal, 1100); 
    setTimeout(subtrairValorJuros, 1200);
    setTimeout(multiplicarJurosAbusivos, 1300);
    setTimeout(subtrairJurosPermitidos, 1400);
    setTimeout(dividirJurosPorParcela, 1500);
    setTimeout(subtrairParcelaCorrigida, 1600);
    setTimeout(multiplicarValorReenbolso, 1700);
    setTimeout(multiplicarValorEconomia, 1800);
  }

  function openModal() {
    document.getElementById("myModal").style.display = "block";
    

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var credor = document.getElementById("Financeira").value;
    let tipoContrato = document.getElementById("Solicitação").value;
    let parcelas = document.getElementById("quantidade-de-parcelas").value;
    let parcelasPagas = document.getElementById("parcelas-pagas").value;
    
    let valorCadaParcela = document.getElementById("Valor-atual-parcela").value;
    let valorParcelaFormatado = formatarNumero(valorCadaParcela);

    let totalFinanciado = document.getElementById("Valor-Financiado").value;
    let totalFinanciadoFormatado = formatarNumero(totalFinanciado);

    let totalAberto = document.getElementById("valor-total").value;
    let totalAbertoformatado = formatarNumero(totalAberto);

    let jurosAplicado = document.getElementById("valor-do-juros").value;
    jurosAplicadoFormatado = formatarNumero(jurosAplicado);


    let parcelaRecalculada = document.getElementById("parcela-corrigida").value;
    let parcelaRecalculadaFormatada = formatarNumero(parcelaRecalculada);

    let jurosPorParcela = document.getElementById("juros-por-parcela").value;
    let jurosParcelaFormatado = formatarNumero(jurosPorParcela);

    let reenbolso = document.getElementById("valor-reenbolso").value;
    let reenbolsoFormatado = formatarNumero(reenbolso);

    let jurosAbusivos = document.getElementById("juros-abusivos").value;
    let jurosAbusivosFormatado = formatarNumero(jurosAbusivos);


    let cpf = document.getElementById("CPF").value;


    let rowCredor = document.getElementById("line-credor");
    let rowContrato = document.getElementById("line-contrato");
    let rowParcelas = document.getElementById("line-parcelas");
    let rowParcelasPagas = document.getElementById("line-parcelas-pagas");
    let rowValorParcela = document.getElementById("line-valor-parcela");
    let rowTotalFinanciado = document.getElementById("line-total-financiado");
    let rowTotalAberto= document.getElementById("line-total-aberto");
    let rowJurosAplicado= document.getElementById("line-juros-aplicado");
    let rowParcelaRecalculada= document.getElementById("line-parcela-recalculada");
    let rowJurosParcela= document.getElementById("line-juros-parcela");
    let rowReenbolso = document.getElementById("line-reenbolso");
    let rowJurosAbusivos= document.getElementById("line-juros-abusivos");
    let rowNome= document.getElementById("line-nome");
    let rowEmail= document.getElementById("line-email");
    let rowCpf= document.getElementById("line-cpf");

    
    let cellCredor = rowCredor.insertCell(1)
    cellCredor.innerHTML = credor;

    let cellContrato = rowContrato.insertCell(1)
    cellContrato.innerHTML = tipoContrato;

    let cellParcelas = rowParcelas.insertCell(1)
    cellParcelas.innerHTML = parcelas;

    let cellParcelasPagas = rowParcelasPagas.insertCell(1)
    cellParcelasPagas.innerHTML = parcelasPagas;

    let cellValorParcela = rowValorParcela.insertCell(1)
    cellValorParcela.innerHTML = 'R$' + valorParcelaFormatado;

    let cellTotalFinanciado = rowTotalFinanciado.insertCell(1)
    cellTotalFinanciado.innerHTML = 'R$' + totalFinanciadoFormatado;

    let cellTotalAberto = rowTotalAberto.insertCell(1)
    cellTotalAberto.innerHTML = 'R$' + totalAbertoformatado;

    let cellJurosAplicado = rowJurosAplicado.insertCell(1)
    cellJurosAplicado.innerHTML = 'R$' + jurosAplicadoFormatado;

    let cellParcelaRecalculada = rowParcelaRecalculada.insertCell(1)
    cellParcelaRecalculada.innerHTML = 'R$' + parcelaRecalculadaFormatada;

    let cellJurosParcela = rowJurosParcela.insertCell(1)
    cellJurosParcela.innerHTML = 'R$' + jurosParcelaFormatado;

    let cellReenbolso = rowReenbolso.insertCell(1)
    cellReenbolso.innerHTML ='R$' + reenbolsoFormatado;

    let cellJurosAbusivos = rowJurosAbusivos.insertCell(1)
    cellJurosAbusivos.innerHTML = 'R$' + jurosAbusivosFormatado;

    let cellNome = rowNome.insertCell(1)
    cellNome.innerHTML = nome;

    let cellEmail = rowEmail.insertCell(1)
    cellEmail.innerHTML = email;

    let cellCpf = rowCpf.insertCell(1)
    cellCpf.innerHTML = cpf;

  }

  function preventDefault(event){
    event.preventDefault();
  }

  function formatarNumero(numero) {
    // Separar a parte inteira da parte decimal, se houver
    var partes = numero.toString().split(".");
    var parteInteira = partes[0];
    var parteDecimal = partes.length > 1 ? "," + partes[1] : "";

    // Adicionar ponto a cada três algarismos na parte inteira
    parteInteira = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Retornar o número formatado
    return parteInteira + parteDecimal;
}

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    
    let rowCredor = document.getElementById("line-credor");
    let rowContrato = document.getElementById("line-contrato");
    let rowParcelas = document.getElementById("line-parcelas");
    let rowParcelasPagas = document.getElementById("line-parcelas-pagas");
    let rowValorParcela = document.getElementById("line-valor-parcela");
    let rowTotalFinanciado = document.getElementById("line-total-financiado");
    let rowTotalAberto= document.getElementById("line-total-aberto");
    let rowJurosAplicado= document.getElementById("line-juros-aplicado");
    let rowParcelaRecalculada= document.getElementById("line-parcela-recalculada");
    let rowJurosParcela= document.getElementById("line-juros-parcela");
    let rowReenbolso = document.getElementById("line-reenbolso");
    let rowJurosAbusivos= document.getElementById("line-juros-abusivos");
    let rowNome= document.getElementById("line-nome");
    let rowEmail= document.getElementById("line-email");
    let rowCpf= document.getElementById("line-cpf");
    
    rowCredor.deleteCell(1);
    rowContrato.deleteCell(1);
    rowParcelas.deleteCell(1)
    rowParcelasPagas.deleteCell(1);
    rowValorParcela.deleteCell(1);
    rowTotalFinanciado.deleteCell(1)
    rowTotalAberto.deleteCell(1);
    rowJurosAplicado.deleteCell(1);
    rowParcelaRecalculada.deleteCell(1);
    rowJurosParcela.deleteCell(1);
    rowReenbolso.deleteCell(1);
    rowJurosAbusivos.deleteCell(1)
    rowNome.deleteCell(1);
    rowEmail.deleteCell(1);
    rowCpf.deleteCell(1)
    
  }
  

  function abrirContrato(){
    

    let nome = document.getElementById("nome").value;
    localStorage.setItem("nome", nome);
    
    let dataNascimento = document.getElementById("data-nascimento").value;
    let dataNascimentoFormatada = formatarData(dataNascimento);
    localStorage.setItem("data-nascimento", dataNascimentoFormatada);
    
    let profissao = document.getElementById("profissao").value;
    localStorage.setItem("profissao", profissao);
    
    let cpf = document.getElementById("CPF").value;
    localStorage.setItem("CPF", cpf);
    
    let rg = document.getElementById("rg").value;
    localStorage.setItem("rg", rg);
    
    let estadoCivil = document.getElementById("Estado-civil").value;
    localStorage.setItem("Estado-civil", estadoCivil);
    
    let email = document.getElementById("email").value;
    localStorage.setItem("email", email);
    
    let telefone = document.getElementById("telefone").value;
    localStorage.setItem("telefone", telefone);
    
    let endereço = document.getElementById("endereço").value;
    localStorage.setItem("endereço", endereço);
    
    let cep = document.getElementById("CEP").value;
    localStorage.setItem("CEP", cep);

    let banco = document.getElementById("Financeira").value;
    localStorage.setItem("Financeira", banco);

    let veiculoImovel = document.getElementById("Solicitação").value;
    localStorage.setItem("veiculo-imovel", veiculoImovel);

    let financiamento = document.getElementById("Valor-Financiado").value;
    localStorage.setItem("Valor-Financiado", 'R$' + financiamento);

    let valorParcela = document.getElementById("Valor-atual-parcela").value;
    localStorage.setItem("valor-parcela", 'R$' + valorParcela);
    
    let parcelasPagas = document.getElementById("parcelas-pagas").value;
    localStorage.setItem("parcelas-pagas", parcelasPagas);

    let parcelasAtrasadas = document.getElementById("Parcelas-em-atraso").value;
    localStorage.setItem("parcelas-atrasadas", parcelasAtrasadas);

    let valorAssessoria = document.getElementById("valor-assessoria").value;
    localStorage.setItem("valor-assessoria", valorAssessoria);

    let formaPagamento = document.getElementById("forma-pagamento").value;
    localStorage.setItem("forma-pagamento", formaPagamento);

    let dataContrato = document.getElementById("input-date").value;
    localStorage.setItem("input-date", dataContrato);


    let url = 'contrato.html';

    window.open(url, '_blank')
 
    
  }

  function formatarData(data) {
    
    var partes = data.split('-');
    var dataFormatada = partes[2] + '/' + partes[1] + '/' + partes[0];
    return dataFormatada;
  }


  function gerarPDF() {
    const botao = document.querySelector('button');
    const botaoAntigoDisplay = botao.style.display;
    botao.style.display = 'none'; // Oculta temporariamente o botão para não aparecer no PDF

    const elementoPagina = document.body;

    html2pdf(elementoPagina, {
        margin:       20,
        filename:     'contrato.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 3, letterRendering: true, }
    }).then(() => {
        botao.style.display = botaoAntigoDisplay; 
    });
}

window.onload = function() {
    var nome = localStorage.getItem("nome");
    let dataNascimento = localStorage.getItem("data-nascimento");
    let profissao = localStorage.getItem("profissao");
    let cpf = localStorage.getItem("CPF");
    let rg = localStorage.getItem("rg");
    let estadoCivil = localStorage.getItem("Estado-civil");
    let email = localStorage.getItem("email");
    let telefone = localStorage.getItem("telefone");
    let endereço = localStorage.getItem("endereço");
    let cep = localStorage.getItem("CEP");
    let banco = localStorage.getItem("Financeira");
    let veiculoImovel = localStorage.getItem("veiculo-imovel");
    let financiamento = localStorage.getItem("Valor-Financiado");
    let financiamentoFormatado = formatarNumero(financiamento);

    let valorParcela = localStorage.getItem("valor-parcela");
    let valorParcelaFormatado = formatarNumero(valorParcela);

    let parcelasPagas = localStorage.getItem("parcelas-pagas");
    let parcelasAtrasadas = localStorage.getItem("parcelas-atrasadas");
    let valorAssessoria = localStorage.getItem("valor-assessoria");
    let valorAssessoriaFormatado = formatarNumero(valorAssessoria);

    let formaPagamento = localStorage.getItem("forma-pagamento");
    let dataContrato = localStorage.getItem("input-date");
    let contratante = localStorage.getItem("nome")

    if (nome) {
        document.getElementById("Nome-contrato").value = nome;
    } 
    if(dataNascimento){
        document.getElementById("data-nascimento-contrato").value = dataNascimento;
    }
    if(profissao){
        document.getElementById("profissao-contrato").value = profissao;
    }
    if(cpf){
        document.getElementById("CPF-contrato").value = cpf;
    }
    if(rg){
        document.getElementById("RG-contrato").value = rg;
    }
    if(estadoCivil){
        document.getElementById("estado-civil-contrato").value = estadoCivil;
    }
    if(email){
        document.getElementById("email-contrato").value = email;
    }
    if(telefone){
        document.getElementById("telefone-contrato").value = telefone;
    }
    if(endereço){
        document.getElementById("endereço-contrato").value = endereço;
    }
    if(cep){
        document.getElementById("cep-contrato").value = cep;
    }
    if(banco){
        document.getElementById("banco-rersponsavel").value = banco;
    }
    if(veiculoImovel){
        document.getElementById("veiculo-contrato").value = veiculoImovel;
    }
    if(financiamentoFormatado){
        document.getElementById("financiamento-contrato").value = financiamentoFormatado;
    }
    if(valorParcelaFormatado){
        document.getElementById("Valor-parcela-contrato").value = valorParcelaFormatado;
    }
    if(parcelasPagas){
        document.getElementById("parcelas-pagas-contrato").value = parcelasPagas;
    }
    if(parcelasAtrasadas){
        document.getElementById("parcelas-atrasadas-contrato").value = parcelasAtrasadas;
    }
    if(valorAssessoriaFormatado){
        document.getElementById("valor-assessoria-contrato").value = valorAssessoriaFormatado;
    }
    if(formaPagamento){
        document.getElementById("forma-pagamento-contrato").value = formaPagamento;
    }
    if(dataContrato){
        document.getElementById("input-date-contract").value = dataContrato;
    }
    if(contratante){
        document.getElementById("contratante").value = contratante;
    }

};



document.addEventListener("DOMContentLoaded", function() {
    var savedData = localStorage.getItem("notepadData");
    if (savedData) {
        document.getElementById("notepad").value = savedData;
    }
});

// Salvar dados quando o usuário sair da página
window.addEventListener("beforeunload", function() {
    var data = document.getElementById("notepad").value;
    localStorage.setItem("notepadData", data);
});