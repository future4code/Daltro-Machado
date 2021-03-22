const hogwartsHouses = new Array(
   "corvinal",
   "lufa-lufa",
   "grifinória",
   "sonserina"
)
// console.log(hogwartsHouses);

hogwartsHouses[hogwartsHouses.length] = "casa secreta" // implementação do 'push'
// console.log(hogwartsHouses);

hogwartsHouses.length = 3
// console.log(hogwartsHouses);

hogwartsHouses.length-- // implementação do 'pop'
// console.log(hogwartsHouses);

const spliceRaiz = (
   array: Array<any>,
   index: number
) => {
   const removedItem = array[index]

   for (let i = index; i < array.length; i++) {
      array[i] = array[i + 1]
   }

   array.length--

   return removedItem
}

const grifinoria = spliceRaiz(hogwartsHouses, 2)

// console.log({
//    grifinoria,
//    hogwartsHouses
// });
