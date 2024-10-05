import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.jpg";
import  data  from "./data";
// import { DATA } from "../constants/index";
// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClick = (e, link) => {
//     e.preventDefault();
//     const targetElement = document.querySelector(link);
//     if (targetElement) {
//       const offset = -85;
//       const elementPosition = targetElement.getBoundingClientReact().top;
//       const offsetPosition = elementPosition + window.scrollY + offset;
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//     setIsOpen(false);
//   };

  // return (
    // <nav className="border-b border-neutral-900 rounded-4xl pb-4 sticky top-5 z-50 mb-20 flex items-center justify-between shadow-black shadow-xl bg-neutral-800">
    //   {/* Desktop toggleMenu */}
    //   <div className="flex items-center justify-between w-full px-4 lg:px-8">
    //     <div className="flex justify-between gap-6">
    //       <a href="#">
    //         <img className="w-16 rounded-4xl mt-4" src={logo} alt="logo" />
    //       </a>
    //     </div>
    //     <div>
    //       <ul className="flex items-center gap-4">
    //         {DATA.map((item, index) => (
    //           <li key={index} className="hover:text-cyan-500">
    //             <a
    //               className="cursor-pointer"
    //               href={item.href}
    //               onClick={(e) => handleClick(e, item.href)}
    //             >
    //               {item.title}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    //   {/* Mobile toggleMenu */}
    //   <div className="rounded-lg backdrop-blur-md lg:hidden">
    //     <div className="flex items-center justify-between">
    //       <div>
    //         <a href="#">
    //           <img className="w-16 rounded-4xl mt-4" src={logo} alt="logo" />
    //         </a>
    //       </div>
    //       <div className="flex items-center">
    //         <button className="focus:outline-none lg:hidden"
    //         onClick={toggleMenu}>
    //           {isOpen ? (
    //             <FaTimes className="m-2 h-6 w-6 text-white" />
    //           ):(
    //             <FaBars className="m-2 h-6 w-6 text-white" />
    //           )}
    //         </button>
    //       </div>
    //     </div>
    //     {isOpen && (
    //       <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-none text-xl">
    //         {DATA.map((item, index) => (
    //           <li key={index} className="hover:text-cyan-500">
    //               <a className="block w-full text-xl font-semibold"
    //               href={item.href}
    //               onClick={(e) => handleClick(e, item.href)}>
    //                 {item.title}
    //               </a>
    //           </li>
    //         ))}
    //         </ul>
    //     )}
    //   </div>
    // </nav>




    
    // <nav className="border-b border-neutral-900 rounded-4xl pb-4 sticky top-5 z-50 mb-20 flex items-center justify-between shadow-black shadow-xl bg-neutral-800">
    //   <div className="flex items-center justify-between w-full px-4 lg:px-8">
    //     <div className="flex items-center">
    //       <img className="w-16 rounded-4xl mt-4" src={logo} alt="logo" />
    //     </div>
    //     <div className="flex items-center lg:hidden">
    //       <button onClick={toggleMenu} className="text-white focus:outline-none">
    //         {isOpen ? (
    //           <svg
    //             className="w-6 h-6"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         ) : (
    //           <svg
    //             className="w-6 h-6"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M4 6h16M4 12h16m-7 6h7"
    //             />
    //           </svg>
    //         )}
    //       </button>
    //     </div>
        {/* <div className="hidden lg:flex items-center gap-4 text-2xl">
          <ul className="flex flex-row m-6 mt-8 gap-4">
            {data.map((item, index) => (
              <li key={index} className="hover:text-cyan-500">
                <a className="cursor-pointer"
                href= {item.link}
                onClick={(e) => handleClick(e, item.link)}>
                  {item.title}
                </a>
                {/* <Link to={item.link} className="cursor-pointer">
                  {item.title}
                </Link> */}
      //         </li>
      //       ))}
      //     </ul>
      //   </div>
      // </div> */}
      {/* {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-neutral-800 w-full px-4">
          <ul className="flex flex-col gap-4 py-4 text-xl">
            {data.map((item) => (
              <li key={item.id} className="hover:text-cyan-500">
                <Link
                  to={item.link}
                  className="cursor-pointer"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )} */}
//     </nav>
//   );
};

export default Navbar;
