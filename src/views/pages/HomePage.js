import Material from "../components/Material"
import design from "../../media/images/design.svg"
import support from "../../media/images/support.svg"
import mentoring from "../../media/images/mentoring.svg"
import HomeDesc from "../components/HomeDesc"
import KeyboardArrowSvg from "../../media/svgs/KeyboardArrowSvg"
import example from "../../media/images/example.jpg"
import HomeService from "../components/HomeService"
import WebSvg from "../../media/svgs/WebSvg"
import AppSvg from "../../media/svgs/AppSvg"
import SeoSvg from "../../media/svgs/SeoSvg"
import company from "../../media/images/company.svg"
import shopping from "../../media/images/shopping.svg"
import GraphicSvg from "../../media/svgs/GraphicSvg"
import Link from "../components/Link"
import HomePrice from "../components/HomePrice"

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
                    <Material id="create-order" className="home-section-button" backgroundColor="var(--second-material-color)" onClick={showContact}>ثبت سفارش</Material>
                </div>
                <img className="home-section-img desktop" src={design} alt="طراحی نوین"/>
            </section>

            <section className="home-section-second">
                <div className="home-courses-arrow-down"><KeyboardArrowSvg className="home-courses-arrow-down-svg"/></div>
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
                    <div className="home-section-third-second">جدیدترین نمونه‌کارهای ما</div>
                    <div className="home-section-third-first">خودتان قضاوت کنید</div>
                    <div className="home-section-third-third desktop">در این قسمت می توانید آخرین نمونه‌کارهای شرکت نوین ورک را در زمینه طراحی سایت های فروشگاهی، شرکتی، خبری و سفارشی ببینید.</div>
                    <Link className="home-section-third-button desktop" to="/resume">
                        <Material className="home-section-third-button-material">
                            <div>مشاهده نمونه‌کارها</div>
                            <KeyboardArrowSvg className="home-section-third-button-svg"/>
                        </Material>
                    </Link>
                </div>
                <div className="home-section-third-img-cont">
                    <img loading="lazy" className="home-section-third-img" src={example} alt=""/>
                </div>
                <div className="home-section-third-third mobile">در این قسمت می توانید آخرین نمونه‌کارهای شرکت نوین ورک را در زمینه طراحی سایت های فروشگاهی، شرکتی، خبری و سفارشی ببینید.</div>
                <Link className="home-section-third-button mobile" to="/resume">
                    <Material className="home-section-third-button-material">
                        <div>مشاهده نمونه‌کارها</div>
                        <KeyboardArrowSvg className="home-section-third-button-svg"/>
                    </Material>
                </Link>
            </section>

            <section className="home-section-price">
                <div className="home-section-price-item">
                    <img loading="lazy" className="home-section-price-item-img" src={company} alt=""/>
                    <div className="home-section-second-content">
                        <HomePrice showContact={showContact} title="شرکتی ساده" pricePrefix="از" price="1 میلیون" priceDesc="تومان" description="با کمترین هزینه سایتی ساده و شیک را برایتان طراحی می‌کنیم"/>
                        <HomePrice showContact={showContact} title="شرکتی پیشرفته" pricePrefix="از" price="3 میلیون" priceDesc="تومان" description="در این پکیج با امکانات متنوع و اختصاصی سایت شما را متفاوت طراحی می‌کنیم"/>
                    </div>
                </div>
                <div className="home-section-price-item">
                    <img loading="lazy" className="home-section-price-item-img" src={shopping} alt=""/>
                    <div className="home-section-second-content">
                        <HomePrice showContact={showContact} title="فروشگاهی ساده" pricePrefix="از" price="3 میلیون" priceDesc="تومان" description="با کمترین هزینه فروشگاه اینترنتی خود را راه‌اندازی کنید"/>
                        <HomePrice showContact={showContact} title="فروشگاهی پیشرفته" pricePrefix="از" price="5 میلیون" priceDesc="تومان" description="در این پکیج با امکانات متنوع و اختصاصی سایت شما را متفاوت طراحی می‌کنیم"/>
                    </div>
                </div>
            </section>

            <section className="home-section-forth">
                <div className="home-section-forth-title">خدمات پلاس</div>
                <div className="home-section-forth-content-box">
                    <HomeService img={support} title="مشاوره رایگان" description="اگر شما در زمینه طراحی سایت، طراحی اپلیکیشن و سئو نیاز به مشاوره دارید، همکاران ما آماده راهنمایی صحیح و ارائه پیشنهاد و پاسخگویی به سوالات شما هستند. برای هماهنگی قرار حضوری، تلفنی یا آنلاین با ما تماس بگیرید."/>
                    <HomeService img={mentoring} title="پشتیبانی آنلاین" description="بعد از پایان طراحی سایت و با توجه به ضرورت پشتیبانی وب سایت متخصصین ما در بخش پشتیبانی برای حل مشکلات وب سایت به صورت آنلاین در خدمت شما هستند."/>
                </div>
            </section>
        </>
    )
}

export default HomePage