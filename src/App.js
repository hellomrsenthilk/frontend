import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import AddVaran from './component/AddVaran';
import ViewVaran from './component/ViewVaran';
import SearchVaran from './component/SearchVaran';
import RegisterVaran from './component/RegisterVaran';
import Varan from './component/Varan';
import UpdateVaran from './component/UpdateVaran';

function App() {

  return (
    <BrowserRouter>        
    <Routes>            
      <Route path='/' element={<Login />}></Route>           
       <Route path='/signup' element={<Signup />}></Route>            
       <Route path='/home' element={<Home />}></Route>   
       <Route path='/registerVaran' element={<RegisterVaran />}></Route>             
       <Route path='/addVaran' element={<AddVaran />}></Route>        
       <Route path='/varan' element={<Varan />}></Route>        
       <Route path='/varan/viewVaran/:id' element={<ViewVaran />}></Route>        
       <Route path='/viewVaran' element={<ViewVaran />}></Route>        
       <Route path='/searchVaran' element={<SearchVaran />}></Route>        
       <Route path='/updateVaran/:id' element={<UpdateVaran />}></Route>        
       <Route path='/varan/updateVaran/:id' element={<UpdateVaran />}></Route>        
    </Routes>    
  </BrowserRouter>
  );
}

export default App;
