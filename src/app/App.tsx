import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "../pages/homepage/HomePage";
import LoginPage from "../pages/loginpage/LoginPage";
import NotFoundPage from "../pages/notfoundpage/NotFoundPage";
import RegisterPage from "../pages/registerpage/RegisterPage";
import RootLayout from "./layout/RootLayout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          {/* <Route path="/YurtaHome-frontend" element={<RootLayout />} > */}
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </>,
    ),
  );

  return <RouterProvider router={router} />;
}
