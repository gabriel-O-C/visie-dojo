// Fazendo o reverse de uma string

function reverseString(string) {
  return string.split('').reverse().join('');
}

console.log(reverseString("hello"));

// fatorial com recursion

function fatorial(x) {
  if(x === 1) return 1
  else{
    return x * fatorial(x - 1)
  }
}

console.log(fatorial(5))
