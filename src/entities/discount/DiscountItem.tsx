import { Typography } from "@mui/material";
import React from "react";

import { Message, Star, StarY } from "../../shared/icons";
import { Discount, useTimeLeft } from "./entity";
import styles from "./style.module.css";

interface Props {
  discount: Discount;
}

const DiscountItem: React.FC<Props> = ({ discount }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const time = discount.discountTime
    ? useTimeLeft(discount.discountTime)
    : null;

  const StarRating = ({ rating }: { rating: number }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? StarY : Star}
          alt={`${i <= rating ? "filled" : "unfilled"} star`}
        />,
      );
    }

    return <div>{stars}</div>;
  };

  return (
    <div className={styles.discountCard}>
      <div className={styles.discountImage}>
        <img src={discount.image} alt="" />
        <div className={styles.discountHeader}>
          <p className={styles.discountText}>
            {time ? `${time.hours}:${time.minutes}:${time.seconds}` : "N/A"}
          </p>
        </div>
      </div>
      <div className={styles.discountInfo}>
        <Typography
          sx={{
            color: "#6E6E6E",
            fontFamily: "Inter",
            fontWeight: "400",
            fontSize: "14px",
          }}
        >{`Категория (${discount.category})`}</Typography>
        <Typography
          sx={{
            color: "#4B4B4B",
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          {discount.name}
        </Typography>
        <div className={styles.grades}>
          {discount.rate && <StarRating rating={discount.rate} />}
          <div style={{ display: "flex", gap: "5px" }}>
            <img src={Message} alt="" />
            <Typography
              sx={{ fontSize: "12px", color: "#6E6E6E", fontFamily: "Inter" }}
            >
              {discount.comments} Отзыва
            </Typography>
          </div>
        </div>
        <div className={styles.pricing}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <p
              style={{
                fontSize: "20px",
                color: "#4B4B4B",
                fontFamily: "Inter",
                fontWeight: "700",
              }}
            >
              {discount.newPrice} тг
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#6E6E6E",
                fontFamily: "Inter",
                fontWeight: "400",
                textDecoration: "line-through",
              }}
            >
              {discount.oldPrice} тг
            </p>
          </div>
          <button className={styles.button}>Купить</button>
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
