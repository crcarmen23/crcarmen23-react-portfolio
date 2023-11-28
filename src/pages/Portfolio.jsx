export default function Portfolio() {

  const projects = [
    {
      title: "Style Saga",
      description: "Street style fashion blog that allows users to stay informed on the ever-evolving world of fashion.",
      deployed: "https://arcane-bastion-46349-44530c72db10.herokuapp.com/",
      repo: "https://github.com/crcarmen23/style-saga",
      image: "/stylesaga.png",
      alt: "image of style saga homepage",
    },
    {
      title: "Project 3",
      description: "",
      deployed: "",
      repo: "",
      image: "",
      alt: "image of project 3 homepage",
    },
    {
      title: "JetSet Exchange Explorer",
      description: "Convert your travel budget into the currency of your choice and view current weather for any destination.",
      deployed: "https://crcarmen23.github.io/jetset-exchange-explorer/",
      repo: "https://github.com/crcarmen23/jetset-exchange-explorer",
      image: "/jetset.jpg",
      alt: "image of jetset homepage",
    },
    {
      title: "New York City Quiz",
      description: "Take a quiz and learn about the wonderful city of New York City. Finish as fast as possible while answering all the questions correctly to avoid a penalty on your score.",
      deployed: "https://crcarmen23.github.io/nyc-quiz/",
      repo: "https://github.com/crcarmen23/nyc-quiz",
      image: "/nycquiz.png",
      alt: "image of nyc quiz",
    },
    {
      title: "Weather Dashboard",
      description: "View current weather conditions as well as a 5-day forecast for any city of your choice.",
      deployed: "https://crcarmen23.github.io/weather-dashboard/",
      repo: "https://github.com/crcarmen23/weather-dashboard",
      image: "/weather.png",
      alt: "image of weather dashboard",
    },
    {
      title: "Work Day Scheduler",
      description: "Enter and view events for the day (9 am - 5 pm) in a color-coded format to easily tell which events are coming up soon and which events have passed.",
      deployed: "https://crcarmen23.github.io/work-day-scheduler/",
      repo: "https://github.com/crcarmen23/work-day-scheduler",
      image: "/workday.png",
      alt: "image of work day scheduler demo",
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
                <img src={project.image} className="card-img-top" alt={project.alt}/>
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
