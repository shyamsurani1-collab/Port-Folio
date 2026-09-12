function Contact() {
  return (
    <section id="contact" className="py-5 contact-bg">

      <div className="container">

        <div className="row align-items-center g-5">

          <div className="col-lg-5">

            <p className="text-info fw-bold">
              GET IN TOUCH
            </p>

            <h2 className="fw-bold">
              Contact <span className="text-info">Me</span>
            </h2>

            <p className="text-secondary">
              Have a project in mind? I'd love to hear from you.
            </p>

            <p>✉️ info@yourname.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Ahmedabad, Gujarat, India</p>

          </div>

          <div className="col-lg-7">

            <form className="bg-dark p-4 rounded border border-secondary">

              <div className="row">

                <div className="col-md-6 mb-3">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />

                </div>

              </div>

              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Your Message"
              ></textarea>

              <button
                type="submit"
                className="btn btn-info fw-bold w-100"
              >
                Send Message ➤
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;