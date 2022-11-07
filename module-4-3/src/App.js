import logo from './logo.svg';
import './App.css';
import Onclick from './module-3/Onclick';
import Compontdidmount from './module-4-classcomponent/Compontdidmount';
import Compontdidupdate from './module-4-classcomponent/Compontdidupdate';
import Shouldcomponentupdate from './module-4-classcomponent/Shouldcomponentupdate';
import Componentwillunmount from './module-4-classcomponent/Componentwillunmount';
import Listview from './module-3/Listview';
import Usestate from './module-4-classcomponent/Usestate';
import Useref from './module-4-classcomponent/Useref';
import Userefff from './module-4-classcomponent/Useref';
import UseEffect from './module-4-classcomponent/UseEffect';
// import Navbar from './module-6/Navbar';
import Navbar from './module-7/redux/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";


import Top2 from './module-6/Top2';
import Tabelsearch from './module-7/Tabelsearch';
import Login7 from './module-7/redux/Login7';
import Signup7 from './module-7/redux/Signup7';

function App() {
  return (
   <>
   {/* <Onclick /> */}
   {/* <Compontdidmount /> */}
   {/* <Compontdidupdate/> */}
   {/* <Shouldcomponentupdate/> */}
   {/* <Componentwillunmount /> */}
   {/* <Listview /> */}
   {/* <Usestate /> */}
   {/* <UseEffect /> */}
   {/* <Userefff /> */}

{/* <Top2 /> */}
{/* <Navbar/> */}


{/* ==============>module-7  ===================== */}
{/* <Tabelsearch/> */}


<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/login' element={<Login7 />}/>
  <Route path='/signup' element={<Signup7 />}/>
</Routes>

</BrowserRouter>


   </>
  );
}

export default App;
