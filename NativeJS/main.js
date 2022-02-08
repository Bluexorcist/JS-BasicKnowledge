/*
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Michel",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "Jhon",
        age: 19,
        isMarried: false,
        scores: 100
    }
]
console.log(students.map(s => s.name))
console.log(myMap(students, s => s.name))
function myMap(arr, callback) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = callback[arr[i]]
    }
    return newArr
}
console.log(students.filter(s => s.scores >= 100))
console.log(myFilter(students, s => s.scores >= 100))

/!*function myFilter(array, callback) {
    const filteredArr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
         filteredArr.push(array[i]);
        };
    }
    return filteredArr;
}*!/

function myFilter(array, callback) {
    const filteredArr = []
    for (let i = 0; i < array.length; i++) {
        callback(array[i])? filteredArr.push(array[i]): null;

    }
    return filteredArr;
}

console.log(students.find(s => s.name === 'Bob'))
console.log(myFind(students, s => s.name === 'Bob'))

function myFind(arr, callback) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result = arr[i]
            break
        }
    }

    return result
}*/

function acuum(str) {
    let arr = str.split('')
    return arr.map((e, i) => (e.toUpperCase() + e.toLowerCase().repeat(i))).join('-')
}

console.log(acuum('abcddfsdf'))

let arr = [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]

console.log(Math.min(...arr[2]));
const minValue = (arr) => {
    let sum = 0;
    arr.map(m => sum += Math.min(...m))
    return sum
}
console.log(minValue(arr))

let toStringMethod = (input) => {
    return output = JSON.stringify(input)
}
console.log(toStringMethod(false))

const removeConsecutiveDuplicates = (s) => {
    return s.split(' ').filter((f, i, arr) => {
        return arr.indexOf(f) === i
    })
}

const removeConsecutiveDuplicatesTwo = (s) => {
    let arr = s.split(' ')
    let arr2 = []
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arr2.push(arr[i - 1])

        }

    }
    return arr2;
}
let str = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
let arr3 = str.split(' ')
uniq = [...new Set(arr3)];

const removeConsecutiveDuplicatesThree = (s) => {
    return s.split(' ').filter((e, i, arr) => e !== arr[i + 1]).join(' ')
}

console.log(uniq)
console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));
console.log(removeConsecutiveDuplicatesTwo("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));
console.log(removeConsecutiveDuplicatesThree("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));

let jhon = {name: 123}
let visit = new Map()
visit.set(jhon, 123)
    .set(true, 'blablabalba')
    .set(124, 'WTF');

for (const visitElement of visit) {
    console.log(visitElement);
}

const currencyExchange = (kurs, deposit) => {
    console.log(((((deposit*0.03+deposit)/kurs)-(deposit/kurs))*kurs)+kurs)
}
currencyExchange(10, 50)

const currencyExchange2 = (kurs, dollar) => {
    let kursFinal = kurs*0.03+kurs
    let myFinalDollar = (dollar/kurs)*kursFinal
    console.log(myFinalDollar)
    console.log(kursFinal)
}
currencyExchange2(2, 20)

function validateWord(s){
    if (s.length%2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(validateWord("abc!abc"))

function validateWord2(s){
        let counts = {};
        for(let c of s.toLowerCase()){
            if(counts[c] === undefined){counts[c] = 0;}
            counts[c]++;
        }
        return Math.max(...Object.values(counts)) === Math.min(...Object.values(counts));
}

console.log(validateWord2("##zzssPp99xxiicc"))
