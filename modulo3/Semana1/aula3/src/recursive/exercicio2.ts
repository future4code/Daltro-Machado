export const integerSum = (integer: number, finalSum: number = 0): number => {
    if (integer === 0) {
      return finalSum;
    }
    return integerSum(integer - 1, finalSum + integer);
  };
 

  console.log(integerSum(30));
