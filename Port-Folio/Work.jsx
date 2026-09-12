function Work() {

  const projects = [
    {
      title: "Quiz App",
      icon: "JS",
      text: "Interactive quiz application using JavaScript."
    },
    {
      title: "Car Collection",
      icon: "🚘",
      text: "Car collection website created with React."
    },
    {
      title: "Portfolio",
      icon: "💻",
      text: "Modern and responsive portfolio website."
    },
    {
      title: "Weather App",
      icon: "☀️",
      text: "Weather application using API and JavaScript."
    }
  ];

  return (
    <section id="work" className="py-5 work-bg">

      <div className="container">

        <div className="text-center mb-5">

          <p className="text-info fw-bold mb-1">
            MY WORK
          </p>

          <h2 className="fw-bold">
            My Latest Projects
          </h2>

          <p className="text-secondary">
            Here are some of my recent works.
          </p>

        </div>

        <div className="row g-4">

          {projects.map((project, index) => (

            <div className="col-sm-6 col-lg-3" key={index}>

              <div className="card bg-dark text-light h-100 border-secondary">

                <div className="project-img">
                  {project.icon}
                </div>

                <div className="card-body">

                  <h5 className="card-title fw-bold">
                    {project.title}
                  </h5>

                  <p className="card-text text-secondary">
                    {project.text}
                  </p>

                  <button className="btn btn-info btn-sm fw-bold">
                    View Project →
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Work;