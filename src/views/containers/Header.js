import logo from "../../media/images/logo.png"
import Material from "../components/Material"

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
        </>
    )
}

export default Header