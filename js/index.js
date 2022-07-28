const btn = document.getElementById("submitBtn");
const form = document.getElementById("subscribeForm");

btn.onclick = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("formSubscribe").submit();
  setTimeout(() => {
    document.getElementById("subscribeForm").innerHTML =
      "E-mail Cadastrado com Suceso!";
  }, 1500);
}
