import { useState } from "react"

export default function CounterTest(){
    const[count, setCount] = useState(0)
    let counts = 0
    return(
        <button onClick={()=>{
            Alerts()
            AlertsNama()
        }}>Tekan</button>
        )
}
function Alerts(){
    alert("halo kamu")
}
function AlertsNama(){
    alert("Nama saya Aldi")
}