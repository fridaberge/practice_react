export default function MainContent(){
    return(
        // <Fragment> to not create another extra nested layer in html, same as <>
        <>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was orioginally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprice apps, including mobilre apps</li>
            </ul>
        </>)
}