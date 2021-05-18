function HomeDesc(props)
{
    const {title, desc, icon} = props
    return (
        <div className="home-section-second-item">
            {icon}
            <div className="home-section-second-item-title">
                <div className="home-section-second-item-circle"/>
                <div>{title}</div>
            </div>
            <div className="home-section-second-item-desc">{desc}</div>
        </div>
    )
}

export default HomeDesc