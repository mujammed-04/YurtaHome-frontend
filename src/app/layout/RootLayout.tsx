import { Outlet } from "react-router-dom";

import Footer from "../../widgets/footer/Footer";
import Header from "../../widgets/header/Header";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
