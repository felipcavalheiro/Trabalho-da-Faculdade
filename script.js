document.addEventListener('DOMContentLoaded', function () {
    var playerImages = document.querySelectorAll('.player-img');

    playerImages.forEach(function (playerImage) {
        var playerInfo = playerImage.nextElementSibling;

        var delayTimeout;

        playerImage.addEventListener('mouseover', function () {
            // Adiciona um delay de 500 milissegundos (0.5 segundos) antes de mostrar as informações
            delayTimeout = setTimeout(function () {
                playerInfo.classList.add('active');
            }, 200);
        });

        playerImage.addEventListener('mouseout', function () {
            // Limpa o timeout se o mouse sair antes do tempo de delay
            clearTimeout(delayTimeout);

            playerInfo.classList.remove('active');
        });
    });
});

function changePage(page) {
    // Aqui você pode adicionar lógica para redirecionar para a página correspondente
    console.log(`Mudando para a página: ${page}`);
    // Exemplo: window.location.href = `${page}.html`;
}

function validarSenha() {
    var senha = document.getElementById("senha").value;

    if (senha.length < 8) {
        for (var i = 0; i < senha.length; i++) {
            // Aqui você poderia realizar outras verificações dentro do loop, se necessário
        }

        alert("A senha deve ter pelo menos 8 caracteres.");
        return false; // Impede o envio do formulário
    }

    // Continue com o envio do formulário se a senha for válida
    return true;
}

function validarTelefone() {
    var telefone = document.getElementById("telefone").value;

    if (telefone.length !== 14) {
        alert("O número de telefone deve ter 14 caracteres.");
        return false; // Impede o envio do formulário
    }

    for (var i = 0; i < telefone.length; i++) {
        if (isNaN(telefone[i]) && telefone[i] !== ' ') {
            alert("O número de telefone deve conter apenas números e espaços.");
            return false; // Impede o envio do formulário
        }
    }

    // Continue com o envio do formulário se o telefone for válido
    return true;
}

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("e-mail").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmar").value;
    var usuario = document.getElementById("usuario").value;
    var telefone = document.getElementById("telefone").value;

    if (nome === "" || email === "" || senha === "" || confirmarSenha === "" || usuario === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário
    }

    // Continue com o envio do formulário se todos os campos estiverem preenchidos
    return true;
}