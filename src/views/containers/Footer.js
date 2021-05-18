import Material from "../components/Material"
import AtSvg from "../../media/svgs/AtSvg"
import MobilePhoneSvg from "../../media/svgs/MobilePhoneSvg"
import SocialIcons from "../components/SocialIcons"
import logo from "../../media/images/logo.png"

function Footer()
{
    return (
        <footer className="footer-cont">
            <div className="footer-sections">
                <div className="footer-right">
                    <div className="footer-right-title">
                        <img className="footer-right-title-svg" src={logo} alt="نوین ورک"/>
                        <div className="footer-right-title-text">از نوین ورک بیشتر بدانیم</div>
                    </div>
                    <div className="footer-right-text">
                        نوین ورک با مأموریت تربیت، توسعه و توانمندسازی نیروی انسانی در اکوسیستم دیجیتال در تابستان ۹۹ آغاز به کار کرده است. آکادمی به پشتوانهٔ دانش و توسعهٔ شرکت‌های بزرگ می‌کوشد نیازهای آموزشی عمومی و تخصصی و فاصلهٔ مهارتی میان تحصیلات آکادمیک و فضای کار را با طراحی و اجرای دوره‌های آموزشی و کارآموزی سازمانی پوشش دهد. نوین ورک در این راستا محتوای آموزشی باکیفیت و دوره های کارآموزی متناسب‌سازی‌شده برای سازمان‌ها، در قالب‌های تعاملی و بر بستر مقرون‌به‌صرفه، دسترس‌پذیر و هوشمند طراحی و اجرا می‌کند.
                    </div>
                </div>
                <div className="footer-left">
                    <div className="footer-left-title">
                        <div className="footer-left-title-text">ارتباط با ما</div>
                    </div>
                    <div className="footer-left-details">
                        <div className="footer-left-details-call">
                            <a href="mailto:info@novinwork.com" className="footer-left-details-call-item">
                                <Material className="footer-left-details-call-material">
                                    <div className="direction-ltr">info@novinwork.com</div>
                                    <AtSvg className="footer-left-details-call-svg"/>
                                </Material>
                            </a>
                            <a href="tel:09109170063" className="footer-left-details-call-item">
                                <Material className="footer-left-details-call-material">
                                    <div className="direction-ltr">0910 91 700 63</div>
                                    <MobilePhoneSvg className="footer-left-details-call-svg"/>
                                </Material>
                            </a>
                            <a href="tel:09195100678" className="footer-left-details-call-item">
                                <Material className="footer-left-details-call-material">
                                    <div className="direction-ltr">0919 5100 678</div>
                                    <MobilePhoneSvg className="footer-left-details-call-svg"/>
                                </Material>
                            </a>
                        </div>
                        <div className="footer-left-form">
                            تهران، دانشگاه امیرکبیر، دفتر فینوداد
                        </div>
                        <div className="footer-left-social">
                            <div className="footer-left-social-title">ما را در شبکه‌های اجتماعی دنبال کنید:</div>
                            <div className="footer-left-social-icons">
                                <SocialIcons/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-end">
                نوین ورک - {new Date().toLocaleDateString("fa-ir").slice(0, 4)}
            </div>
        </footer>
    )
}

export default Footer