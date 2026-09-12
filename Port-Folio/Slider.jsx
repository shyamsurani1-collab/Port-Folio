function Slider() {
  return (
    <section id="home">

      <div
        id="mySlider"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <div className="carousel-indicators">

          <button
            data-bs-target="#mySlider"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            data-bs-target="#mySlider"
            data-bs-slide-to="1"
          ></button>

          <button
            data-bs-target="#mySlider"
            data-bs-slide-to="2"
          ></button>

        </div>

        <div className="carousel-inner">

          {/* Slide 1 */}

          <div className="carousel-item active">

            <div className="slider-bg">

              <div className="container">

                <div className="row align-items-center">

                  <div className="col-md-7">

                    <p className="fs-5">
                      Hello, I'm
                    </p>

                    <h1 className="display-3 fw-bold">
                      Shyam <span className="text-info">Surani</span>
                    </h1>

                    <h2>
                      Frontend Developer
                    </h2>

                    <p className="text-secondary fs-5">
                      I create modern, responsive and attractive
                      websites using React, JavaScript, HTML and CSS.
                    </p>

                    <a
                      href="#work"
                      className="btn btn-info fw-bold me-2"
                    >
                      View My Work →
                    </a>

                    <a
                      href="#contact"
                      className="btn btn-outline-light"
                    >
                      Contact Me
                    </a>

                  </div>

                  <div className="col-md-5 text-center">

                    <div className="profile">
                      👨🏻‍💻
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Slide 2 */}

          <div className="carousel-item">

            <div className="slider-bg">

              <div className="container">

                <div className="row align-items-center">

                  <div className="col-md-7">

                    <p className="fs-5">
                      My Skills
                    </p>

                    <h1 className="display-3 fw-bold">
                      Web <span className="text-info">Developer</span>
                    </h1>

                    <p className="text-secondary fs-5">
                      HTML • CSS • JavaScript • React • Bootstrap
                    </p>

                    <a
                      href="#work"
                      className="btn btn-info fw-bold"
                    >
                      Explore Projects
                    </a>

                  </div>

                  <div className="col-md-5 text-center">

                    <div className="code-icon">
                      {"</>"}
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Slide 3 */}

          <div className="carousel-item">

            <div className="slider-bg">

              <div className="container">

                <div className="row align-items-center">

                  <div className="col-md-7">

                    <p className="fs-5">
                      Let's Work Together
                    </p>

                    <h1 className="display-3 fw-bold">
                      Build Something
                      <span className="text-info"> Amazing</span>
                    </h1>

                    <p className="text-secondary fs-5">
                      Let's turn your idea into a beautiful website.
                    </p>

                    <a
                      href="#contact"
                      className="btn btn-info fw-bold"
                    >
                      Contact Me →
                    </a>

                  </div>

                  <div className="col-md-5 text-center">

                    <div className="code-icon">
                      💻
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mySlider"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mySlider"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

    </section>
  );
}

export default Slider;