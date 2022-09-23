function a() {
    console.log("Estou executando a função a()")
}

function b() {
    console.log("Estou executando a função b()")
}

function c() {
    console.log("Estou executando a função c()")
    a()
    b()
}

// a(), b(), c()
// c(), b(), a()
c()