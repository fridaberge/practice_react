import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import github from '../../images/github.png'

export default function Footer(){
    return(
        <footer>
            <img src= {twitter} alt = "twitter logo"/>
            <img src= {facebook} alt = "facebook logo"/>
            <img src= {instagram} alt = "instagram logo"/>
            <img src= {github} alt = "github logo"/>
        </footer>
    )
}