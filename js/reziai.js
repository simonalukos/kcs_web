let a = -5;
let b = 0;
let c = -4;
let d = 4;

if(a > b){
    console.log('KLAIDA A daugiau už B');
}
if(c > d){
    console.log('KLAIDA A daugiau už B');
}
if(b > c && a < d){
    console.log('duotieji intervalai turi rezi')
}
if(c > a && c < b && b < d){
    console.log('duotuju intervalu rezis yra [' + c + ';' + b + ']')
}
if(c < a && b < d && b > c){
    console.log('duotuju intervalu rezis yra [' + a + ';' + b + ']')
}
if(c < a && b > d && a < d){
    console.log('duotuju intervalu rezis yra [' + a + ';' + d + ']')
}