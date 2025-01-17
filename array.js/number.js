let num = 0
for(let i = 1; i <= 100; i++) {
    num += i
} console.log(num) /// 1-100 hurtelh toonii niilber

let sondgoi = 0
for(let i = 1; i <= 100; i++) {
if(i%2 == 1){
    sondgoi += i
}
} console.log(sondgoi) /// 1-100 hurtelh sondgoi toonii niilber

let urjver = 1
for(let i = 1; i < 100; i += 2) {
    urjver *= i
} console.log(urjver) /// 1-200 hurtelh sondgoi toonii urjver

for(let i = 1; i <= 100; i++){
    if(i%2 != 0){
        console.log(i)
    }
} /// 1-100 hurtelh sondgoi toog jagsaah