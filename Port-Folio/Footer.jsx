function Footer() {
  return (
    <footer className="bg-dark border-top border-info py-4">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start">

            <p className="text-secondary mb-0">
              © 2026 MyPortfolio. All Rights Reserved.
            </p>

          </div>

          <div className="col-md-6 text-center text-md-end">

            <a
              href="#home"
              className="text-secondary text-decoration-none me-3"
            >
              Home
            </a>

            <a
              href="#work"
              className="text-secondary text-decoration-none me-3"
            >
              Work
            </a>

            <a
              href="#contact"
              className="text-secondary text-decoration-none"
            >
              Contact
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;