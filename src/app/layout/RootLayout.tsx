import { Outlet } from "react-router-dom";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";

export default function RootLayout(){
    return(
        <div className="root-layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}