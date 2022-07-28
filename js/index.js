const btn = document.getElementById('submitBtn');

btn.onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("formSubscribe").submit();
  document.getElementById("subscribeForm").innerHTML = "E-mail Cadastrado com Suceso!";
  
};