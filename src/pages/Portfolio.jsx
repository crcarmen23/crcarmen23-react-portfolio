export default function Portfolio() {

  const projects = [
    {
      title: "Style Saga",
      description: "Street style fashion blog that allows users to stay informed on the ever-evolving world of fashion.",
      deployed: "https://arcane-bastion-46349-44530c72db10.herokuapp.com/",
      repo: "https://github.com/crcarmen23/style-saga",
      image: "/style.png",
      alt: "Style Saga homepage",
    },
    {
      title: "La Dolce Vita",
      description: "Every dish is a celebration of life's sweetest moments. Browse La Dolce Vita's delicious Italian menu and effortlessly place a to-go order for pickup.",
      deployed: "https://la-dolce-vita-257152a676c7.herokuapp.com/",
      repo: "https://github.com/crcarmen23/la-dolce-vita",
      image: "/ladolce.png",
      alt: "La Dolce Vit homepage",
    },
    {
      title: "JetSet Exchange Explorer",
      description: "Convert your travel budget into the currency of your choice and view current weather for any destination.",
      deployed: "https://crcarmen23.github.io/jetset-exchange-explorer/",
      repo: "https://github.com/crcarmen23/jetset-exchange-explorer",
      image: "/jetset.jpg",
      alt: "JetSet EE homepage",
    },
    {
      title: "New York City Quiz",
      description: "Take a quiz and learn about the wonderful city of New York City. Finish as fast as possible while answering all questions correctly to avoid a penalty on your score.",
      deployed: "https://crcarmen23.github.io/nyc-quiz/",
      repo: "https://github.com/crcarmen23/nyc-quiz",
      image: "/nyc.jpg",
      alt: "NYC Quiz homepage",
    },
    {
      title: "Weather Dashboard",
      description: "View current weather conditions and a 5-day forecast for any city of your choice.",
      deployed: "https://crcarmen23.github.io/weather-dashboard/",
      repo: "https://github.com/crcarmen23/weather-dashboard",
      image: "/weather.png",
      alt: "Weather Dashboard screenshot",
    },
    {
      title: "Work Day Scheduler",
      description: "Enter and view events for the day (9 am - 5 pm) in a color-coded format to easily tell which events are coming up and which events have passed.",
      deployed: "https://crcarmen23.github.io/work-day-scheduler/",
      repo: "https://github.com/crcarmen23/work-day-scheduler",
      image: "/workday.png",
      alt: "Work Day Scheduler screenshot",
    }
  ]



  return (
    <div className="m-5">
      <h1>My Work</h1>
      <div className="row">
        {
          projects.map((project) => (
            <div className=".g col-md-4 col-sm-12 mb-5" key={project.title}>
              <div className="card cardPortfolio">
                <article style={{backgroundImage:`url(${project.image})`, backgroundSize: "contain", height: 330, backgroundRepeat: "no-repeat", backgroundPosition: "center"}} className="card-img py-5" alt={project.alt}></article>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.repo} className="btn btn-primary m-2 shadow p-3 mb-5 bg-body-tertiary rounded">Github Repo</a>
                    <a href={project.deployed} className="btn btn-primary m-2 shadow p-3 mb-5 bg-body-tertiary rounded">Demo App</a>
                  </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
