import service from "../../media/images/service.png"

function HomeService()
{
    return (
        <div className="home-section-forth-content">
            <img loading="lazy" className="home-section-forth-img" src={service} alt=""/>
            <div className="home-section-forth-content-inner">
                <div className="home-section-forth-content-title">
                    <div className="home-section-second-item-circle service"/>
                    <div>مشاوره رایگان</div>
                </div>
                <div className="home-section-forth-content-text">
                    اگر شما در زمینه طراحی سایت، طراحی اپلیکیشن و سئو نیاز به مشاوره دارید، همکاران ما آماده راهنمایی صحیح و ارائه پیشنهاد و پاسخگویی به سوالات شما هستند.
                    برای هماهنگی قرار حضوری، تلفنی یا آنلاین با ما تماس بگیرید.
                </div>

                <div className="home-section-forth-content-title">
                    <div className="home-section-second-item-circle service"/>
                    <div>پشتیبانی آنلاین</div>
                </div>
                <div className="home-section-forth-content-text">
                    بعد از پایان طراحی سایت و با توجه به ضرورت پشتیبانی وب سایت متخصصین ما در بخش پشتیبانی برای حل مشکلات وب سایت به صورت آنلاین در خدمت شما هستند.
                </div>
            </div>
        </div>
    )
}

export default HomeService