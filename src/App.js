import { BrowserRouter,Routes,Route} from 'react-router-dom'
//compenent 
import LandingPage from "./pages/LandingPage";
import Profile from './pages/Profile';
import DetailProduct from './pages/DetailProduct';
import Cart from './pages/Cart';
import Transaction from './pages/Transaction';
import AddProduct from './pages/AddProduct';
import ListProduct from './pages/ListProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

// import './styles/index.css'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<LandingPage/>}/>
      <Route  path="/profile" element={<Profile/>}/>
      <Route  path="/detail-product/:id" element={<DetailProduct/>}/>
      <Route  path="/cart" element={<Cart/>}/>
      <Route  path="/transaction" element={<Transaction/>}/>
      <Route  path="/list-product" element={<ListProduct/>}/>
      <Route  path="/add-product" element={<AddProduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
