let entrada = require('readline-sync');
let n = parseFloat(entrada.question('Informe um número:' ));
for(i = 0; i<=n; i++){
    if(i == 0){
        console.log('Zero ' + i);
    }else{
        if(i % 2 != 0){
            console.log('Ímpar ' + i);
        }else{
            console.log('Par ' + i);
        }

    }
    
}