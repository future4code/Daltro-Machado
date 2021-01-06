const operation = process.argv[2]
const firstTerm = Number(process.argv[3])
const secondTerm = Number(process.argv[4])
const add = firstTerm + secondTerm
const sub = firstTerm - secondTerm
const mult = firstTerm * secondTerm
const div = firstTerm / secondTerm

switch (operation) {
    case "add":
        console.log("Resposta: " + add)    
        break;
    case "sub":
        console.log("Resposta: " + sub)    
        break;
    case "mult":
        console.log("Resposta: " + mult)    
        break;
    case "div":
        console.log("Resposta: " + div)    
        break;
    default:
        break;
}
