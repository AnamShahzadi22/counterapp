import React from 'react';
import { useReducer } from 'react';

function Counter2() {
    let  initalstate = 0;
    const reducer =(state,action)=> {
        switch(action.type){
        case 'INC':
            return state+1;
          

              case 'DEC':

            return  state==0? 0:
            state-1;
           
            default:
                return state;
    


        }

    }

    const [count, dispatch] = useReducer(reducer, initalstate)

  return (
  <>

         <p> Counter {count}</p>
    
    <button id='btn1' onClick={() => dispatch({ type: "INC" })}>Increment </button>

    
    <button id='btn2'onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
    </> )
}

export default Counter2