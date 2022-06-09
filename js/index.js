// 1-masala
const numbers = [];
numbers.push(Number(prompt("Son kriting")));
numbers.push(Number(prompt("Son kriting")));
numbers.push(Number(prompt("Son kriting")));

const result = function(number){
  var num = 0;
  if(number !=NaN){
    for(let number of numbers){
      num += number;
    }
  }
  return num;
}

console.log(result(numbers));

// 2-masala
let array = ["Jazz", "Blues"]
console.log(array);
array.push("Rock-n-roll")
console.log(array);
array[1] = "Classic"
console.log(array);
array.shift()
console.log(array);
array.unshift("Reggae")
array.unshift("Rap")
console.log(array);



// 3-masala 
let salaries = {
  "Akmal": 1200,
  "Salim": 5200,
  "Karima": 1800,
}
function sumSalaries(salaries){
  let money = Object.values(salaries)
  console.log(money);
  let result = 0
  for(let i of money){
    result+=i
  }
  return result 
}
console.log(salaries);
console.log(sumSalaries(salaries));

