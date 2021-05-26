import {lazy, Suspense, useEffect, useState} from "react"
import loadColors from "./helpers/loadColors"
import Header from "./views/containers/Header"
import Footer from "./views/containers/Footer"
import ContactUs from "./views/containers/ContactUs"
import ToastContainer from "./views/containers/ToastContainer"
import Switch from "./views/components/Switch"
import Route from "./views/components/Route"

const HomePage = lazy(() => import("./views/pages/HomePage"))
const ResumePage = lazy(() => import("./views/pages/ResumePage"))
const AboutUsPage = lazy(() => import("./views/pages/AboutUsPage"))

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
            <main className="main">
                <Suspense fallback={null}>
                    <Switch>
                        <Route path="/resume" render={() => <ResumePage/>}/>
                        <Route path="/about-us" render={() => <AboutUsPage/>}/>
                        <Route path="*" render={() => <HomePage showContact={showContact}/>}/>
                    </Switch>
                </Suspense>
            </main>
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
