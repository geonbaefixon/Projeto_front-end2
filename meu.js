function enviar(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;

    var mensagem = {
        nome: "nome inserido",
        email: "email inserido",
        mensagem: "a mensagem informada"
    }

    inserirMensagem(mensagem)
}

function login(){
    var nomeAdmin = document.getElementById("nomeadmin").value;
    var emailAdmin = document.getElementById("emailadmin").value;

    var objLoginSenha = {
        email: "email informado", 
        senha: "senha informada"
    }

    validarUsuario(objLoginSenha)
}
