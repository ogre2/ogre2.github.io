import logo from '../logo.svg';

function Footer() {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row py-5 d-flex justify-content-between">
                    <div className="d-flex align-items-center col-auto">
                        <a href="/" className="footer-brand">
                            <img src={logo} className="footer-brand-img" alt="Stephen M." />
                        </a>

                        <p className="text-primary ms-2">&copy; {new Date().getFullYear()} Stephen M.</p>
                    </div>

                    <ul className="nav col-auto justify-content-end list-unstyled d-flex align-items-center">
                        <li className="ms-4"><a className="link text-primary" href="https://github.com/ogre2"><i className="bi bi-github" target="_blank" rel="noreferrer"></i></a></li>
                        <li className="ms-4"><a className="link text-primary" href="https://dribbble.com/ogre2" target="_blank" rel="noreferrer"><i className="bi bi-dribbble"></i></a></li>
                        <li className="ms-4"><a className="link text-primary" href="https://www.linkedin.com/in/stephen-mwingira-098819184/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;