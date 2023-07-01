import logo from './logo.svg';
import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import HomePage from './Main_Components/home_page';
import BasicExample from './components/navBar';
import Login from './components/login';
function App() {
  return (
    <>
      <BasicExample />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
