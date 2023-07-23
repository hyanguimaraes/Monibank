/* Módulo de validação de CPF */

//Função exportada como padrão, quando o arquivo for chamado, ela será retornada.
export default function ehUmCPF(campo){
    //Constante CPF recebe o valor digitado no input de CPF e substitui os caracteres "." e "-" por um vazio ("").
    const CPF = campo.value.replace (/\.|-/g, "");
    validaNumerosRepetidos(CPF);
    console.log(validaNumerosRepetidos(CPF));
}


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
