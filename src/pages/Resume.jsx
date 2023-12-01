export default function Resume() {
  return (
    <div className="resume m-5 min-vh-100">
      <br />
      <h1>Resume</h1>
      <br />
      <a href="https://publuu.com/flip-book/311328/719974" className="resumeLink">Link to Resume PDF</a>
      <br />
      <br />
      <div className="d-inline-flex ">
        <div className="card .g col-md-6 col-sm-12 frontEndProf m-3">
          <h3 className="card-title">Front-end Proficiencies:</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">jQuery</li>
            <li className="list-group-item">Responsive Design</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Bulma</li>
            <li className="list-group-item">Bootstrap</li>
          </ul>
        </div>
        <div className="card .g col-md-6 col-sm-12 backEndProf m-3">
          <h3 className="card-title">Back-end Proficiencies:</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">APIs</li>
            <li className="list-group-item">Node</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">MYSQL, Sequelize</li>
            <li className="list-group-item">MongoDB, Mongoose</li>
            <li className="list-group-item">REST</li>
            <li className="list-group-item">GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
