import { Link } from "react-router-dom";
import logo from "../assets/a.png";
import data from "./data";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 mb-20 flex items-center justify-between bg-white py-6 shadow-md">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <ul className="flex flex-row gap-4 ">
          {data.map((item) => (
            <li key={item.id} className="hover:text-cyan-500">
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
