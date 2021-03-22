  export const findMissingNumber = (array: number[]): number => {
    let oneToHundredSum = 0;
    for (let index = 1; index <= 10; index++) {
      oneToHundredSum += index;
    }
    let arraySum = 0;
    for (const element of array) {
      arraySum += element;
    }
    return oneToHundredSum - arraySum;
  };

  console.log(findMissingNumber([1,2,3,5,6,7,4,9,10]))