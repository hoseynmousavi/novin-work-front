import service from "../../media/images/service.png"

function HomeService(props)
{
    const {isLeftImg} = props
    return (
        <div className="home-section-forth-content">
            <img className={`home-section-forth-img ${!isLeftImg ? "" : "hide"}`} src={service} alt=""/>
            <div className={`home-section-forth-content-inner ${isLeftImg ? "right" : ""}`}>
                <div className="home-section-forth-content-title">
                    <div className="home-section-second-item-circle service"/>
                    <div>مشاوره رایگان</div>
                </div>
                <div className="home-section-forth-content-text">
                    مشاوره جهت راه اندازی کسب وکار اینترنتی پیش از انجام هر کاری ضروری ست تا نتیجه مطلوب حاصل شود. در جلسات مشاوره؛ نکته‌هایی مطرح می‌گردند و نتایجی حاصل می‌شود که برای طرفین سودآور خواهد بود.
                    مشاوره جهت راه اندازی کسب وکار اینترنتی پیش از انجام هر کاری ضروری ست تا نتیجه مطلوب حاصل شود. در جلسات مشاوره؛ نکته‌هایی مطرح می‌گردند و نتایجی حاصل می‌شود که برای طرفین سودآور خواهد بود.
                    مشاوره جهت راه اندازی کسب وکار اینترنتی پیش از انجام هر کاری ضروری ست تا نتیجه مطلوب حاصل شود. در جلسات مشاوره؛ نکته‌هایی مطرح می‌گردند و نتایجی حاصل می‌شود که برای طرفین سودآور خواهد بود.
                </div>
            </div>
            <img className={`home-section-forth-img left ${!isLeftImg ? "hide" : ""}`} src={service} alt=""/>
        </div>
    )
}

export default HomeService