
import AddProduct from './Components/AddProduct/AddProduct'
import { Route, Routes } from 'react-router'
import Admin from './Components/Admin/Admin'
import Dashbord from './Components/Dasabord/Dashbord'
import Products from './Components/Products/Products'
import Orders from './Components/Order/Orders'
import EditProducts from './Components/EditProducts/EditProducts'
import Signin from './Components/Authontication/Signin/Signin'
import ElectronicFrom from './Components/AddProduct/ElectronicFrom'
import FashionForm from './Components/AddProduct/FashionForm'
import GroceryForm from './Components/AddProduct/GroceryForm'
import HomeFurniture from './Components/AddProduct/HomeFurniture'
import Singin from './Components/Authontication/Signin/Signin'
import Login from './Components/Login/login'



function App() {


  return (
    <>
   
      <Admin />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/addevent" element={<AddProduct />} />
        {/* <Route path='/' element = {<Dashbord />} /> */}
        {/* <Route path='/singin' element = {<Singin />} /> */}
        {/* <Route path='/singin' element = {<Singin />} /> */}
        <Route path='/event' element={<Products/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/edit' element={<EditProducts/>}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='electronic' element={<ElectronicFrom/> } />
        <Route path='/fashoin' element={<FashionForm/>} />
        <Route path='/furniture' element={<HomeFurniture />} />
        <Route path='/grocery' element={<GroceryForm/>} />
      </Routes>


    </>
  )
}

export default App
