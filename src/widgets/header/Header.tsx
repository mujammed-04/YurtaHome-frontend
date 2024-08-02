import "./header.scss";

import Navbar from "../navbar/Navbar";
import HeaderComponent from "./components/HeaderComponent";

export default function Header() {
  return (
    <header className="header">
      <HeaderComponent />
      <Navbar />
    </header>
  );
}
