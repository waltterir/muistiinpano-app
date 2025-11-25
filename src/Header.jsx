import { BrowserRouter, Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex flex-col items-center py-4">
      <h1 className="text-black font-mono font-bold text-7xl text-shadow-strong tracking-wide">
        Notes<span className="text-red-400">A</span>pp
      </h1>
      <div>
        <nav className="mt-6 flex gap-5 font-bold rounded-xl text-shadow-strong shadow-md px-5">
          <Link
            className="tracking-tight ml-3 font-mono text-2xl text-black transform transition duration-300  hover:text-red-400 hover:scale-125"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="tracking-tight ml-3 font-mono text-2xl text-black transform transition duration-300  hover:text-red-400 hover:scale-125"
            to={"/add"}
          >
            Add courses
          </Link>
          <Link
            className="tracking-tight ml-3 font-mono text-2xl text-black transform transition duration-300  hover:text-red-400 hover:scale-125"
            to={"/create"}
          >
            Create notes
          </Link>
          <Link
            className="tracking-tight ml-3 font-mono text-2xl text-black transform transition duration-300  hover:text-red-400 hover:scale-125"
            to={"/list"}
          >
            List notes
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
