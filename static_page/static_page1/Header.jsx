import logo from './de_tre.png'

export default function Header(){
    return(
        <header className = "header">
            <img className="nav-logo" src={logo} alt="logo"/>
            <nav>
                <ul className = "nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}