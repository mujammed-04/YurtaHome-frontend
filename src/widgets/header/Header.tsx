import { Link } from 'react-router-dom';
import { Basket, Like, Logo, User } from '../../shared/icons';
import { Button, Typography } from '@mui/material';
import './header.scss'
import { CInput } from '../../shared/ui';

export default function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <div className="logo">
                        <Link to='/'><img src={Logo} alt="logo" /></Link>
                        <div className="subtitle">
                            <Typography>Форум</Typography>
                            <Typography>Интерьер комнаты</Typography>
                        </div>
                    </div>
                    <div className="buttons">
                        <CInput placeholder='Письмо' className='search'/>
                        <Link to='/'><img src={User} alt="user" /></Link>
                        <Link to='/'><img src={Like} alt="user" /></Link>
                        <Link to='/'><img src={Basket} alt="user" /></Link>
                        <Button>Поиск</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
