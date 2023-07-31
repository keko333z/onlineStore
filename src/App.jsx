import { Header } from './components/Header'
import { Home } from './components/Home'
import { Order } from './components/Order'
import { Checkout } from "./components/Checkout";
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import './App.css'


function App() {
const [deliveryInfo, setDeliveryInfo] = useState(null)

  return <>
  <Header />
  <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/checkout' element={<Checkout  setDeliveryInfo={setDeliveryInfo} />}></Route>
        <Route path='/your-order'  element={<Order deliveryInfo={deliveryInfo} />}/>
  </Routes>
  
  </>

}

export default App
