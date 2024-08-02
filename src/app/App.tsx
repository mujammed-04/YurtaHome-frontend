import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import HomePage from '../pages/homepage/HomePage';
import RootLayout from './layout/RootLayout';
import NotFoundPage from '../pages/notfoundpage/NotFoundPage';
import RegisterPage from '../pages/registerpage/RegisterPage';
import LoginPage from '../pages/loginpage/LoginPage';



export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} >
        {/* <Route path="/YurtaHome-frontend" element={<RootLayout />} > */}
            <Route index element={<HomePage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}