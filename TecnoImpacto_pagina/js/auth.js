function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("auth", "true");
    window.location.href = "admin.html";
  } else {
    alert("Credenciales incorrectas");
  }
}
