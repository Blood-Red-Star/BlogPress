import logo from './logo.svg';
import './App.css';
import "./components/NavBar.css"
import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import HomePage from './components/home_page';
import BasicExample from './components/navBar';
function App() {
  return (
    <>
      <BasicExample />
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}></Route>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='*' element={<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
