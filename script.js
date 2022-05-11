document.querySelector('.botao-pause').style.display = 'none'

let musicas = [
    {titulo: 'Piauí (feat.Rapadura' , artista: 'Liw-Whind' , src:'musicas/piaui.mp3', img:'imagens/wind.gif'},
    {titulo: 'Balanço da rede' , artista: 'Xand-Avião' , src:'musicas/balanco.mp3', img:'imagens/rede.jpg'},
    {titulo: 'Red Maracujá' , artista: 'Xand-Avião' , src:'musicas/red.mp3', img:'imagens/dj.jpg'}
  
]

let musica = document.querySelector('audio');
let indexMusica = 0;


let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i')



duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))

//eventos

document.querySelector('.botao-play').addEventListener('click' , tocarMusica);

document.querySelector('.botao-pause').addEventListener('click' , pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra )

document.querySelector('.anterior').addEventListener('click' , () => {
    indexMusica --;
    if(indexMusica < 0){
        indexMusica = 2;
    }
  rendezirarMusica(indexMusica)
});

document.querySelector('.proxima').addEventListener('click' , () => {
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0;
    }
    rendezirarMusica(indexMusica)
});




// FUNCTIONS

function rendezirarMusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata' , () => {
       nomeMusica.textContent = musicas[index].titulo;
       nomeArtista.textContent =musicas[index].artista;
       imagem.src =musicas[index].img; 
       duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
    });
}






function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'
   
}



function pausarMusica (){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none'
    document.querySelector('.botao-play').style.display = 'block'
   
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+ ':' +campoSegundos;
}

