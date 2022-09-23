// dá erro
const x = 10

try {
    x = 10
} catch (error) {
    console.log(error)
}

console.log("Passei da validação!")

// dá certo
let y = 10

try {
    y = 10
} catch (error) {
    console.log(error)
}

console.log("Passei da validação!")