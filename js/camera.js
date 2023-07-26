/* Captura de imagem usando a câmera do dispositivo */

//Constante que captura o botão de iniciar a câmera no HTML;
const botaoIniciarCamera = document.querySelector("[data-video-botao]");

//Constante que captura o campo onde irá aparecer a câmera e o botão de tirar foto;
const campoCamera = document.querySelector("[data-camera]");

//Constante que captura o vídeo;
const video = document.querySelector("[data-video]");

//Constante que captura o botão de tirar foto do HTML;
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");

//Constante que captura o canvas do HTML onde ficará a foto;
const canvas = document.querySelector("[data-video-canvas");

//Constante que captura o campo de mensagem do HTML;
const mensagem = document.querySelector("[data-mensagem");

//Constante que captura do HTML o botão de enviar a foto salva;
const botaoEnviarFoto = document.querySelector("[data-enviar]");

//Variável "Imagem URL", vazia. Receberá a URL da imagem tirada com a câmera.
let imagemURL = "";

//Event listener que ativa a função assíncrona de captura de vídeo (imagem) da câmera do dispositivo;
botaoIniciarCamera.addEventListener("click", async function(){
    
    //Constante que aguarda o navegador capturar o vídeo do dispositivo do usuário;
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    //Faz com que o botão de iniciar a câmera desapareça;
    botaoIniciarCamera.style.display = "none";

    //Faz com que o campo da câmera apareça;
    campoCamera.style.display = "block";

    //A tag de vídeo do HTML recebe como origem o navigator.mediaDevices acima;
    video.srcObject = iniciarVideo;
})

//Event listener que ativa a função de tirar foto com a câmera do dispositivo do usuário;
botaoTirarFoto.addEventListener("click", function(){

    //Criação do canvas em 2d e desenha a imagem na posição que o vídeo estava, pegando o tamanho padrão do vídeo da câmera;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    //Transforma a imagem em URL;
    imagemURL = canvas.toDataURL("image/jpeg");

    //Faz com que o campo da câmera desapareça;
    campoCamera.style.display = "none";

    //Faz com que o campo da mensagem apareça;
    mensagem.style.display = "block";
})

//Event listener que ativa uma arrow function quando é clicado;
botaoEnviarFoto.addEventListener("click", ()=>{
    
    //Constante que recebe os dados salvos no Local Storage sob o nome "Cadastro";
    const receberDadosExistentes = localStorage.getItem("Cadastro");
    console.log(receberDadosExistentes);

    //Constante que recebe os dados do Local Storage convertidos;
    const converteRetorno = JSON.parse(receberDadosExistentes);

    console.log(converteRetorno);

    //Cria o atributo "imagem" em "Converte Retorno" e coloca nele a URL da imagem;
    converteRetorno.imagem = imagemURL;

    //Reenvia os dados (agora com a imagem) para o Local Storage;
    localStorage.setItem("Cadastro", JSON.stringify(converteRetorno));

    //Carrega a página de cadastro concluído no HTML;
    window.location.href = "./abrir-conta-form-3.html";
})
