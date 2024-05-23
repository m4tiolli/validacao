function handleLogin() {
  const user_usuario = document.getElementById("usuario")
  const user_senha = document.getElementById("senha")
  const erro_usuario = document.getElementById("erro-usuario")
  const erro_senha = document.getElementById("erro-senha")

  const usuario = "usuario123"
  const senha = "123123"

  if (user_usuario.value == usuario) {
    if (user_senha.value != senha) {
      erro_senha.innerHTML = "Senha incorreta."
      user_senha.classList.replace("outline-blue-500", "outline-red-700")
      user_senha.classList.add("invalido")
      user_senha.focus()
      setTimeout(() => {
        erro_senha.innerHTML = ""
        user_senha.classList.replace("outline-red-700", "outline-blue-500")
        user_senha.classList.remove("invalido")
      }, 5000)
    }
    else {
      document.body.innerHTML = `<h1 class="text-green-700 text-2xl">Logado!</h1>`
      setTimeout(() => {
        window.location.reload()
      }, 5000)
    }
  } else {
    erro_usuario.innerHTML = "Usuário inexistente."
    user_usuario.classList.replace("outline-blue-500", "outline-red-700")
    user_usuario.classList.add("invalido")
    user_usuario.focus()
    setTimeout(() => {
      erro_usuario.innerHTML = ""
      user_usuario.classList.replace("outline-red-700", "outline-blue-500")
      user_usuario.classList.remove("invalido")
    }, 5000)
  }
}