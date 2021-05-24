import Material from "../components/Material"
import design from "../../media/images/design.png"
import mobile from "../../media/images/mobile.png"
import HomeDesc from "../components/HomeDesc"
import KeyboardArrowSvg from "../../media/svgs/KeyboardArrowSvg"
import HomeService from "../components/HomeService"
import WebSvg from "../../media/svgs/WebSvg"
import AppSvg from "../../media/svgs/AppSvg"
import SeoSvg from "../../media/svgs/SeoSvg"
import GraphicSvg from "../../media/svgs/GraphicSvg"

function Home()
{
    return (
        <>
            <section className="home-section">
                <div className="home-section-right">
                    <h2 className="home-section-title">طراحی سایت و اپلیکیشن</h2>
                    <div className="home-section-desc">کلاس کارِت رو بالا ببر</div>
                    <div className="home-section-desc silver">
                        ما در نوین ورک با بهره گیری از پیشرفته ترین فناوری های روز دنیا با افتخار اقدام به طراحی وبسایت شما می‌کنیم.
                        ظاهری شکیل، امنیت بالا، سرعت مناسب و بهینه‌سازی را در کنار هم جمع کرده‌ایم.
                    </div>
                    <Material className="home-section-button" backgroundColor="var(--second-material-color)">ثبت سفارش</Material>
                </div>
                <img className="home-section-img" src={design} alt="طراحی نوین"/>
            </section>

            <section className="home-section-second">
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
                <img className="home-section-third-img" src={mobile} alt="آخرین نمونه کار نوین ورک"/>
                <Material className="home-section-third-button mobile">
                    <div>مشاهده نمونه‌کارها</div>
                    <KeyboardArrowSvg className="home-section-third-button-svg"/>
                </Material>
            </section>

            <section className="home-section-forth">
                <div className="home-section-forth-title">خدمات نوین ورک</div>
                <HomeService/>
                <HomeService isLeftImg/>
                <HomeService/>
            </section>
        </>
    )
}

export default Home