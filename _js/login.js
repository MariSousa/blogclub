let erroLogin = document.getElementById('erro-login')
let erroCadastro = document.getElementById('erro-cadastro')
let cadastroConcluido = document.getElementById('cadastro-concluido')
let bttLogin = document.getElementById('link-login')
let loginConcluido = document.getElementById('login-concluido')

bttLogin.addEventListener('click', function(){
    event.preventDefault()
    let formLogin = document.getElementsByClassName('form-login')[0]
    formLogin.style.display = 'block'
    let formCadastro = document.getElementsByClassName('form-cadastro')[0]
    formCadastro.style.display = 'none'
})

let bttCadastro = document.getElementById('link-cadastro')
bttCadastro.addEventListener('click', function(){
    event.preventDefault()
    let formLogin = document.getElementsByClassName('form-login')[0]
    formLogin.style.display = 'none'
    let formCadastro = document.getElementsByClassName('form-cadastro')[0]
    formCadastro.style.display = 'block'
})

/*Cadastro*/
let usernameCadastro = document.getElementById('exampleInputEmailCadastro')
let passwordCadastro = document.getElementById('exampleInputPasswordCadastro')
let nameCadastro = document.getElementById('exampleInputNameCadastro')
let singUp = document.getElementById('btt-cadastro')
singUp.addEventListener('click', function(){
    event.preventDefault()

    if(usernameCadastro.value == '' || passwordCadastro.value == '' || nameCadastro.value == ''){
        erroCadastro.innerText = 'Preencha os campos'
        erroCadastro.style.color = 'red'
    } else {
        erroCadastro.innerText = ''
        localStorage.setItem('Username', usernameCadastro.value)
        localStorage.setItem('Password', passwordCadastro.value)
        localStorage.setItem('Nome', nameCadastro.value)
        cadastroConcluidoSucesso()
    }   
    
})

function cadastroConcluidoSucesso(){
    cadastroConcluido.style.display = 'block'
}

/*Login*/
let usernameLogin = document.getElementById('exampleInputEmailLogin')
let passwordLogin = document.getElementById('exampleInputPasswordLogin')
let login = document.getElementById('btt-login')

console.log(usernameLogin) 
console.log(passwordLogin) 
console.log(login) 

login.addEventListener('click', function(){
    event.preventDefault()
    if(usernameLogin.value != localStorage.getItem('Username') || passwordLogin.value != localStorage.getItem('Password')){
        erroLogin.innerText = 'Email ou senha incorretos'
        erroLogin.style.color = 'red'
    } else if (usernameLogin.value == '' || passwordLogin.value == ''){
        erroLogin.innerText = 'Preencha os campos acima'
        erroLogin.style.color = 'red'
    } else if (usernameLogin.value == localStorage.getItem('Username') || passwordLogin.value == localStorage.getItem('Password')){
        erroLogin.innerText = ''
        loginConcluidoSucesso()        
    }
})

function loginConcluidoSucesso(){
    loginConcluido.style.display = 'block'
    setTimeout(function(){
            window.location.replace('home.html')
        }, 3000)
}
