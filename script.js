function Validate() {
    var cpf = document.getElementById('cpf_input').value
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    
    console.log(cpf)
    
    var resultValidate = ValidateCPF(cpf);

    // if(resultValidade == true) =
    if(resultValidate){
        document.getElementById('success').style.display = 'block';
    } else{
        document.getElementById('error').style.display = 'block';
    }
}

function ValidateCPF(cpf) {
    console.log(cpf.length);
    if(cpf.length != 11){
        return false;
    } else{
        var numeros = cpf.substring(0, 9); //apartir de um ponto inicial e final quebra o texto e retorna só oq pediu
        
        var digitos = cpf.substring(9);
        
        var soma = 0;
        
        for (var i = 10; i > 1; i--){
            soma+= numeros.charAt(10 - i) * i; //função que busca até encontrar e dps retorna a posição da string na lista
        } 
        console.log(soma);
        
        var result = (soma % 11) < 2 ? 0 : 11 - (soma % 11);  //? pergunta e da resultado apos, se não : resultado falso

        //Validação do primeiro dígito //
        if(result != digitos.charAt(0)){
            return false;
        }
        
        soma = 0;
        
        for(var j = 11; j > 1; j--){
            soma+= numeros.charAt(11 - j) * j;
        }
        result = soma % 11 > 2 ? 0 : 11 - (soma % 11);
        
        //validação do segundo dígito
        if(result != digitos.charAt(1)){
            return false;
        }
        return true;
    }
}