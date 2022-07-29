const btn = document.getElementById("submitBtn");
const form = document.getElementById("subscribeForm");

btn.onclick = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("formSubscribe").submit();
  setTimeout(() => {
    document.getElementById("subscribeForm").innerHTML =
      "E-mail cadastrado com sucesso. <br>Bem-vindo(a) a bordo 🚀";
  }, 1500);
}
