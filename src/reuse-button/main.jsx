import { StrictMode } from 'react'
import Button from './Button'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button text={"Login"} logical={()=> alert("Welcome")}/>
    <Button text={"Register"} logical={() => alert("Register here")}/>
  </StrictMode>
)