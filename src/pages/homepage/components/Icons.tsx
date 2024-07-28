import { List } from "@mui/material";
import { Cleaning, Deal, Delivery, Discount } from "../../../shared/icons";
import { useTranslation } from "react-i18next";

export default function Icons(){
    const { t } = useTranslation('icons');
    const items = [
        { src: Deal, text: t('deal') },
        { src: Delivery, text: t('delivery') },
        { src: Cleaning, text: t('cleaning') },
        { src: Discount, text: t('discount') },
        { src: Discount, text: t('discount') },
        { src: Discount, text: t('discount') },
        { src: Discount, text: t('discount') },
        { src: Discount, text: t('discount') },
    ]

    return(
        <List className="icons">
            {items.map(item => <div className="icon-item">
                <div className="icon-image">
                    <img src={item.src} alt="" />
                </div>
                <p>{item.text}</p>
            </div>)}
        </List>
    );
}