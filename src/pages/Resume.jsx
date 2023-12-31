export default function Resume() {
  return (
    <div className="resume m-5 min-vh-100">
      <br />
      <h1>Resume</h1>
      <br />
      <a href="https://drive.google.com/file/d/1hfYnyY4rn_VHjERi5Va_5-jbf9w9QeUA/view?usp=sharing" className="resumeLink">Link to Resume PDF</a>
      <br />
      <br />
      <div className="d-flex m-3 justify-content-center text-center proficiencies">
        <div className="d-flex card .g col-md-4 col-sm-12 m-3">
          <h3 className="card-title fs-2 profTitle">Front-end Proficiencies</h3>
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
        <div className="d-flex card .g col-md-4 col-sm-12 m-3">
          <h3 className="card-title fs-2 profTitle">Back-end Proficiencies</h3>
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
