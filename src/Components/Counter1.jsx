import React from 'react';
import { useState } from 'react';

function Counter1() {
const  [count, setCount] = useState(0);

const Increment = ()=>
{
    setCount(count+1);
    console.log( `Count is : ${count}`);
    
}


const Decrement= ()=>{
    if(count === 0){
        setCount(0);
    }
    else{
 setCount(count-1);
    }
   
    console.log( `Count is : ${count}`);
}

  return (
    <>
    
    <p> Counter {count}</p>
    
    <button id='btn1' onClick={Increment}>Increment</button>
    
    <button id='btn2' onClick={Decrement}>Decrement</button>
    </>
  )
}

export default Counter1