import Material from "../components/Material"
import design from "../../media/images/design.png"
import HomeDesc from "../components/HomeDesc"
import KeyboardArrowSvg from "../../media/svgs/KeyboardArrowSvg"
import HomeService from "../components/HomeService"
import WebSvg from "../../media/svgs/WebSvg"
import AppSvg from "../../media/svgs/AppSvg"
import SeoSvg from "../../media/svgs/SeoSvg"
import GraphicSvg from "../../media/svgs/GraphicSvg"
import LaptopSvg from "../../media/svgs/LaptopSvg"
import MobileFrame from "../../media/svgs/MobileFrame"
import site from "../../media/images/resume.jpg"
import siteMobile from "../../media/images/resume-m.jpg"

function HomePage(props)
{
    const {showContact} = props
    return (
        <>
            <section className="home-section">
                <div className="home-section-right">
                    <h2 className="home-section-title">{process.env.REACT_APP_TITLE}</h2>
                    <div className="home-section-desc">{process.env.REACT_APP_BANNER}</div>
                    <img className="home-section-img mobile" src={design} alt="طراحی نوین"/>
                    <div className="home-section-desc silver">
                        {process.env.REACT_APP_EXPLAINATION}
                    </div>
                    <Material className="home-section-button" backgroundColor="var(--second-material-color)" onClick={showContact}>ثبت سفارش</Material>
                </div>
                <img className="home-section-img desktop" src={design} alt="طراحی نوین"/>
            </section>

            <section className="home-section-second">
                <div className="home-section-second-title">خدمات ما</div>
                <div className="home-section-second-content">
                    <HomeDesc title="طراحی وبسایت"
                              desc="طراحی اختصاصی وب سایت حرفه ای با برنامه نویسی روز دنیا به صورت رسپانسیو و کاملا بهینه"
                              icon={<WebSvg className="home-section-second-item-svg"/>}
                    />
                    <HomeDesc title="طراحی اپلیکیشن"
                              desc="طراحی و برنامه نویسی اپلیکیشن اندروید و ios با به روزترین ابزار دنیا با متخصصین حرفه‌ای"
                              icon={<AppSvg className="home-section-second-item-svg"/>}
                    />
                    <HomeDesc title="طراحی گرافیکی"
                              desc="طراحی قالب سایت، لوگو، بنر، کاتالوگ، ست اداری و تصاویر متحرک متناسب با کسب و کار شما"
                              icon={<GraphicSvg className="home-section-second-item-svg"/>}
                    />
                    <HomeDesc title="سئو و بهینه‌سازی"
                              desc="بهینه سازی وب سایت برای کلمات کلیدی، ارتقای رتبه سایت، بررسی رقبا و تحلیل بازار اینترنتی"
                              icon={<SeoSvg className="home-section-second-item-svg"/>}
                    />
                </div>
            </section>

            <section className="home-section-third">
                <div className="home-section-third-content">
                    <div className="home-section-third-first">خودتان قضاوت کنید</div>
                    <div className="home-section-third-second">جدیدترین نمونه‌کارهای ما</div>
                    <div className="home-section-third-third">در این قسمت می توانید آخرین نمونه‌کارهای شرکت نوین ورک را در زمینه طراحی سایت های فروشگاهی، شرکتی، خبری و سفارشی ببینید.</div>
                    <Material className="home-section-third-button desktop">
                        <div>مشاهده نمونه‌کارها</div>
                        <KeyboardArrowSvg className="home-section-third-button-svg"/>
                    </Material>
                </div>
                <div className="home-section-third-images">
                    <img loading="lazy" className="home-section-third-img-mobile" src={siteMobile} alt="آخرین نمونه کار نوین ورک"/>
                    <MobileFrame className="home-section-third-mobile"/>
                    <img loading="lazy" className="home-section-third-img-in" src={site} alt="آخرین نمونه کار نوین ورک"/>
                    <LaptopSvg className="home-section-third-img"/>
                </div>
                <Material className="home-section-third-button mobile">
                    <div>مشاهده نمونه‌کارها</div>
                    <KeyboardArrowSvg className="home-section-third-button-svg"/>
                </Material>
            </section>

            <section className="home-section-forth">
                <div className="home-section-forth-title">خدمات پلاس</div>
                <HomeService/>
            </section>
        </>
    )
}

export default HomePage