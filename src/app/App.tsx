import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import HomePage from '../pages/homepage/HomePage';
import RootLayout from './layout/RootLayout';
import NotFoundPage from '../pages/notfoundpage/NotFoundPage';



export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} >
            <Route index element={<HomePage />}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}