/* Script de validações do formulário */

import ehUmCPF from "./validacaoCPF.js";
import ehMaiorDeIdade from "./validacaoIdade.js";

//Constante que captura todos os elementos do HTML que tenham o atribudo required (os campos do formulário).
const camposDoFormulario = document.querySelectorAll("[required]");

//Constante "Formulário" que captura o formulário todo do HTML.
const formulario = document.querySelector("[data-formulario");

//Event listener que pega o "evento" (chamado de "e" para não conflitar com o evento usado no forEach abaixo) de pressionar o botão de envio do formulário.
formulario.addEventListener("submit", (e)=>{
    //Previne o envio padrão do formulário.
    e.preventDefault();

    /*Constante array "Lista Respostas" que possui os atributos: Nome, email, rg, cpf e aniversário e, cada um deles, recebe o valor
    digitado pelo usuário em seus respectivos campos*/
    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,
    }

    //Cria no Local Storage, um array "Cadastro" com os dados do array "Lista Respostas" como string JSON.
    localStorage.setItem("Cadastro", JSON.stringify(listaRespostas));

    //Redireciona para próxima página do formulário.
    window.location.href = "../pages/abrir-conta-form-2.html";
})

//Para cada campo do formulário, quando tiver o foco tirado dele (quando clicarem fora), ativa a função "Verifica Campo".
camposDoFormulario.forEach((campo)=>{
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

//Constante com um array com os nomes dos tipos de erros que julgamos que irão acontecer com maior frequência.
const tiposDeErro =[
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

//Constante com um array com mensagens de erro para os usuários, caso ocorram.
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

//Função que verifica se o CPF é válido
function verificaCampo(campo){
    //Variável de mensagem de erro. No momento, vazia.
    let mensagem = "";

    //Deleta mensagens de erro anteriores.
    campo.setCustomValidity('');

    //Se o nome do campo for "CPF" e não estiver vazio, chama a função "É um CPF".
    if (campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }

    //Se o nome do campo for "Aniversário" e não estiver vazio, chama a função "É maior de idade".
    if (campo.name == "aniversario" && campo.value != ""){
        ehMaiorDeIdade(campo);
    }

    /*Chamada do array "Tipos de erro" com laço de repetição ativado em caso de erro. Verifica que ele mesmo possui um erro e se sim (true),
    recebe a mensagem de erro do "Validity state" e atribui à variável "Mensagem" a mensagem que colocamos no array multidimensional "Mensagens"
    de acordo com o nome do campo e o erro do "Validity state" recebido.*/
    tiposDeErro.forEach(erro =>{
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })

    /*Constante "Mensagem Erro" que captura o <span> de classe "Mensagem-erro" do HTML. O uso do Parent Node é para que pegue apenas o <span>
    específico do input onde ocorreu o erro. Caso contrário, pegaria de todos os inputs da página.*/
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');

    //Constante "Validador de input" que checa se o campo está válido ou não.
    const validadorDeInput = campo.checkValidity();

    /*Se a constante "Validador de input" retornar false, a constante "Mensagem Erro" recebe o texto da mensagem de erro personalizada, vinda do
    array multidimencional "Mensagens".*/
    if (!validadorDeInput){
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}
