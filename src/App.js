import {useEffect, useState} from "react"
import loadColors from "./helpers/loadColors"
import Header from "./views/containers/Header"
import Home from "./views/pages/Home"
import Footer from "./views/containers/Footer"
import ContactUs from "./views/containers/ContactUs"
import ToastContainer from "./views/containers/ToastContainer"

function App()
{
    const [isVisibleContact, setIsVisibleContact] = useState(false)

    useEffect(() => process.env.NODE_ENV !== "production" && loadColors(), [])

    function onPop()
    {
        setIsVisibleContact(false)
        document.body.style.overflowY = "auto"
        window.removeEventListener("popstate", onPop)
    }

    function showContact()
    {
        setIsVisibleContact(true)
        document.body.style.overflowY = "hidden"
        window.history.pushState("for-history", "", document.location.pathname)
        window.addEventListener("popstate", onPop, {passive: true})
    }

    return (
        <>
            <Header showContact={showContact}/>
            <Home showContact={showContact}/>
            <Footer/>

            <ToastContainer/>

            {
                isVisibleContact &&
                <ContactUs/>
            }
        </>
    )
}

export default App
