/* Script de validações do formulário */

import ehUmCPF from "./validacaoCPF.js";

//Constante que captura todos os elementos do HTML que tenham o atribudo required (os campos do formulário).
const camposDoFormulario = document.querySelectorAll("[required]");

//Para cada campo do formulário, quando tiver o foco tirado dele (quando clicarem fora), ativa a função "Verifica Campo".
camposDoFormulario.forEach((campo)=>{
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo){
    if (campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }
}