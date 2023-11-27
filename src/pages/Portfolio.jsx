export default function Portfolio() {

  const projects = [
    {
      title: "Style Saga",
      description: "",
      deployed: "",
      repo: "",
      image: "",
    },
    {
      title: "",
      description: "",
      deployed: "",
      repo: "",
      image: "",
    },
    {
      title: "",
      description: "",
      deployed: "",
      repo: "",
      image: "",
    },
    {
      title: "",
      description: "",
      deployed: "",
      repo: "",
      image: "",
    },
    {
      title: "",
      description: "",
      deployed: "",
      repo: "",
      image: "",
    },
    {
      title: "",
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
                    <a href={project.repo} className="btn btn-primary">Github Repo</a>
                    <a href={project.deployed} className="btn btn-primary">Demo App</a>
                  </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
