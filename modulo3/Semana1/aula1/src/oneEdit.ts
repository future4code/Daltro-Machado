function oneEdit(string1: string, string2: string): boolean {
    
if (Math.abs(string2.length - string1.length) > 1) {
    
    return false
}


if (string1.length > string2.length) {
    
    return string1.includes(string2)
}


if (string2.length > string1.length) {
    
    return string2.includes(string1)
}

let count = 0
for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) count++
}

return count === 1
}

console.log(oneEdit("banana", "banena"))