/* Script de validações do formulário */

import ehUmCPF from "./validacaoCPF.js";
import ehMaiorDeIdade from "./validacaoIdade.js";

//Constante que captura todos os elementos do HTML que tenham o atribudo required (os campos do formulário).
const camposDoFormulario = document.querySelectorAll("[required]");

//Para cada campo do formulário, quando tiver o foco tirado dele (quando clicarem fora), ativa a função "Verifica Campo".
camposDoFormulario.forEach((campo)=>{
    campo.addEventListener("blur", () => verificaCampo(campo));
})

//Função que verifica se o CPF é válido
function verificaCampo(campo){
    //Se o nome do campo for "CPF" e não estiver vazio, chama a função "É um CPF".
    if (campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }

    //Se o nome do campo for "Aniversário" e não estiver vazio, chama a função "É maior de idade".
    if (campo.name == "aniversario" && campo.value != ""){
        ehMaiorDeIdade(campo);
    }
}