import logo from "../../media/images/logo.png"
import Material from "../components/Material"
import Link from "../components/Link"
import ScrollY from "../../helpers/scrollY"
import goToPrice from "../../helpers/goToPrice"

function Header(props)
{
    const {showContact, location} = props
    const scrollY = ScrollY()
    const orderBtn = document.getElementById("create-order")
    const passOrderBtn = location === "/" ?
        orderBtn ?
            orderBtn.offsetTop < scrollY + +process.env.REACT_APP_HEADER_HEIGHT.replace("px", "") - 15 - orderBtn.offsetHeight
            :
            false
        :
        true

    function toggleSidebar()
    {
        document.getElementById("sidebarBack")?.click()
    }

    return (
        <>
            <header className="header">
                <Material className="header-logo-hamburger" onClick={toggleSidebar}>
                    <div className="header-logo-line"/>
                    <div className="header-logo-line"/>
                </Material>

                <div className={`header-logo-name ${passOrderBtn ? "hide" : ""}`}>نوین ورک</div>

                <Link to="/" className={`header-logo-cont ${passOrderBtn ? "center" : ""}`}>
                    <img className="header-logo" src={logo} alt="نوین ورک"/>
                    <h1 className="header-logo-text">نوین ورک</h1>
                </Link>

                <Material className={`header-content-item order mobile ${passOrderBtn ? "" : "hide"}`} backgroundColor="var(--second-material-color)" onClick={passOrderBtn ? showContact : undefined}>سفارش</Material>

                <div className="header-content">
                    <Link to="/resume"><Material className="header-content-item">نمونه کارها</Material></Link>
                    <Material className="header-content-item" onClick={goToPrice}>تعرفه‌ها</Material>
                    <Link to="/about-us"><Material className="header-content-item">درباره ما</Material></Link>
                    <Material className="header-content-item order" backgroundColor="var(--second-material-color)" onClick={showContact}>ثبت سفارش</Material>
                </div>
            </header>
        </>
    )
}

export default Header