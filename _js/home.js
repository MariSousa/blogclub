//div do carrosel de posts novos
var novosPosts = document.getElementById('novosPosts')

//lista que armazenará as notificações de posts novos
let listaNotificacoes = document.getElementById('lista-notificacoes')
console.log(listaNotificacoes)

//class das notificações
class Notificacoes{
    constructor(titulo, assunto, resumo){
        this.titulo = titulo;
        this.assunto = assunto;
        this.resumo = resumo;
    }
}

//arrays que armazenará todos objetos instanciados 
let lista = []

let materiaUm = new Notificacoes('Marketing Digital e o seu negócio', 'Marketing Digital', 'Como utilizar o marketing digital na sua empresa e alcançar mais clientes?')
let materiaDois = new Notificacoes ('Web', 'Javascript', 'Como aprender Javascript?')
let materiaTres = new Notificacoes('Sua empresa em 1º lugar','Negócios', 'Veja como alcançar mais lucros para sua empresa.')

//nova materia vinda do localstorage
let novaMateria = new Notificacoes(localStorage.getItem('Titulo'), localStorage.getItem('Assunto'), localStorage.getItem('Materia'))

//armazenando todas os objetos no array
lista.push(novaMateria, materiaUm, materiaDois, materiaTres )

//função que cria um novo card no carrosel
function adicionarNovoPost(){      

        var item = document.createElement('div')
        item.className = 'item'
        novosPosts.appendChild(item)

        var card = document.createElement('div')
        card.className = 'card'
        item.appendChild(card)

        var img = document.createElement('img')
        img.className = 'card-img-top'
        img.src = "_img/moscow.jpg"
        card.appendChild(img)

        var cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        card.appendChild(cardBody)

        var tituloH5 = document.createElement('h5')
        tituloH5.className = 'card-title'
        tituloH5.innerText = localStorage.getItem('Titulo')
        cardBody.appendChild(tituloH5)

        var paragrafo = document.createElement('p')
        paragrafo.className= 'card-text'
        paragrafo.innerText = localStorage.getItem('Materia')
        cardBody.appendChild(paragrafo)
}

//função que mostra as notificações
function mostrarNotificacoes(){
    for(let i= 0; i< lista.length; i++){
        let li = document.createElement('li')
        li.innerHTML = `<h1>${lista[i].titulo}</h1> <hr> <small><b>${lista[i].assunto}</b></small> <br> <p> ${lista[i].resumo}</p>`
        listaNotificacoes.appendChild(li)
    }
}

//chamando as funções
mostrarNotificacoes()
adicionarNovoPost()

/*Nome usuário*/
let nomeUsuario = document.getElementById('nome-usuario')
nomeUsuario.innerHTML = `Hi! ${localStorage.getItem('Nome')}`



