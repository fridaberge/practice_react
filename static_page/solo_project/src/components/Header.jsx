import profile_pic from '../../images/profile_pic.png'

export default function Header(){
    return(
        <header>
            <img src = {profile_pic} alt = "profile picture"/>
            <h1>Frida Berge</h1>
            <h2>Developer</h2>
            <h3>link to website</h3>
            <button>link to email</button>
            <button>link to linkedin</button>
        </header>
    )
}