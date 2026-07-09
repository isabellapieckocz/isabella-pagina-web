const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent = "Obrigado por visitar a Página Web! 💙💖";

    document.body.style.background =
        "linear-gradient(135deg,#7ec8ff,#ff69b4)";
});
