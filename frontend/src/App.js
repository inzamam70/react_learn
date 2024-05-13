import logo from './logo.svg';
import './App.css';
import './style/css/style.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Create from './pages/create';
import Edit from './pages/edit';
import View from './pages/view';
import Contact from './pages/contact';
import Contacts from './pages/contacts';
import { Sidenav } from './components/sidenav';
import { Content } from './components/content';
import { Template } from './components/template';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidenav />
        <div className='container'>
          <Routes>
            <Route path='/*' element={<Template />} />
          </Routes>

        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
