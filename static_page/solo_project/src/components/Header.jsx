const base = import.meta.env.BASE_URL

export default function Header(){
    return(
        <header>
            <img className = "profile-pic" src={`${base}images/profile_pic.png`} alt = "profile picture"/>
            <section className = "header-txt">
                <h1>Frida Berge</h1>
                <h2>Developer</h2>
                <h3>link to website</h3>
            </section>
            <section className = "buttons">
                <button className ="email-button"> email</button>
                <button className = "link-button"> linkedin</button>
            </section>
        </header>
    )
}