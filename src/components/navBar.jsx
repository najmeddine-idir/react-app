const NavBar = ({ countProduct }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <span className="badge rounded-pill bg-secondary m-2">
            {countProduct}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
