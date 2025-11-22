import { BrowserRouter, Link } from "react-router-dom";
function Header() {
  return (
    <header className=" absolute top-75 left-1/2 -translate-x-1/2">
      <h1 className="text-black font-mono font-bold text-7xl text-shadow-strong tracking-wide">
        Notes<span className="text-red-400 mb-64">A</span>pp
      </h1>
      <div>
        <nav className="mt-5 ">
          <Link className="font-mono text-3xl" to={"/"}>
            Home
          </Link>
          <Link className="font-mono text-3xl text-white ml-10" to={"/add"}>
            Add courses
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
