import {useEffect} from "react"
import loadColors from "./helpers/loadColors"
import Header from "./views/containers/Header"
import Home from "./views/pages/Home"
import Footer from "./views/containers/Footer"

function App()
{
    useEffect(() => process.env.NODE_ENV !== "production" && loadColors(), [])

    return (
        <>
            <Header/>
            <Home/>
            <Footer/>
        </>
    )
}

export default App
