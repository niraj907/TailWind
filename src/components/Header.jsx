import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  // Handle scroll when menu is toggled
  if (typeof window !== "undefined") {
    document.body.style.overflow = toggle ? "hidden" : "auto";
  }

  return (
    <div className="fixed w-full bg-[rgb(202,198,198)] p-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">NC</div>
        {
          toggle ? (
            <IoClose onClick={() => setToggle(!toggle)} className="text-4xl text-white md:hidden block" />
          ) : (
            <IoMenu onClick={() => setToggle(!toggle)} className="text-white text-4xl md:hidden block" />
          )
        }

        <ul className="hidden md:flex text-white gap-10 text-[18px] font-medium">
          <li>
<Link to='/'>Home</Link>


          </li>
          <li>
          <Link to='/about'>About</Link>
          </li>
          <li>
          <Link to='/service'>Service</Link>
          </li>
          {/* <li>Company</li>
          <li>Resource</li>
          <li>About</li>
          <li>Contact</li> */}
        </ul>

        {/* Responsive menu */}
        <ul
          className={`md:hidden w-full h-screen text-white bg-black fixed top-[68px] font-medium left-0 transition-transform duration-300 ${
            toggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resource</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>






      </div>
    </div>





  );
}
