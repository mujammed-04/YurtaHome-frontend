import { Link } from "react-router-dom";
import { Basket, Like, Logo, Search, User } from "../../../shared/icons";
import { Button, Typography } from "@mui/material";
import { CInput } from "../../../shared/ui";

export default function HeaderComponent() {
    return (
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
                    <CInput image={Search} />
                    <Link to='/'><img src={User} alt="user" /></Link>
                    <Link to='/'><img src={Like} alt="user" /></Link>
                    <Link to='/'><img src={Basket} alt="user" /></Link>
                    <Button sx={{
                        bgcolor: '#1591EA', padding: '5 10px', color: 'white',
                        fontFamily: 'Inter', lineHeight: '22.4px', fontWeight: '600', textTransform: 'none'
                    }}>Поиск</Button>
                </div>
            </div>
        </div>
    );
}