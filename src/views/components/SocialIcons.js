import TelegramSvg from "../../media/svgs/TelegramSvg"
import LinkedinSvg from "../../media/svgs/LinkedinSvg"
import WhatsappSvg from "../../media/svgs/WhatsappSvg"
import InstaSvg from "../../media/svgs/InstaSvg"
import TwitterSvg from "../../media/svgs/TwitterSvg"

function SocialIcons()
{
    return (
        <>
            <a href="https://t.me/novin_work" target="_blank" rel="noreferrer"><TelegramSvg className="footer-left-social-icon"/></a>
            <a href="https://www.linkedin.com/company/novin_work" target="_blank" rel="noreferrer"><LinkedinSvg className="footer-left-social-icon"/></a>
            <a href="https://wa.me/+989309437519" target="_blank" rel="noreferrer"><WhatsappSvg className="footer-left-social-icon"/></a>
            <a href="https://www.instagram.com/novinwork.company" target="_blank" rel="noreferrer"><InstaSvg className="footer-left-social-icon"/></a>
            <a href="https://twitter.com/novin_work" target="_blank" rel="noreferrer"><TwitterSvg className="footer-left-social-icon"/></a>
        </>
    )
}

export default SocialIcons