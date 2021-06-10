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
                        <img loading="lazy" className="footer-right-title-svg" src={logo} alt="نوین ورک"/>
                        <div className="footer-right-title-text">از نوین ورک بیشتر بدانیم</div>
                    </div>
                    <div className="footer-right-text">
                        نوین ورک تیمی متخصص و حرفه ای با پشتوانه دانش فنی و نیروی انسانی مجرب  در زمینه های طراحی و ساخت سایت با تعرفه ها و زمینه های متنوع مثل طراحی وب سایت شرکتی، طراحی وب سایت شخصی، طراحی سایت فروشگاهی، ساخت سایت های خبری و طراحی سایت سفارشی و دارای نمونه کار های متعدد و متنوع با قیمت مناسب می کوشد.
                    </div>
                </div>
                <div className="footer-left">
                    <div className="footer-left-title">
                        <div className="footer-left-title-text">ارتباط با ما</div>
                    </div>
                    <div className="footer-left-details">
                        <div className="footer-left-details-call">
                            <a href={`mailto:${process.env.REACT_APP_EMAIL}`} className="footer-left-details-call-item">
                                <Material className="footer-left-details-call-material">
                                    <div className="direction-ltr">{process.env.REACT_APP_EMAIL}</div>
                                    <AtSvg className="footer-left-details-call-svg"/>
                                </Material>
                            </a>
                            <a href="tel:09109170063" className="footer-left-details-call-item">
                                <Material className="footer-left-details-call-material">
                                    <div className="direction-ltr">{process.env.REACT_APP_PHONE_NUMBER}</div>
                                    <MobilePhoneSvg className="footer-left-details-call-svg"/>
                                </Material>
                            </a>
                            <a href="tel:09195100678" className="footer-left-details-call-item">
                                <Material className="footer-left-details-call-material">
                                    <div className="direction-ltr">{process.env.REACT_APP_PHONE}</div>
                                    <MobilePhoneSvg className="footer-left-details-call-svg"/>
                                </Material>
                            </a>
                        </div>
                        <div className="footer-left-form">
                            {process.env.REACT_APP_ADDRESS}
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