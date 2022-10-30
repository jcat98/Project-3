import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" id="logo" to="/">Tidwell Travels</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/journal">Journal</Link>
          </li>
        </ul>
      </div>
    </nav>

    <Outlet />
    </>
)
};

export default Layout;