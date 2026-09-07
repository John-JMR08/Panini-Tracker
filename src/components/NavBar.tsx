function NavBar() {
    return (
        <>
        <nav className="navbar fixed-bottom bg-card border-top border-2">
            <div className="container-fluid p-0">
                <div className="row w-100 g-0 text-center">
                    <div className="col">
                        <a href="#" className="nav-link text-light py-2">
                            <i className="bi bi-grid-fill d-block fs-5"></i>
                            <div className="text-light smaller fw-semibold">All</div>
                        </a>
                    </div>

                    <div className="col">
                        <a href="#" className="nav-link text-light py-2">
                            <i className="bi bi-exclamation-circle-fill d-block fs-5"></i>
                             <div className="text-light smaller fw-semibold">Missing</div>
                        </a>
                    </div>

                    <div className="col">
                        <a href="#" className="nav-link text-light py-2">
                            <i className="bi bi-files d-block fs-5"></i>
                            <div className="text-light smaller fw-semibold">Duplicates</div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar