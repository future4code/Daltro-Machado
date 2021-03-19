const printArray = (
   array: number[],
   index = 0
): void | undefined => {

   if (index >= array.length) return

   console.log(array[index])

   printArray(array, index + 1)
}

const input = [2, 2345, 231, 6, 100]
printArray(input)
