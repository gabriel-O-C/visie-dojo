const arrNumbers = [22, 28, 33, 54, 14, 2, 76]
 
function quantityOfElementsOverAvg(data) {
 const numbers = data;
 const total = numbers.reduce((prevValue, value) => prevValue + value)
 const length = numbers.length
 const avg = total / length
 
 const result = numbers.filter((number) => number > avg)
 
 console.log(result)
};
 
quantityOfElementsOverAvg(arrNumbers)


const arr = ['front-end', 'angular', 'back-end', 'database', 'async'];
const arr2 = ['']
 
function wordsStartedWithA(data) {
 const isEmpty = data.map((word) => word === '')
 if (!isEmpty) {
   console.log('Insira um valor não vazio')
 } else {
   const startedWithA = data.filter((word) => word[0] === 'a')
   console.log(startedWithA)
 }
}
 
wordsStartedWithA(arr);
