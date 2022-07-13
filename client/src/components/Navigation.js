import { Link } from "react-router-dom";
function Navigation() {
  return (
    <header>
      <div>Hello</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
