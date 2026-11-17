import reactLogo from '../../react.svg'

export default function Navbar(){
    return(
        <header className = "nav-bar">
            <nav className = "logo">
                <img className = "logo-pic" src = {reactLogo} alt = "React logo" />
                <h1 className = "logo-txt">ReactFacts</h1>
            </nav>
        </header>
    )
}