const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 11, 'ninja');

const minus = (a: number, b: number): number => {
  return a + b;
}

let result = minus(10,7);
console.log(result); 

const exampleCondition = (x : number) => x % 2 == 0 ? x + 2 : x - 2

console.log(exampleCondition(5))


const allNumber = (n : number) : string =>
{
  let stringSequence = ""
  let x = 0
  while (x <= n){
    stringSequence += x
    if (x < n){
      stringSequence += " "
    }
    x++
  }
  return stringSequence
}

let result1 = allNumber(5)
console.log(result1)


const allNumberRev = (n : number) : string =>
{
  let stringSequence = ""
  while (n >= 0){
    stringSequence += n
    if (n >= 0){
      stringSequence += " "
    }
    n--
  }
  return stringSequence
}

let result2 = allNumberRev(5)
console.log(result2)


const allNumberRange = (lower: number) => (upper: number) : string => {
  let stringSequence = ""
  while (lower <= upper) {
    stringSequence += lower
    if (lower < upper){
      stringSequence += " "
    }
    lower++
  }
  return stringSequence
}


let result3 = allNumberRange(0)(5)
console.log(result3)


