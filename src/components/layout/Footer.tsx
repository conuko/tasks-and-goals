import GitHubIcon from "../../assets/icons8-github.svg?component";
import LinkedInIcon from "../../assets/icons8-linkedin.svg?component";

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
              <GitHubIcon className="footer__icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/constantin-unterkofler"
              target="_blank"
            >
              <LinkedInIcon className="footer__icon" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
