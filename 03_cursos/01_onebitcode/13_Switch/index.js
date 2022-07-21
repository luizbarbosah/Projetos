let distanceInLY = prompt ("Digite a distância em anos-luz")

let chosenOption = prompt ("Para qual unidade deseja converter?\n1. Parsec (pc)\n2. Unidade Astonômica (AU)" +
                           "\n3. Quilômetros (Km)\n\n (Digite o número da opção desejada)")

let chosenUnity
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = distanceInLY * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12) // O Math.pow(10, 12) serve para elevar a potencia //
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
        break;
}

alert ("Distância em Anos-luz: " + distanceInLY + "\n" + chosenUnity + ": " + convertedDistance)