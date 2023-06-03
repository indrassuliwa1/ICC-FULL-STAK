import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center border-2 h-[8vh] justify-between px-5 shadow-md">
      <figure>
        <figcaption>
          <Link to="/">Logo</Link>
        </figcaption>
      </figure>
      <nav className=" flex justify-between w-[12vw]">
        <Link to={"/add"}>Add Data</Link>
        <Link to={"/view"}>View Data</Link>
      </nav>
    </header>
  );
};
export default Navbar;
