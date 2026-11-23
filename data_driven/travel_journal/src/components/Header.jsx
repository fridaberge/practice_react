export default function Header(){
    return(
        <header>
            <img src={`${import.meta.env.BASE_URL}public/globe.png`} alt="Globe" />
            <h1>My travel journal</h1>
        </header>
    )
}