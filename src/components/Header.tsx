function Header() {
  return (
    <>
      <div className="header-wrap">
        <div className="header">
          <div className="header__logo-wrap">
            <h1>logo</h1>
          </div>
          <div className="header__search-wrap">
            <input placeholder="search" />
          </div>
          <div className="header__rnb-wrap">
            <ul className="header__rnb">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
