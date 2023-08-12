import { Routes, Route } from 'react-router'
import './App.css'
import { Dashboard } from './Pages/Dashboard'
import { SideBar } from './Components/SideBar'
import { Departments } from './Pages/Departments'
import { Products } from './Pages/Products'
import { ProductPage } from './Pages/ProductPage'
import { NewItemForm } from './Pages/NewItemForm'

function App() {
  return (
    <div style={{display : "flex"}}>
      <div style={{width : "15%", height : "100vh"}}>
        <SideBar/>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/departments" element={<Departments/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/newItem" element={<NewItemForm/>}/>
      </Routes>
    </div>
  )
}

export default App
