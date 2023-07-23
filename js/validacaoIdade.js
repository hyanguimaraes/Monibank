/* VALIDAÇÃO DE IDADE */

//Função exportada como padrão, quando o arquivo for chamado, ela será retornada.
export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    //Chamada da função de validação da idade.
    validaIdade(dataNascimento);

    console.log(validaIdade(dataNascimento));
}

function validaIdade(data){
    //Constante "Data de hoje"
    const dataAtual = new Date();

    //Pega as informações da data de nascimento inserida e soma 18 anos.
    const dataMais18 = new Date (data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    //Verifica se a data atual é maior do que a data de quando o usuário fez 18 anos e retorna true ou false.
    return dataAtual >= dataMais18;
}