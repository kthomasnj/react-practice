import Nav from "./Nav";

function Header() {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="navbar-brand" href="/">Keith S. Thomas</h1>
            <div className="collapse navbar-collapse" id="navbarNav">
                <Nav />
            </div>
        </header>
    )
}

export default Header;