import { useEffect, useState } from "react";

import "../styles/Header.css";

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${isHidden && !menuOpen ? "header--hidden" : ""}`}>
      <div className="header__container">
        <a href="#inicio" className="header__logo" onClick={closeMenu}>
          Nombre del Coach
        </a>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          <a href="#sobre-mi" className="header__link" onClick={closeMenu}>
            Sobre mí
          </a>

          <a href="#servicios" className="header__link" onClick={closeMenu}>
            Servicios
          </a>

          <a href="#testimonios" className="header__link" onClick={closeMenu}>
            Testimonios
          </a>

          <a href="#contacto" className="header__button" onClick={closeMenu}>
            Reservar sesión
          </a>
        </nav>

        <button
          className={`header__toggle ${menuOpen ? "header__toggle--active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          type="button"
        >
          <span className="header__toggle-line"></span>
          <span className="header__toggle-line"></span>
          <span className="header__toggle-line"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;