import { Outlet } from "react-router-dom";

import Footer from "../../widgets/footer/Footer";
import Header from "../../widgets/header/Header";

import { Box } from "@mui/material";

export default function RootLayout(){
    return(
        <div className="root-layout">
            <Header />
            <Box sx={{marginTop: '150px'}}>
                <Outlet />
            </Box>
            <Footer />
        </div>
    )
}