import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import home from "../assets/images/home.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="icons">
        <a href="https://github.com/marcelala/">
          <img src={github} alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/marcela-fortis/">
          <img src={linkedin} alt="linkedin icon" />
        </a>
        <a href="https://marcelaf-portfolio.web.app/">
          <img src={home} alt="home icon" />
        </a>
      </div>
      <span>©{currentYear} Marcela Felix Fortis</span>
    </footer>
  );
}
