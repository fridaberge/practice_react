const base = import.meta.env.BASE_URL

export default function Navbar(){
    return(
        <header className = "nav-bar">
            <nav className = "logo">
                <img className = "logo-pic" src = {`${base}react.svg`} alt = "React logo" />
                <h1 className = "logo-txt">ReactFacts</h1>
            </nav>
        </header>
    )
}