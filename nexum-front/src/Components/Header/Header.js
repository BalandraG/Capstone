const Header = (props) => {


    return (
        <header className="header flex-row">
            <div className="third-width">
                
            </div>
            <div className="third-width justify-center">
                <a className="verticle-center" href="/"> Home </a>
            </div>
            <div className="third-width header-buttons">
                    <a href="/Sign-Up">Sign Up</a>
                    <a href="/Sign-In">Sign In</a>
            </div>
        </header>
    )
}

export default Header
