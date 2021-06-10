import Material from "./Material"

function HomePrice({showContact, title, price, priceDesc, pricePrefix, description})
{
    return (
        <div className="home-price-box">
            <div className="home-price-box-title">{title}</div>
            <div className="home-price-box-price"><span className="home-price-box-price-desc">{pricePrefix}</span> {price} <span className="home-price-box-price-desc">{priceDesc}</span></div>
            <div className="home-price-box-desc">{description}</div>
            <Material className="home-price-box-btn" onClick={showContact}>ثبت سفارش</Material>
        </div>
    )
}

export default HomePrice