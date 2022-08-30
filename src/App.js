import { BrowserRouter,Routes,Route} from 'react-router-dom'
//compenent 
import LandingPage from "./pages/LandingPage";
import Profile from './pages/Profile';
import DetailProduct from './pages/DetailProduct';
import Cart from './pages/Profile';
import Transaction from './pages/Profile';
import AddProduct from './pages/Profile';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<LandingPage/>}/>
      <Route  path="/profile" element={<Profile/>}/>
      <Route  path="/detail-product/:id" element={<DetailProduct/>}/>
      <Route  path="/cart" element={<Cart/>}/>
      <Route  path="/transaction" element={<Transaction/>}/>
      <Route  path="/add-product" element={<AddProduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
