var inputAssunto = document.getElementById('assuntoPost')
var inputTitulo = document.getElementById('tituloPost')
var textoMateria = document.getElementById('textoMateria')
var imgPost = document.getElementById('imgPost')

var postarBnt = document.getElementById('postar')

//armazenando os dados no localstorage
postarBnt.addEventListener('click', function(){
    event.preventDefault()
    localStorage.setItem('Assunto', inputAssunto.value)
    localStorage.setItem('Titulo', inputTitulo.value)
    localStorage.setItem('Materia', textoMateria.value)
    window.location.href = 'home.html'
})