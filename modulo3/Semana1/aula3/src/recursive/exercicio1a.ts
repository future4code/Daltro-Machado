const printIntegersAsc = (integer: number) => {
   if (integer >= 0) {
     printIntegersAsc(integer - 1);
     console.log(integer);
   }
 };

 printIntegersAsc(5);