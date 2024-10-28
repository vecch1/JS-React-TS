const gerarSenha = document.getElementById('gerar-senha');
const generatedPasswordDiv = document.getElementById('generated-password');
const generatePasswordBTN = document.getElementById('genPassword-btn');


gerarSenha.addEventListener('click', function() {
    // Torna a div visível
    generatedPasswordDiv.style.display = 'block';
});



function generatePassword() {
    // Gera uma senha aleatória
    const letras = 'abcdefghijklmnopqrstuvwxyz'
    const numeros = '123456789'
    const simbolos = '#&*_'
    const caracteres = letras + letras.toUpperCase() + numeros + simbolos
    let senha = ''

    for (let i = 0; i < 8; i++){
        const caracteresAleatoria = Math.floor(Math.random() + caracteres.length)
        senha += caracteres.charAt(caracteresAleatoria)
    }

    document.querySelector("p").innerText =  caracteresAleatoria 
}






