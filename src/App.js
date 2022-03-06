import './App.css';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Topbar from './components/Topbar/Topbar';
import Sidbar from './components/Sidbar/Sidbar';
import Home from './pages/home/home'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import Newuser from './pages/newUser/Newuser';
import ProductList from './pages/productList/productList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/Newproduct';
function App() {
  return (
    <Router>
     <Topbar/>
    <div className='container'>
     <Sidbar/>
     <Routes>
      <Route exact path='/' element={ <Home/>}/>
      <Route path='/users' element={<UserList/>}/>
      <Route path='/user/:userId' element={<User/>}/>
      <Route path='/newuser' element={<Newuser/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/newproduct' element={<NewProduct/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
