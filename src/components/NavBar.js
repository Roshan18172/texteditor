import props from 'prop-types';
import { Link } from 'react-router-dom';
function NavBar(props){
    return(
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.appName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" href="/" to="/About">About</Link>
                    </li>
                </ul>
                </div>
            </div>
            <Link className="navbar-brand" to="/">
                <img src="text-editor-icon-4.jpg" alt="Logo" width="35" height="35" className="d-inline-block align-text-top" />
             </Link>
        </nav>
    );
}

NavBar.propTypes = {
    appName: props.string.isRequired
};
NavBar.defaultProps = {
    appName: "Text Editor"
};
export default NavBar;