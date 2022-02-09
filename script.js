let musicas = [
    {titulo:'A year Ago', Artista: 'neffez', src:'musicas/A Year Ago - NEFFEX.mp3', img:'imagens/agua.jpg'},
    {titulo:'dreaming', Artista: 'neffez', src:'musicas/Dreaming On - NEFFEX.mp3', img:'imagens/balao.jpg'},
    {titulo:'free', Artista: 'neffez', src:'musicas/Free Me - NEFFEX.mp3', img:'imagens/luz.jpg'},
    {titulo:'go', Artista: 'neffez', src:'musicas/Go Down Swinging - NEFFEX.mp3', img:'imagens/sol.jpg'},
    {titulo:'hustlin', Artista: 'neffez', src:'musicas/Hustlin - NEFFEX.mp3', img:'imagens/mina.jpg'},
    {titulo:'manifest', Artista: 'neffez', src:'musicas/Manifest It - NEFFEX.mp3', img:'imagens/nuvem.jpg'},
];

let  musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica =  document.querySelector('.fim');
let imagem = document.querySelector('.img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

//Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//Funções

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].Artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display ='block';
    document.querySelector('.botao-play').style.display ='none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display ='none';
    document.querySelector('.botao-play').style.display ='block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent =segundosParaMinutos (Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}

