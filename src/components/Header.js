import logo from '../logo.svg';

function Header() {
    return(
        <header className="site-header">
            <nav className="navbar navbar-expand-lg navbar-default">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} className="navbar-brand-img" alt="Stephen M." />
                    </a>

                    <div className="d-none d-lg-flex align-items-center w-100 navbar-menu">
                        <ul className="nav navbar-nav ms-auto me-3">
                            <li className="nav-item"><a className="nav-link" href="https://github.com/ogre2" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href="https://dribbble.com/ogre2" target="_blank" rel="noreferrer"><i className="bi bi-dribbble"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/stephen-mwingira-098819184/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></li>
                        </ul>

                        <div className="nav-contact"><a href="mailto:donebysteve@gmail.com" className="nav-link fw-500"><i className="bi bi-envelope"></i></a></div>

                        {/* <ul className="nav navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">Blog</a></li>
                            <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
                        </ul> */}
                    </div>

                    <div className="d-flex d-lg-none text-end align-items-center nav-collapse">
                        <div className="nav-item me-3"><a href="/" className="nav-link fw-500"><i className="bi bi-envelope"></i></a></div>

                        <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav">
                            <i className="bi bi-text-right fs-32"></i>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end" id="navbarNav" tabIndex="-1" aria-labelledby="navbarNavLabel">
                <div className="offcanvas-header">
                    <a className="navbar-brand" href="/">
                        <img src={logo} className="navbar-brand-img" alt="Stephen M." />
                    </a>

                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" label="Close"></button>
                </div>

                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow">
                        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">Projects</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">Blog</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">Contact</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">GitHub</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">Dribbble</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;