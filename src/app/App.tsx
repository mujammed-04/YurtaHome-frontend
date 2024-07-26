import HomePage from '../pages/homepage/HomePage';
import Footer from '../widgets/footer/Footer';
import Header from '../widgets/header/Header';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <HomePage/>
      <Footer/>
    </BrowserRouter>
  );
}