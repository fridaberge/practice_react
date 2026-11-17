const base = import.meta.env.BASE_URL

export default function Main(){
    return(
        <>
            <main ction className = "main">
                <h1>Fun facts about React</h1>
                <ul className = "fact-list">
                    <li>Was first released in 2013</li>
                    <li>Was orioginally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprice apps, including mobilre apps</li>
                </ul>
                <img className = "background-logo" src={`${base}react.svg`} alt = "big logo react"/>
            </main>
        </>
    )
}