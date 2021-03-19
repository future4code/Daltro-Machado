class Stack {
   constructor(
      public frames: any[] = []
   ) { }

   public isEmpty = (): boolean => this.frames.length === 0

   public push = (
      value: any
   ):void =>{
      const index = this.frames.length

      this.frames[index] = value
   }

   public pop = ():any =>{
      const index = this.frames.length - 1

      const removedFrame = this.frames[index]

      this.frames.length--

      return removedFrame
   }
}

const stack: Stack = new Stack()
// console.log(stack);

stack.push("Dumont")
stack.push("Epps")

// console.log(stack);

const lastFrame = stack.pop()
// console.log({
//    stack,
//    lastFrame
// });