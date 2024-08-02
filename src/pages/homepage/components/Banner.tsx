import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";

import {
  bBanner,
  sBanner1,
  sBanner2,
  sBanner3,
  sBanner4,
} from "../../../shared/images";

interface Image {
  id: number;
  src: string;
  alt: string;
  color: string;
  title: string;
  subtitle: string;
}

export default function Banner() {
  const [bgColor, setBgColor] = useState<string>("#E2F4F8");

  const images: Image[] = [
    {
      id: 1,
      src: sBanner1,
      alt: "banner 1",
      color: "#E2F4F8",
      title: "Тренды в дизайне",
      subtitle: "Цвета на 2024 год",
    },
    {
      id: 2,
      src: sBanner2,
      alt: "banner 2",
      color: "#e1abc1",
      title: "Тренды в дизайне",
      subtitle: "Цвета на 2024 год",
    },
    {
      id: 3,
      src: sBanner3,
      alt: "banner 3",
      color: "#dac5a4",
      title: "Тренды в дизайне",
      subtitle: "Цвета на 2024 год",
    },
    {
      id: 4,
      src: sBanner4,
      alt: "banner 4",
      color: "#edb7e7",
      title: "Тренды в дизайне",
      subtitle: "Цвета на 2024 год",
    },
  ];

  const handleSlideChange = (now?: number) => {
    if (now !== undefined) {
      setBgColor(images[now].color);
    }
  };

  return (
    <div className="banner">
      <div className="big-banner">
        <img src={bBanner} alt="Big Banner" className="zoom" />
      </div>
      <Box
        className="small-banner"
        sx={{
          width: 1,
          backgroundColor: bgColor,
          transition: "background-color 0.5s",
        }}
      >
        <Carousel
          className="crls-item"
          sx={{ width: 1 }}
          indicators={false}
          onChange={handleSlideChange}
        >
          {images.map((item) => (
            <Box key={item.id} sx={{ textAlign: "center", gap: "0" }}>
              <Typography
                component="p"
                sx={{
                  fontFamily: "Inter sans-serif",
                  fontSize: "24px",
                  fontWeight: "500",
                }}
              >
                {item.title}
              </Typography>
              <img src={item.src} alt={item.alt} style={{ width: "80%" }} />
              <Typography
                component="p"
                sx={{
                  fontFamily: "Inter sans-serif",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                {item.subtitle}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
    </div>
  );
}
