import { List } from "@mui/material";
import { Cleaning, Deal, Delivery, Discount } from "../../../shared/icons";
import { useTranslation } from "react-i18next";
import IconItem from "../../../entities/icons/IconItem";
import { EIcon } from "../../../entities/icons/entity";

export default function Icons() {
    
    const { t } = useTranslation("icons");

    const items: EIcon[] = [
        { id: 1, image: Deal, name: t("icons:deal") },
        { id: 2, image: Delivery, name: t('delivery') },
        { id: 3, image: Cleaning, name: t('cleaning') },
        { id: 4, image: Discount, name: t('discount') },
        { id: 5, image: Discount, name: t('discount') },
        { id: 6, image: Discount, name: t('discount') },
        { id: 7, image: Discount, name: t('discount') },
        { id: 8, image: Discount, name: t('discount') },
    ];

    return (
        <List className="icons">
            {items.map((item) => (
                <IconItem icon={item} key={item.id }/>
            ))}
        </List>
    );
}
