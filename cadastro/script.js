function handleCadastro() {
  const usuario = document.getElementById("usuario");
  const span_senha = document.getElementById("span-senha")
  const span_confirm_senha = document.getElementById("span-confirm-senha")
  const senha = document.getElementById("senha");
  const confirm_senha = document.getElementById("confirm-senha");
  const erro_usuario = document.getElementById("erro-usuario");
  const erro_senha = document.getElementById("erro-senha");
  const erro_confirm_senha = document.getElementById("erro-confirm-senha");

  if (senha.value !== confirm_senha.value) {
    erro_senha.innerHTML = "As senhas não coincidem"
    erro_confirm_senha.innerHTML = "As senhas não coincidem"
    span_senha.classList.replace("outline-blue-500", "outline-red-700")
    span_confirm_senha.classList.replace("outline-blue-500", "outline-red-700")
    span_senha.classList.add("invalido")
    span_confirm_senha.classList.add("invalido")
    senha.focus()
    setTimeout(() => {
      erro_senha.innerHTML = ""
      erro_confirm_senha.innerHTML = ""
      span_senha.classList.replace("outline-red-700", "outline-blue-500")
      span_confirm_senha.classList.replace("outline-red-700", "outline-blue-500")
      span_senha.classList.remove("invalido")
      span_confirm_senha.classList.remove("invalido")
    }, 5000)
    return;
  }

  const usuariosEncoded = localStorage.getItem("usuarios");
  const usuarios = usuariosEncoded ? JSON.parse(atob(usuariosEncoded)) : [];
  const existingUser = usuarios.find(user => user.usuario === usuario.value);
  if (existingUser) {
    erro_usuario.innerHTML = "Usuário já existe"
    usuario.classList.replace("outline-blue-500", "outline-red-700")
    usuario.classList.add("invalido")
    usuario.focus()
    setTimeout(() => {
      erro_usuario.innerHTML = ""
      usuario.classList.replace("outline-red-700", "outline-blue-500")
      usuario.classList.remove("invalido")
    }, 5000)
    return;
  }

  const newUser = {
    usuario: usuario.value,
    senha: senha.value
  };
  usuarios.push(newUser);
  localStorage.setItem("usuarios", btoa(JSON.stringify(usuarios)));

  document.body.innerHTML = `<h1 class="text-green-700 text-2xl">Conta criada!</h1>`
  setTimeout(() => {
    window.location.href = "../login/index.html"
  }, 5000)
}

function showPassword(index) {
  const inputs = document.getElementsByClassName("senhas");
  const input = inputs[index];
  input.type = input.type === "password" ? "text" : "password";
}

window.addEventListener("load", function () {
  const eye_slash = document.getElementsByClassName("fa-eye-slash");
  for (const element of eye_slash) {
    element.style.display = "none";
  }
});
