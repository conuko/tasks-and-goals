import GitHub from "../../assets/images/icons8-github-48.png";
import LinkedIn from "../../assets/images/icons8-linkedin-48.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__child">
        <div>
          <p>
            <strong>Shortlist</strong> by{" "}
            <a
              className="footer__link"
              href="https://github.com/conuko"
              target="_blank"
            >
              @conuko
            </a>
            <br />
            <a href="http://www.github.com/conuko" target="_blank">
              Link to GitHub
              <img className="footer__icon" src={GitHub} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/constantin-unterkofler"
              target="_blank"
            >
              Link to LinkedIn
              <img className="footer__icon" src={LinkedIn} alt="LinkedIn" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
