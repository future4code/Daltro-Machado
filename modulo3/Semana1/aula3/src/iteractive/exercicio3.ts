export const integerSum = (integer: number): number => {
    let finalSum: number = 0
    for (let index = 0; index <= integer; index++) {
        finalSum += index;
    }
    return finalSum;
  };
 
  console.log(integerSum(30));