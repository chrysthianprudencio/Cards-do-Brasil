
let cards = document.querySelector('.cards');

fetch('jogadores-brasil.json')
.then(response => response.json())
.then(data => data.forEach( (jogador, indice) => {
    
    let card = document.createElement('div');
    card.classList.add('card');

    cards.appendChild(card);

    card.innerHTML = `

    <div class="card">
        <span class="posicaoP">${jogador.posicao}</span>
        <span class="posicaoG">${jogador.posicao}</span>
        <img class="escudo" src="./images/escudos/${jogador.escudo}.png" alt="">
        <img class="jogador" src="./images/jogadores/${jogador.foto}.png" alt="">
        <h3 class="nomeJogador">${jogador.nome}</h3>
        <h4 class="numero">${jogador.numero}</h4>
    </div>
    `

}));

