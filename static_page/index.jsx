import { createRoot } from "react-dom/client"
import {createElement} from "react"

// 1 create a root
const root = createRoot(document.querySelector("#root"))
const reactElement = createElement("h1", null, "Hello from CreateElement")

//making my own element
function MainContent(){
    return(<h1>react is great</h1>)
}

// 2 render some markup to the root
//console.log(reactElement)
root.render(
    <div>
        reactElement
        <MainContent />
    </div>
    
)




//alternative createRoot(document.getElementById("root")).render (...)