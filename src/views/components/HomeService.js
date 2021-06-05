function HomeService(props)
{
    const {title, description, img} = props
    return (
        <div className="home-section-forth-content">
            <img loading="lazy" className="home-section-forth-img" src={img} alt=""/>
            <div className="home-section-forth-content-title">
                <div className="home-section-second-item-circle service"/>
                <div>{title}</div>
            </div>
            <div className="home-section-forth-content-text">
                {description}
            </div>
        </div>
    )
}

export default HomeService