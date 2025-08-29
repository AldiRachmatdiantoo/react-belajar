import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login'
import FriendList from './FriendList'
import ListTugas from './ListTugas'
import CounterTest from './CounterTest'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterTest></CounterTest>
  </StrictMode>,
)
