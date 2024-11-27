function enviar(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;

    inserirMensagem(mensagem);
}
<script>
        $(document).ready(function () {
        $("#formContato").on("submit", function (e) {
        e.preventDefault();

    var mensagem = {
        nome: $("#nome").val(),
        email: $("#email").val(),
        mensagem:$("#mensagem").val()
    };
    inserirMensagem(mensagem);
    $("#mensagemSucesso").text("Mensagem enviada com sucesso!");
    $("#mensagemErro").text("");
    });
});
</script>

function login(){
    var nomeAdmin = document.getElementById("nomeadmin").value;
    var emailAdmin = document.getElementById("emailadmin").value;

    validarUsuario(objLoginSenha)
}
<script>
$(document).ready(function () {
    $("#formAdmin").on("submit", function (e) {
    e.preventDefault();

    var objLoginSenha = {
    email: $("#email").val(),
    senha: $("#senha").val()
    };

    if (validarUsuario(objLoginSenha)) {
    window.location.href = "mensagens.html";
    } else {
    $("#mensagemErro").text("E-mail e senha inválidos");
    }
    });
    });
</script>
