function sum(num1,num2){
   return num1+num2;
}

function multiply(...num){
   const product=num.reduce((acc,curVal)=>{
      acc=acc*=curVal;
      return acc;
   })
   return product;
}

function flavour(taste){
   let answer;
   switch(taste){
      case 'acid':
         answer='Acid'
         break;
      case 'Sugar':
         answer='Sugar'
         break;
      case 'hot':
      case 'spicy':
         answer='Indian'
         break;
      default:
         answer='salty'
         break;
   }
   return answer;
}

function searchTrafficLights(){
   const human=false;
   if(!human){
      throw new Error('We have been caught');
   }
}

function forEach(item,callback){
   for(let i=0;i<item.length;i++){
      callback(item[i])
   }
}

function promise(time,work=0000){
   const condition=true;
   return new Promise((resolve,reject)=>{
      if(condition){
         setTimeout(()=>{
            resolve(work())
         },time)
      }else{
         reject('Could not fetck')
      }
   })
}

module.exports={
   sum,
   multiply,
   flavour,
   searchTrafficLights,
   forEach,
   promise,
};