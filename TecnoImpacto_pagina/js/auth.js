document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginBtn").addEventListener("click", login);
});


function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "7777") {
    localStorage.setItem("isAdmin", "true");
    alert("Admin detectado");
    window.location.href = "/TecnoImpacto_pagina/htmls/admin.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}