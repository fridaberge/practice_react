const base = import.meta.env.BASE_URL

export default function Header(){
    return(
        <header className = "header">
            <img className = "nav-logo" src={`${base}de_tre.png`} alt = "de tre logo"/>
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