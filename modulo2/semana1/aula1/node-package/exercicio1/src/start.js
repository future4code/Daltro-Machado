const userName = process.argv[2]
const userAge = Number(process.argv[3])
const futureAge = userAge + 7

console.log("Olá, " + userName + "! Você tem " + userAge + "anos!");
console.log("Daqui a 7 anos você terá " + futureAge + " anos!");