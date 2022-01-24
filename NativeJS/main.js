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

/*function myFilter(array, callback) {
    const filteredArr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
         filteredArr.push(array[i]);
        };
    }
    return filteredArr;
}*/

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
}