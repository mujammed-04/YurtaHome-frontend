import './header.scss'
import HeaderComponent from './components/HeaderComponent';
import Navbar from '../navbar/Navbar';

export default function Header() {
    return (
        <header className='header'>
            <HeaderComponent />
            <Navbar/>
        </header>
    );
}
