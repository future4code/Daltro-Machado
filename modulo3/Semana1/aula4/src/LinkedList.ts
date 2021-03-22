export class ListNode {
   constructor(
      public value: any,
      public next: ListNode | null = null
   ) { }
}

const epps: ListNode = new ListNode("Epss")
const dumont: ListNode = new ListNode("Dumont", epps)

// console.log({
//    epps,
//    dumont
// });

export class LinkedList {
   constructor(
      public start: ListNode | null = null
   ) { }

   public addToTail = (
      value: any
   ): void => {
      if (!this.start) {
         this.start = new ListNode(value)
      } else {
         let currentNode = this.start

         while (currentNode.next) {
            currentNode = currentNode.next
         }

         currentNode.next = new ListNode(value)
      }
   }

   public find = (
      value: any
   ) => {

      let currentNode = this.start

      while (currentNode && currentNode.value !== value) {
         currentNode = currentNode.next
      }

      return currentNode
   }
}

const labenuClasses: LinkedList = new LinkedList()
// console.log(labenuClasses.find("Bouman"));


labenuClasses.addToTail("Dumont")
labenuClasses.addToTail("Epps")
labenuClasses.addToTail("Cruz")

// console.log(labenuClasses.find("Bouman"));
// console.log(labenuClasses.find("Dumont"));
// console.log(
//    JSON.stringify(labenuClasses, null, 2)
// );
