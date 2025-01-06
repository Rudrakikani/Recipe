import react, { useState } from "react";
import InputForm from "./InputForm";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <header>
            <h2> Food Blog</h2>
            <ul>
                <li>Home</li>
                <li>My recpie</li>
                <li>Favourites</li>
                <li onClick={checklogin}>Login</li>
            </ul>
        </header>
        { (isOpen) && <Modal onclose={()=>setIsOpen(false)}><InputForm/></Modal>}
        </>
    )
}
babee frontend folder nathi aaivu direct src open thay 
to <Have></Have>
kale vinayak avin kari jaseare thai jase ruk