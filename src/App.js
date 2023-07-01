import logo from './logo.svg';
import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import HomePage from './Main_Components/home_page';
import BasicExample from './components/navBar';
import LR_form from './components/lr_form';
function App() {
  return (
    <>
      <BasicExample />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<HomePage />} />
          <Route path='/login' element={<LR_form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
