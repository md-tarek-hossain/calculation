var string = "Hello, kacher manush jon. kmn acen apnara"

var search = 'KACHER'
var searchString = string.toLowerCase().includes(search.toLowerCase());
// console.log(searchString);
// console.log(string.indexOf('manush'))

// if(string.indexOf('kacherk') !== -1){
//     console.log('Yea!! eta ace')
// }
// else{console.log('sorry boss,, nai')}
console.log(string.endsWith('apnara'))