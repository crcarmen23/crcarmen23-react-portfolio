export default function Portfolio() {

  const projects = [
    {
      title: "Style Saga",
      description: "Street style fashion blog that allows users to stay informed on the ever-evolving world of fashion.",
      deployed: "https://arcane-bastion-46349-44530c72db10.herokuapp.com/",
      repo: "https://github.com/crcarmen23/style-saga",
      image: "",
    },
    {
      title: "Project 3",
      description: "",
      deployed: "",
      repo: "",
      image: "",
    },
    {
      title: "Europe in Your Pocket",
      description: "",
      deployed: "",
      repo: "",
      image: "",
    },
    {
      title: "Weather Dashboard",
      description: "",
      deployed: "",
      repo: "",
      image: "",
    },
    {
      title: "Work Day Scheduler",
      description: "",
      deployed: "",
      repo: "",
      image: "",
    },
    {
      title: "First Mockup Portfolio",
      description: "",
      deployed: "",
      repo: "",
      image: "",
    }
  ]



  return (
    <div className="m-5">
      <h1>Portfolio</h1>
      <div className="row">
        {
          projects.map((project) => (
            <div className="col-md-4 col-sm-12 mb-5" key={project.title}>
              <div className="card">
                <img src={project.image} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.repo} className="btn btn-primary m-2">Github Repo</a>
                    <a href={project.deployed} className="btn btn-primary m-2">Demo App</a>
                  </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
