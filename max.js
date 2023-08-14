function maxNumber(number){
    let lergest = number[0];

for(i=0; i<number.length; i++){
    const index = i;
    const element = number[index];
    if(element>lergest){
      lergest = element;
    }
}
return lergest;
}
const heights = [ 12, 34, 56, 24, 45,77,34, 10, 99];
const tallest = maxNumber(heights);
console.log("Tallest person is: ", tallest);
