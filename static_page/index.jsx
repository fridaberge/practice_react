import { createRoot } from "react-dom/client"
import { createElement } from "react"

// 1 create a root
const root = createRoot(document.getElementById("root"))
const reactElement = createElement("h1", null, "Hello from CreateElement")

//making my own element
function MainContent(){
    return(<h1>react is great</h1>)
}

// 2 render some markup to the root
//console.log(reactElement)
console.log(<h1>hello</h1>)

root.render(
    <main>
        <img src = "de_tre.png" width = "500"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was orioginally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprice apps, including mobilre apps</li>
        </ul>
    </main>
)
