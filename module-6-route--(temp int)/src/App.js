import logo from './logo.svg';
import './App.css';
import Header from './fam/Header';
import Footer from './fam/Footer';
import Home from './fam/Home';
import Products from './fam/Products';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Login from './fam/Login';
import Signup from './fam/Signup';
import Single from './fam/Single';
import Crud from './fam/Crud';
import Adduser from './fam/Adduser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/crud' element={<Crud />} />
          <Route path='/adduser' element={<Adduser />} />
          <Route path='/adduser/:id' element={<Adduser />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Single/:id' element={<Single />} />
        </Routes>


        {/* <Products /> */}

      </BrowserRouter>
    </>
  )
}

export default App;
