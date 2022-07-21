let pilotoName = prompt("Qual seu nome, piloto?")

let velocity = 0

let newVelocity = prompt("A que velocidade você gostaria de acelerar?")

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "Km/s")

if(confirmVelocity) {
    velocity = newVelocity
}

if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) {
    alert("Você está devagar. Podemos acelerar.")
} else if(velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if(velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Piloto: " + pilotoName + "\nVelocidade: " + velocity + "km/s")