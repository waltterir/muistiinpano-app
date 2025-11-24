import { BrowserRouter, Link } from "react-router-dom";
function Header() {
  return (
    <header className=" absolute top-75 left-1/2 -translate-x-1/2">
      <h1 className="text-black font-mono font-bold text-7xl text-shadow-strong tracking-wide">
        Notes<span className="text-red-400 mb-64">A</span>pp
      </h1>
      <div>
        <nav className="mt-5 font-bold">
          <Link className="font-mono text-2xl text-white" to={"/"}>
            Home
          </Link>
          <Link className="font-mono text-2xl text-white ml-10" to={"/add"}>
            Add courses
          </Link>
          <Link className="font-mono text-2xl text-white ml-10" to={"/create"}>
            Create notes
          </Link>
          <Link className="font-mono text-2xl text-white ml-10" to={"/list"}>
            List Notes
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
