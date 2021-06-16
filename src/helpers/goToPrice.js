function goToPrice()
{
    if (document.location.pathname !== "/") window.history.pushState("", "", "/")
    scrollToPrice()
}

function scrollToPrice()
{
    const defaultHeight = +(process.env.REACT_APP_HEADER_HEIGHT.replace("px", ""))
    const questionSection = document.getElementById("home-price")
    if (questionSection) window.scroll({top: questionSection.offsetTop - defaultHeight, behavior: "smooth"})
    else setTimeout(() => scrollToPrice(), 50)
}

export default goToPrice