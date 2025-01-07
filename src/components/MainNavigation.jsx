import { Outlet } from 'react-router-dom'; // Import Outlet from react-router-dom
import Navbar from '../Navbar'; // Replace with the correct path to Navbar
import Footer from '..pages/Footer'; // Replace with the correct path to Footer

export default function MainNavigation() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}


