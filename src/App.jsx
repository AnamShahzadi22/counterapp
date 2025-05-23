import Counter1 from "./Components/Counter1"

import './App.css'
import Counter2 from "./Components/Counter2"

function App() {
  return (
    <>
    <h1>  Counter App with useState Hook</h1>
    <Counter1/>

     <h1>  Counter App with useReducer Hook</h1>
    <Counter2/>

    </>
  )
 

 
}

export default App
