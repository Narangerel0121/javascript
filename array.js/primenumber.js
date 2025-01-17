function isPrimeNumber (n) {
    let isPrimeNumber = true;
    if (n == 1) isPrimeNumber = false;
    for(let i = 2; i < n; i++){
        if( n%i == 0){
            isPrimeNumber = false;
        }
    }
    return isPrimeNumber
}
console.log(isPrimeNumber(121)) /// Ogogdson toog anhnii too esehiig shalgadag
// console.log(isPrimeNumber(n = 0; n <= 100; n++)) /// Aldaatai. Ug ni 1-s 100 hurtel anhnii toog oloh gej baisan yoom.

for(let i = 1; i <= 100; i++) {
    if(i = 1){console.log(false)}
    for(let j = 2; j < 100; j++){
       if(i % j == 0) {
        console.log(false)
       }
       else{console.log(true)}
    }
} /// Ene bol ugaasaa boloogui console.log-iig ni door tavimaar baigaa ch bolohgui baigaa. Yag enuugeeree function bichih.