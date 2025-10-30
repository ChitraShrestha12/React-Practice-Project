import { useState } from "react"
import MyButton from "./Components/MyButton"

type AppProps={
  initialValue:number
  
}
function App({initialValue=0}:AppProps) {
  const [count,setCount]=useState<number>(initialValue)
  return (
    <main>
      <h1>{count}</h1>
      <MyButton value="+" onClick={()=>setCount(prev=>prev+1)}/>
      <MyButton value="-" onClick={()=>setCount(prev=>prev-1)}/>
    </main>
  )
}

export default App