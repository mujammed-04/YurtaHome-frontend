import { Link } from 'react-router-dom';
import { Basket, Like, Logo, User } from '../../shared/icons';
import { Button, Typography } from '@mui/material';
import './header.scss'
import { CInput } from '../../shared/ui';
import { useTranslation } from 'react-i18next';
export default function Header() {
    const { t } = useTranslation('header');

    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <div className="logo">
                        <Link to='/'><img src={Logo} alt="logo" /></Link>
                        <div className="subtitle">
                            <Typography>{t('community')}</Typography>
                            <Typography>{t('roomInterior')}</Typography>
                        </div>
                    </div>
                    <div className="buttons">
                        <CInput placeholder={t('search')} className='search'/>
                        <Link to='/'><img src={User} alt="user" /></Link>
                        <Link to='/'><img src={Like} alt="user" /></Link>
                        <Link to='/'><img src={Basket} alt="user" /></Link>
                        <Button>{t('letter')}</Button>
                    </div>
                </div>
                
            </div>
        </header>
    );
}