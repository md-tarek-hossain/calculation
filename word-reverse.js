
function reverseWord(str){
    const word = str.split(' ');
    // console.log(word);
    const result = [];
    for(let i=word.length-1; i>=0; i--){
        const element= word[i];
        result.push(element);
        // console.log(element);
    }
    const reverse = result.join(' ')
    return reverse;
    // console.log(result);
}

const myText = "hello chukku, how are you?"
reverseWord(myText);
// const join = result.join(' ');
console.log(reverse);