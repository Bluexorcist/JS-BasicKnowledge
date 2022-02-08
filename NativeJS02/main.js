/*
function handler () {
    alert('PRIVET')
}

const sm = document.getElementById('small')

sm.onclick = handler;*/

const names = ["Bob", "Alex", "Donald", "John", "bob", "ann"]

console.log(names.sort())
const numbers = [100, 333, 2, 9, 42, 1010]
/*const compareFunc = (a, b) => {
  if (a <= b) { // менять не надо
      return -1 //любое отрицательное число
  } else {
      return 1
  }
}*/
const compareIncreaseFunc = (a, b) => a - b;
console.log([...numbers].sort(compareIncreaseFunc))
console.log(numbers.sort(compareIncreaseFunc).reverse())

const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];
console.log([...students].sort((a, b) => b.scores - a.scores))
console.log(students.sort((a, b) => a.name.toLowerCase() <= b.name.toLowerCase()? -1 : 1))

// bubble sort

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1]) {
        let temp = numbers[i + 1]
        numbers[i + 1] = numbers[i]
        numbers[i] = temp
    }
}