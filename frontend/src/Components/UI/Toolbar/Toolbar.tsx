const Toolbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <span className="navbar-brand text-light m-3 d-inline-flex gap-2">
          Links shortener
          <i className="bi bi-scissors"></i>
        </span>
      </div>
    </nav>
  );
};

export default Toolbar;