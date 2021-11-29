import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Student Info</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Students</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Student</Link>
          </li>
          <li>
            <Link to='/sensor'>Sensor Data</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
