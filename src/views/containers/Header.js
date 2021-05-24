import logo from "../../media/images/logo.png"
import Material from "../components/Material"
import {useState} from "react"
import ContactUs from "./ContactUs"

function Header()
{
    const [isVisibleContact, setIsVisibleContact] = useState(false)

    function hideContact()
    {
        setIsVisibleContact(false)
    }

    function onPop()
    {
        const {showContact} = this.state || {}
        if (showContact) this.setState({showContact: false}, () =>
        {
            document.body.style.overflowY = "auto"
            window.removeEventListener("popstate", onPop)
        })
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
            <header className="header">
                <Material className="header-logo-hamburger">
                    <div className="header-logo-line"/>
                    <div className="header-logo-line"/>
                </Material>
                <div className="header-logo-name">نوین ورک</div>
                <div className="header-logo-cont">
                    <img className="header-logo" src={logo} alt="نوین ورک"/>
                    <div className="header-logo-text">نوین ورک</div>
                </div>
                <div className="header-content">
                    <Material className="header-content-item">خدمات</Material>
                    <Material className="header-content-item">نمونه کارها</Material>
                    <Material className="header-content-item">تعرفه‌ها</Material>
                    <Material className="header-content-item">درباره ما</Material>
                    <Material className="header-content-item order" backgroundColor="var(--second-material-color)" onClick={showContact}>ثبت سفارش</Material>
                </div>
            </header>
            {
                isVisibleContact &&
                <ContactUs hideContact={hideContact}/>
            }
        </>
    )
}

export default Header