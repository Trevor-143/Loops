//looping

for (let i = 0; i < 6; i++) {
    console.log("This is Forward..." + i)
}

console.log("-------------------------------------")

for (let i = 0; i < 6; i++) {
    console.log("This is Forward..." + i)
    if (i === 2) {
        break
    }
}

console.log("-------------------------------------")

for (let i = 5; i > 0; i--) {
    console.log("This is Backward..." + i)
}

console.log("-------------------------------------")

// with arrays


const names = [ "John", "Trevor", "James", "Manroy", "Jason", ]

for (let i = 0; i < names.length; i++ ) {
    console.log("This is " + names[i])
}

console.log("-------------------------------------")

// another way

const people = [ "May", "Dave", "Marley", "Leon", "Doris", ]

for (person of people) {
    console.log("This is " + person)
}

console.log("-------------------------------------")

const pips = {fistName: "Trevor", lastName: "Arapu"};

for (pip in pips) {
    console.log(pips[pip])
};

console.log("-------------------------------------")

let counter = 0
while (counter < 10) {
    console.log("The counter is at " + counter)
    counter += 2
}

console.log("-------------------------------------")

let num = 0
do {
    num ++
    console.log("Now " + num)
} while (num < 11)

console.log("-------------------------------------")

const animals = ["Cat", "Dog", "Horse", "Tiger", "Lion", "Sheep"]

animals.forEach(animal => {
    console.log("This is a " + animal)
})