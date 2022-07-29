import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        
        const email = localStorage.getItem("email")

        if(email != undefined) {
            axios.get(`http://localhost:8080/user/findUserByEmail/${email}`)
            .then((response) => {
                setUser(response.data)
            } )
        }
    }, [])

    const displayUserName =()=> {

        if (user.email) {
            return user.email
        }
        return null
    }

    return (
        <div className="content">
            <div className="logo"><h><img src="http://127.0.0.1:8887/LogoOfficialButton.png"/></h></div>
            <b> 
                <h1>Celebrate Soon {displayUserName()}!</h1>
                <p2>July 1 (Canada Day! Canada)</p2>
                <div className="flag"><img src="http://127.0.0.1:8887/flags/canada.webp"></img></div> 
                <h2><a href="https://en.wikipedia.org/wiki/Canada_Day"target="_blank">Read More</a></h2>
                <h2><a href="https://www.google.com/search?q=canadian+food+near+me&rlz=1C1VDKB_enUS999US999&oq=canadian+food+nea&aqs=chrome.0.0i457i512j69i57j0i22i30l8.5388j1j4&sourceid=chrome&ie=UTF-8"target="_blank">Get Food</a></h2>
                <h2><a href="https://www.google.com/search?q=canadian+recipes&rlz=1C1VDKB_enUS999US999&sxsrf=ALiCzsanrDxaGvws7WqQelARDB3VuBQmxA%3A1656354788863&ei=5Pe5YsGWNOTVkPIPxqexkAE&ved=0ahUKEwjBmL-2os74AhXkKkQIHcZTDBIQ4dUDCA4&uact=5&oq=canadian+recipes&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMQCMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgUIABCABDIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAc6BwgAEEcQsAM6CggAEEcQsAMQyQM6BwgAELADEEM6CggAEOQCELADGAE6DAguEMgDELADEEMYAjoECAAQDUoECEEYAEoECEYYAVCMKVjgNGCcQGgBcAF4AIABcIgBhwaSAQM0LjSYAQCgAQHIARHAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz"target="_blank">Make Food</a></h2>
                <h2><a href="https://www.youtube.com/results?search_query=canada+day"target="_blank">Watch Videos</a></h2>
                <p2>July 4 (Independance Day! U.S)</p2>
                <div className="flag"><img src="http://127.0.0.1:8887/flags/1200px-Flag_of_the_United_States.svg.webp"></img></div> 
                <h2><a href="https://en.wikipedia.org/wiki/Independence_Day_(United_States)"target="_blank">Read More</a></h2>
                <h2><a href="https://www.google.com/search?q=american+food+near+me&rlz=1C1VDKB_enUS999US999&oq=american+food+n&aqs=chrome.0.0i457i512j69i57j0i402j0i512l7.4944j0j4&sourceid=chrome&ie=UTF-8"target="_blank">Get Food</a></h2>
                <h2><a href="https://www.google.com/search?q=american+recipes&rlz=1C1VDKB_enUS999US999&sxsrf=ALiCzsbtM4Q8Vze8SMjEp3oCTvihPOI5oQ%3A1656354987389&ei=q_i5YryqF-3XkPIPo_yWwAI&ved=0ahUKEwj8q5SVo874AhXtK0QIHSO-BSgQ4dUDCA4&uact=5&oq=american+recipes&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMgUIABCABDIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAc6CAgAEB4QBxAKOgQIABANSgQIQRgASgQIRhgAUABYuwtglQ5oAHABeACAAcwBiAGCCZIBBTAuNy4xmAEAoAEBwAEB&sclient=gws-wiz"target="_blank">Make Food</a></h2>
                <h2><a href="https://www.youtube.com/results?search_query=4th+of+july"target="_blank">Watch Videos</a></h2>
                <p1>July 5 (Independance Day! Algeria)</p1>
                <div className="flag"><img src="http://127.0.0.1:8887/flags/Flag_of_Algeria.svg.png"></img></div> 
                <h2><a href="https://en.wikipedia.org/wiki/Independence_Day_(Algeria)"target="_blank">Read More</a></h2>
                <h2><a href="https://www.google.com/search?q=algerian+food+near+me&rlz=1C1VDKB_enUS999US999&oq=algerian+food+ne&aqs=chrome.1.69i57j0i457i512j0i512j0i22i30l4j0i390l3.3686j1j9&sourceid=chrome&ie=UTF-8"target="_blank">Get Food</a></h2> 
                <h2><a href="https://www.google.com/search?q=algerian+recipes&rlz=1C1VDKB_enUS999US999&oq=algerian+recipes&aqs=chrome..69i57j0i512l2j0i22i30l7.3481j1j9&sourceid=chrome&ie=UTF-8">Make Food</a></h2>
                <h2><a href="https://www.youtube.com/results?search_query=algerian+independence+day"target="_blank">Watch Videos</a></h2>
                </b>
        </div>
    )
}

export default Home 