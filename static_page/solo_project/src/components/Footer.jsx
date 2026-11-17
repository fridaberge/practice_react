const base = import.meta.env.BASE_URL

export default function Footer(){
    return(
        <footer>
            <img src={`${base}images/twitter.png`} alt="twitter logo"/>
            <img src={`${base}images/facebook.png`} alt="facebook logo"/>
            <img src={`${base}images/instagram.png`} alt="instagram logo"/>
            <img src={`${base}images/github.png`} alt="github logo"/>
        </footer>
    )
}