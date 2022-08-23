import "./Footer.css";
import linkedinIcon from "../../images/linkedin_icon.svg";
import githubIcon from "../../images/github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {year} Supersite, Powered by News API
      </p>
      <nav className="footer__wrapper">
        <Link to={"/"} className="footer__link">
          Home
        </Link>
        <a
          href="https://practicum.com/"
          target="_blank"
          rel="noreferrer"
          className="footer__link footer__link_type_mobile"
        >
          Practicum by Yandex
        </a>
        <ul className="footer__icon-wrapper">
          <a
            href="https://github.com/adraper00"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubIcon}
              className="footer__icon"
              alt="GitHub logo"
            ></img>
          </a>
          <a
            href="https://linkedin.com/in/AshlyDraper"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              className="footer__icon"
              alt="LinkedIn Logo"
            ></img>
          </a>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
