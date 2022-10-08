const {
   sum,
   multiply,
   flavour,
   searchTrafficLights,
   forEach,
   promise}=require('../main');

   it('Function sum should sum two numbers',()=>{
   expect(sum(1,2)).toBe(3);
})

it('Function multiply should multiply two numbers',()=>{
   const testToBeDone=multiply(1,1,1,0)
   expect(multiply(testToBeDone)).toBe(0)
})

describe('Multiplication',()=>{
   it('Multiply two numbers',()=>{
      expect(multiply(1,2)).toBe(2)
   })
   it('Multiply 5 numbers',()=>{
      expect(multiply(1,2,3,4)).toBe(24)
   })
})

it('Return true',()=>{
   expect(true).toBe(true)
})

it('Answer not to be salty',()=>{
   expect(flavour('Sugar')).not.toBe('Salty')
})

it('Verify human',()=>{
   expect(()=>{
      searchTrafficLights()
   }).toThrow()
})

it('return the length of the mock function',()=>{
   const mockCallBack=jest.fn(x=>1+x);
   forEach([0,1,2,3,4,5,6,7,8,9],mockCallBack);
   expect(mockCallBack.mock.calls.length).toBe(10)
})

it('Returns hello',()=>{
   const greeting=()=>{
      console.log('Hello');
   }
   return expect(promise.resolve(greeting)).resolves.toBe(console.log('Hello'))
})