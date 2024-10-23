const Name = document.getElementById("#nome");
const Email = document.getElementById("#email");
const Password = document.getElementById("#senha");
const ConfirmaSenha = document.getElementById("#confirmaSenha")
const Cadastrar_BTN = document.getElementById("#submit-btn")
const GeneratePassword = document.getElementById("#genarate-password")


if (Password.value !== ConfirmaSenha.value){
    console.log("A  senha e a confirmação de senha não são iguais");
alert("A senha e a confirmação de senha não são iguais");
}
