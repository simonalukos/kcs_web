let fotkes = document.getElementsByName('img')

console.log('suma yra: ' +fotkes.length)
console.log('Šiame puslapyje yra šie paveiksleliai')

let newUuid = document.getElementById('uuid')
newUuid.innerHTML = 'Siame puslapyje yra ' + fotkes.length + 'paveiksleliai';
document.getElementById('uuid').innerHTML = kiekText;

let fotos = document.querySelectorAll('img:nth-of-type(2)');

for(let i = 0; i < fotos.length; ++i){
    let elementas = fotos[i];
    elementas.setAttribute("alt", "testas");
}

for(let i = 0; i< fotkes.length; i+=2){
    let elementas = fotkes[i]
    elementas.setAttribute("alt", "testas")
}

//uuid.style.fontSize= '24px';
//uuid.style.backgroundColor= 'green';
//uuid.style.width= '200px';
//uuid.style.height= '200px';
uuid.setAttribute('class', 'uuid');
