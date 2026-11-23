const form = document.getElementById('form-numeros');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

const mensagemSuccess = document.querySelector('.mensagem_success');
const mensagemErro1 = document.querySelector('.mensagem_1_error');
const mensagemErro2 = document.querySelector('.mensagem_2_error');

function esconderMensagens() {
    mensagemSuccess.style.display = 'none';
    mensagemErro1.style.display = 'none';
    mensagemErro2.style.display = 'none';
}

function validaNumero(valorA, valorB){
	return valorA !== '' && valorB !== '';
}

form.addEventListener('submit', function(e){
	let formEValido = false;
	e.preventDefault();
    esconderMensagens();

	const mensagemSucesso = `Número 1: <b>${campoA.value}</b> e Número 2: <b>${campoB.value}</b> validados com sucesso!`;
    const mensagemErroPrincipal = `Número 1: <b>${campoA.value}</b> não pode ser menor que Número 2: <b>${campoB.value}</b>, envio não válido!`;

    formEValido = validaNumero(campoA.value, campoB.value);

	if (formEValido){
        if(campoA.value<campoB.value){
            mensagemSuccess.innerHTML = mensagemSucesso;
            mensagemSuccess.style.display = 'block';
        }
        else{
            mensagemErro2.innerHTML = mensagemErroPrincipal;
            mensagemErro2.style.display = 'block';
        }
	    /*Depois da mensagem apaga tudo no formulário*/
        campoA.value = '';
        campoB.value = '';
    }
	else{
		mensagemErro1.innerHTML = "Preencha ambos os campos com números válidos!";
        mensagemErro1.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    }
});

campoA.addEventListener('input', function () {
    esconderMensagens();
});

campoB.addEventListener('input', function () {
    esconderMensagens();
});
