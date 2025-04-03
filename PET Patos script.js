window.onload = function() {
    alert("Bem-vindo à Minha Loja!");
};

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function() {
    let botoes = document.querySelectorAll(".produto button");

    botoes.forEach(botao => {
        botao.addEventListener("click", function() {
            alert("Mais informações sobre este cão em breve!");
        });
    });
});
