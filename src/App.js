import {lazy, Suspense, useEffect, useState} from "react"
import loadColors from "./helpers/loadColors"
import Header from "./views/containers/Header"
import Footer from "./views/containers/Footer"
import ToastContainer from "./views/containers/ToastContainer"
import Switch from "./views/components/Switch"
import Route from "./views/components/Route"
import Resize from "./helpers/resize"
import HomePage from "./views/pages/HomePage"

const ResumePage = lazy(() => import("./views/pages/ResumePage"))
const AboutUsPage = lazy(() => import("./views/pages/AboutUsPage"))
const Sidebar = lazy(() => import("./views/containers/Sidebar"))
const ContactUs = lazy(() => import("./views/containers/ContactUs"))

function App(props)
{
    const {location} = props
    const [isVisibleContact, setIsVisibleContact] = useState(false)
    const [defaultTab, setDefaultTab] = useState(null)
    const size = Resize()

    useEffect(() => process.env.NODE_ENV !== "production" && loadColors(), [])

    function onPop()
    {
        setIsVisibleContact(false)
        document.body.style.overflowY = "auto"
        window.removeEventListener("popstate", onPop)
    }

    function showContact({dontPush = false, defaultTab = null})
    {
        setIsVisibleContact(true)
        setDefaultTab(defaultTab)
        document.body.style.overflowY = "hidden"
        if (!dontPush) window.history.pushState("for-history", "", document.location.pathname)
        window.addEventListener("popstate", onPop, {passive: true})
    }

    return (
        <>
            <Header location={location} showContact={showContact}/>
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
                size.clientWidth <= 480 &&
                <Suspense fallback={null}>
                    <Sidebar showContact={showContact}/>
                </Suspense>
            }

            {
                isVisibleContact &&
                <Suspense fallback={null}>
                    <ContactUs defaultTab={defaultTab}/>
                </Suspense>
            }
        </>
    )
}

export default App