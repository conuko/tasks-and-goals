const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__child">
        <div>
          <p>
            <strong>Shortlist</strong> by{" "}
            <a href="" target="_blank">
              @matthewjames
            </a>
            . The source code is licensed{" "}
            <a href="" target="_blank">
              MIT
            </a>
            . The website content is licensed{" "}
            <a href="" target="_blank">
              CC BY-NC-SA 4.0
            </a>
            .
          </p>
          <p>
            <a className="icon" href="" target="_blank">
              {" "}
              <i className="fa fa-github"></i>{" "}
            </a>{" "}
            <a className="icon" href="" target="_blank">
              {" "}
              <i className="fa fa-twitter"></i>{" "}
            </a>{" "}
            <a className="icon" href="" target="_blank">
              {" "}
              <i className="fa fa-facebook"></i>{" "}
            </a>{" "}
            <a className="icon" href="" target="_blank">
              {" "}
              <i className="fa fa-instagram"></i>{" "}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
