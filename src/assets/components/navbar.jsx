import { useState } from "react";
import InputForm from "./InputForm";
import Modal from "./Modal";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

     const checklogin = () => {
   setIsOpen(true); // Open the modal when login is clicked
  };
 
   return (
    <>
    <header>
        <h2>Food Blog</h2>
        <ul>
            <li>Home</li>
            <li>My Recipe</li>
            <li>Favourites</li>
            <li onClick={checklogin} style={{ cursor: "pointer" }}>Login</li>
        </ul>
    </header>
    {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
            <InputForm setIsOpen={setIsOpen} /> {/* Pass the state setter directly */}
        </Modal>
    )}
</>
);
}




