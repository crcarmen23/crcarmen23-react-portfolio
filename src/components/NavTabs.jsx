import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  console.log(currentPage)
  return (
    <div>
      <h1 className="header">Carmen Regina</h1>
      <br />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/ContactMe"
            className={currentPage === '/ContactMe' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
