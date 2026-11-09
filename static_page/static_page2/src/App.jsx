import Navbar from "./components/Navbar"
import Main from "./components/Main"
import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))

export default function App(){
    return(
        <>
            <Navbar/>
            <Main/>
        </>
    )
}

