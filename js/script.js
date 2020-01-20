let buttonClick = document.getElementById('news')
let board = document.getElementById('board')

buttonClick.addEventListener('click', ()=> {
    fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=0c96afda9cd1488c84c33b2e140bfdd2")
    .then(response=> response.json())
    .then(json=>{
        console.log(json.articles)
        mostrarNaTela(json.articles)
    })
})

// buttonClick.addEventListener('click', async ()=> {
//     let listaNoticias = (await fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=0c96afda9cd1488c84c33b2e140bfdd2")).json();
//     mostrarNaTela(await listaNoticias.articles)
// })

let mostrarNaTela = listaNoticias => {
    //for(let noticia of listaNoticias)
    listaNoticias.forEach(function(noticia, posicao) {
        let card = `<div class="card" style="width: 18rem;">
        <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${noticia.title}</h5>
        <p class="card-text">${noticia.description}</p>
        <a href="${noticia.url}" class="btn btn-primary">Ver mais</a>
        </div>
    </div>`
    board.innerHTML += card;
    })
}