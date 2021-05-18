import logo from "../../media/images/logo.png"
import Material from "../components/Material"
import ScrollY from "../../helpers/scrollY"

function Header()
{
    const scrollY = ScrollY()
    const defaultHeight = +(process.env.REACT_APP_HEADER_HEIGHT.replace("px", ""))
    const height = Math.max(defaultHeight - scrollY / 2, defaultHeight - 80)
    const top = -Math.min(scrollY / 10, 5)
    return (
        <header className="header" style={{height}}>
            <div className="header-logo-cont">
                <img className="header-logo" src={logo} alt="نوین ورک"/>
                <div className="header-logo-text" style={{transform: `translate3d(0,${top}px,0)`}}>Novin Work</div>
            </div>
            <div className="header-content">
                <Material className="header-content-item">خدمات</Material>
                <Material className="header-content-item">نمونه کارها</Material>
                <Material className="header-content-item">تعرفه‌ها</Material>
                <Material className="header-content-item">درباره ما</Material>
                <Material className="header-content-item order" backgroundColor="var(--second-material-color)">ثبت سفارش</Material>
            </div>
        </header>
    )
}

export default Header