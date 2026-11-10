import {createRoot} from "react-dom/client"
import Header from "./components/Header"
import Footer from "./components/Footer"
const root = createRoot(document.getElementById("root"))

root.render(
    <>
        <Header/>
        <Footer />
    </>
)