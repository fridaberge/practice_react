import { createRoot } from "react-dom/client"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"


const root = createRoot(document.getElementById("root"))


root.render(
    <>
        <Header/>
        <MainContent/>
        <Footer/>
    </>
)
