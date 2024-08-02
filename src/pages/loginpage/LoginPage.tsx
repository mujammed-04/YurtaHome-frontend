import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Логика обработки логина
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <TextField
        label="Эл.почта"
        variant="outlined"
        style={{ width: "30%" }}
        required
        size="small"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Пароль"
        type="password"
        variant="outlined"
        style={{ width: "30%" }}
        required
        size="small"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        style={{
          backgroundColor: "#1591EA",
          padding: "5px 15px",
          color: "white",
          fontFamily: "Inter",
          lineHeight: "22.4px",
          fontWeight: "600",
          textTransform: "none",
        }}
        onClick={handleLogin}
      >
        Войти
      </Button>
      <p>Регистрация</p>
    </div>
  );
}
