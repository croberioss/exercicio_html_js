const form = document.getElementById('form-deposito')
const primeiroValor = document.getElementById('first-number')
const segundoValor = document.getElementById('second-number')

function validaForm(primeiroNum, segundoNum) {
    return segundoNum > primeiroNum
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    formEValido = validaForm(primeiroValor.value, segundoValor.value)
    const mensagemSecesso = 'O segundo valor é maior que o primeiro'
    
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-mensage')
        containerMensagemSucesso.innerHTML = mensagemSecesso
        containerMensagemSucesso.style.display ='block'

        primeiroValor = ' ';
        segundoValor = ' ';

    } else {
        segundoValor.style.border = '1px solid red '
        document.querySelector('.error-mensage').style.display = 'block'
    }
})


segundoValor.addEventListener('keyup', function(e) {
    consoile.log(e.target.value)
    formEValido = validaForm(e.target.value)

    if(!formEValido) {
        segundoValor.classList.add('error')
        document.querySelector('.error-mensage').mstyle.display = 'block'
    } 
    else {
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-mensage').style.display = 'none'
    }
})