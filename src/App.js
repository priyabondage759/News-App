
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {NewsApp} from "./Pages/NewsApp"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Register } from './Components/Register';
import { Login } from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/news' element={<NewsApp/>}/>
      </Routes>
      </BrowserRouter>
     {/* <NewsApp/> */}
    </div>
  );
}

export default App;
