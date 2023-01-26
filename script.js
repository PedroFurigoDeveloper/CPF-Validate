//Function to show the result of true or false validation
function Validate() {
    var cpf = document.getElementById('cpf_input').value
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    
    console.log(cpf)
    
    var resultValid = ValidateCPF(cpf);

    if(resultValid){
        document.getElementById('success').style.display = 'block';
    } else{
        document.getElementById('error').style.display = 'block';
    }
}

function ValidateCPF(cpf) {
    regexCPF = new RegExp('[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}')
    console.log(cpf.match(regexCPF))
    if(cpf.length == 11){
        if(cpf.match(regexCPF)){
            let number = cpf.substring(0, 9);
            
            var digits = cpf.substring(9);
        
            var sum = 0;
        
            for (var i = 10; i > 1; i--){
                sum+= number.charAt(10 - i) * i; 
            } 
        
            var result = (sum % 11) < 2 ? 0 : 11 - (sum % 11);
        
            //Validation of fist digit //
            if(result != digits.charAt(0)){
                return false;
            }
        
            sum= 0;
        
            for(var j = 11; j > 1; j--){
                sum+= number.charAt(11 - j) * j;
            }
            result = sum % 11 > 2 ? 0 : 11 - (sum % 11);
        
            //validation of second digit //
            if(result != digits.charAt(1)){
                return false;
            }
            return true;
        }
    }   
}
