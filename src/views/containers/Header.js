import logo from "../../media/images/logo.png"
import Material from "../components/Material"
import Link from "../components/Link"

function Header(props)
{
    const {showContact} = props
    return (
        <>
            <header className="header">
                <Material className="header-logo-hamburger">
                    <div className="header-logo-line"/>
                    <div className="header-logo-line"/>
                </Material>
                <div className="header-logo-name">نوین ورک</div>
                <Link to="/" className="header-logo-cont">
                    <img className="header-logo" src={logo} alt="نوین ورک"/>
                    <div className="header-logo-text">نوین ورک</div>
                </Link>
                <div className="header-content">
                    <Material className="header-content-item">خدمات</Material>
                    <Link to="/resume"><Material className="header-content-item">نمونه کارها</Material></Link>
                    <Material className="header-content-item">تعرفه‌ها</Material>
                    <Link to="/about-us"><Material className="header-content-item">درباره ما</Material></Link>
                    <Material className="header-content-item order" backgroundColor="var(--second-material-color)" onClick={showContact}>ثبت سفارش</Material>
                </div>
            </header>
        </>
    )
}

export default Header