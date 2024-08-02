import { List } from "@mui/material";

import { EIcon } from "../../../entities/icons/entity";
import IconItem from "../../../entities/icons/IconItem";
import { Cleaning, Deal, Delivery, Discount } from "../../../shared/icons";

export default function Icons() {
  const items: EIcon[] = [
    { id: 1, image: Deal, name: "Выгодная сделка" },
    { id: 2, image: Delivery, name: "Доставка" },
    { id: 3, image: Cleaning, name: "Уборка помещении" },
    { id: 4, image: Discount, name: "Сегодняшняя скидка" },
    { id: 5, image: Discount, name: "Сегодняшняя скидка" },
    { id: 6, image: Discount, name: "Сегодняшняя скидка" },
    { id: 7, image: Discount, name: "Сегодняшняя скидка" },
    { id: 8, image: Discount, name: "Сегодняшняя скидка" },
  ];

  return (
    <List className="icons">
      {items.map((item) => (
        <IconItem icon={item} key={item.id} />
      ))}
    </List>
  );
}
