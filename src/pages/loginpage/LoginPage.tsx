import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";

import { Logo } from "../../shared/icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = () => {
    // Логика обработки логина
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("rememberMe:", rememberMe);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        fontFamily: "Inter",
      }}
    >
      <Link href="/">
        <img src={Logo} alt="logo" width="120px" height="70px" />
      </Link>
      <TextField
        label="Эл.почта"
        variant="outlined"
        style={{ width: "30%" }}
        required
        size="small"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormControl
        variant="outlined"
        style={{ width: "30%" }}
        required
        size="small"
      >
        <InputLabel htmlFor="password">Пароль</InputLabel>
        <OutlinedInput
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          label="Пароль"
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button
        style={{
          backgroundColor: "#1591EA",
          padding: "5px",
          color: "white",
          width: "30%",
          fontFamily: "Inter",
          lineHeight: "22.4px",
          fontWeight: "600",
          textTransform: "none",
        }}
        onClick={handleLogin}
      >
        Войти
      </Button>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "30%",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              color="primary"
            />
          }
          label="Запомнить меня"
        />
        <Link href="login/forgot" color="#000" style={{ fontSize: "16px" }}>
          Забыли пароль
        </Link>
      </div>

      <p style={{ fontSize: "16px" }}>
        Впервые здесь?{" "}
        <Link href="register" color="#000" style={{ fontSize: "16px" }}>
          Зарегистрироваться
        </Link>
      </p>
    </div>
  );
}
