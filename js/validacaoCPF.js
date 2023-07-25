/* Módulo de validação de CPF */

//Função exportada como padrão, quando o arquivo for chamado, ela será retornada.
export default function ehUmCPF(campo){
    //Constante CPF recebe o valor digitado no input de CPF e substitui os caracteres "." e "-" por um vazio ("").
    const CPF = campo.value.replace (/\.|-/g, "");

    if (validaNumerosRepetidos(CPF) || validaPrimeiroDigito(CPF) || validaSegundoDigito(CPF)){
        campo.setCustomValidity('Esse CPF não é válido');
    }
}

//Função para verificação se o usuário digitou apenas números repetidos ou não.
function validaNumerosRepetidos(CPF) {
    const numerosRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
    ]

    return numerosRepetidos.includes(CPF);
}

//Função que verifica se o primeiro dígito após o hífen (do CPF) é válido.
function validaPrimeiroDigito(CPF){
    let soma = 0;
    let multiplicador = 10;

    //De zero a nove vezes (nome números do CPF);
    for (let tamanho = 0; tamanho < 9; tamanho ++){
        //Soma recebe o CPF pela posição dos dígitos e múltiplica pelo "Multiplicador" até o resultado final. Conforme o "Tamanho" aumenta, o multplicador diminui.
        soma += CPF[tamanho] * multiplicador;
        multiplicador --;
    }

    //O resultado do laço for é multiplicado por 10 e depois, por 11%.
    soma = (soma *10) % 11;

    //Se o valor de soma, após o laço de repetição, for igual a 10 ou 11, ela volta a ter o valor 0.
    if (soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != CPF[9];
}

//Função que verifica se o primeiro dígito após o hífen (do CPF) é válido.
function validaSegundoDigito(CPF){
    let soma = 0;
    let multiplicador = 11;

    //De zero a nove vezes (nome números do CPF);
    for (let tamanho = 0; tamanho < 10; tamanho ++){
        //Soma recebe o CPF pela posição dos dígitos e múltiplica pelo "Multiplicador" até o resultado final. Conforme o "Tamanho" aumenta, o multplicador diminui.
        soma += CPF[tamanho] * multiplicador;
        multiplicador --;
    }

    //O resultado do laço for é multiplicado por 10 e depois, por 11%.
    soma = (soma *10) % 11;


    //Se o valor de soma, após o laço de repetição, for igual a 10 ou 11, ela volta a ter o valor 0.
    if (soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != CPF[10];
}
