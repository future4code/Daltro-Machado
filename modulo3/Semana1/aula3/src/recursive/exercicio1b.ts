const printIntegersDesc = (integer: number) => {
    if (integer >= 0) {
      console.log(integer);
      printIntegersDesc(integer - 1);
    }
  };
 
  printIntegersDesc(5);