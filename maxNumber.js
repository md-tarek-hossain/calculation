function maxHeightFinder(number){
let largest = number[0]
    for (i=0; i<number.length; i++){
        let index = i;
        element = number[index];
        if(element>largest){
            element=largest;
        }

    }
    return element;
}
const array = [23, 45, 234, 56, 23, 45, 546, 78, 78, 3, 58]
const tallest = maxHeightFinder(array);
console.log('The tallest number is :', tallest)