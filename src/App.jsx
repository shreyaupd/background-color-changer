import { useState } from "react"
function App() {
  const [colour, setColour] = useState("black")//colour is initial state and setcolour helps to update the current state

  return (
    <>
      <div className=" w-full h-screen duration-200" style={{backgroundColor: colour}}>
      </div>
      <div className="fixed flex flex-wrap justify-center align-middle bottom-12 inset-x-0">
        <div className="flex justify-center gap-10 bg-white p-1 rounded-xl">
         <button onClick={()=>setColour("red") } className=" px-6 py-2 outline-none rounded-xl text-white" style={{backgroundColor:"red"}}>
            red
         </button>
         <button onClick={()=>setColour("green") }  className=" px-6 py-2 outline-none rounded-xl text-white" style={{backgroundColor:"green"}}>
            green
         </button>
         <button onClick={()=>setColour("blue") }  className=" px-6 py-2 outline-none rounded-xl text-white" style={{backgroundColor:"blue"}}>
            blue
         </button>
         <button onClick={()=>setColour("pink") }  className=" px-6 py-2 outline-none rounded-xl text-white" style={{backgroundColor:"pink"}}>
            pink
         </button>
         <button onClick={()=>setColour("grey") }  className=" px-6 py-2 outline-none rounded-xl text-white" style={{backgroundColor:"grey"}}>
            grey
         </button>
         <button onClick={()=>setColour("gold") }  className=" px-6 py-2 outline-none rounded-xl text-white" style={{backgroundColor:"gold"}}>
            gold
         </button>
         <button onClick={()=>setColour("orange") }  className=" px-6 py-2 outline-none rounded-xl text-white" style={{backgroundColor:"orange"}}>
           orange
         </button>
        </div>
      </div>
    </>
  )
}

export default App
