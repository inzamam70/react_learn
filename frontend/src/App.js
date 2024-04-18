import logo from './logo.svg';
import './App.css';
import './style/css/style.css';
import { Header } from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header /><div className='container'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
        </Routes>
       </div>
    
      </BrowserRouter>
    
    </div>
  );
}

export default App;
