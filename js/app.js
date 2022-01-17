// document.querySelector('h2')
console.log(document.querySelector('h2'));
// document.querySelector('p')
console.log(document.querySelector('p'));
console.log(document.getElementById('intro'));

let elem = document.querySelector('#intro');
console.log(elem);
// elem.textContent = 'El nuevo texto'
elem.innerHTML = '<i>Nuevo texto</i>';