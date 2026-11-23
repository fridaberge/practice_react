const base = import.meta.env.BASE_URL

export default function Entry(){
    return(
        <article className = "journal-entry">
            <div className="main-image-container">
                <img className = "main-image" src="//scrimba.com/links/travel-journal-japan-image-url" alt = "Mount Fuji"/>
            </div>
            <div>
                <img src={`${base}images/marker.png`} alt="Globe" />
                <span>Japan</span>
                <a href = "https://www.google.com/maps/search/Mt.+Fuji+Shizuoka+%26+Yamanashi+Japan/@35.3665784,138.7296359,6343m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D">View on Google Maps</a>
                <h2>Mount Fuji</h2>
                <p>12. Jan, 2021 - 24 Jan. 2021</p>
            </div>
        </article>
    )
}


/*Photos from Unsplash (can use these URLs as your img src) Japan https://scrimba.com/links/travel-journal-japan-image-url Australia https://scrimba.com/links/travel-journal-australia-image-url Norway https://scrimba.com/links/travel-journal-norway-image-url*/