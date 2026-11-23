const base = import.meta.env.BASE_URL

export default function Header(){
    return(
        <header>
            <img src={`${base}images/globe.png`} alt="Globe" />
            <h1>My travel journal</h1>
        </header>
    )
}