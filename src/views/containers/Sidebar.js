import React, {PureComponent} from "react"
import Link from "../components/Link"
import Material from "../components/Material"
import goToPrice from "../../helpers/goToPrice"

class Sidebar extends PureComponent
{
    constructor(props)
    {
        super(props)
        this.deltaX = 0
        this.posX = 0
        this.posY = 0
        this.prevX = null
        this.changing = false
        this.started = false
        this.deltaY = 0
        this.showSideFlag = false
    }

    componentDidMount()
    {
        document.addEventListener("touchstart", this.onTouchStart, {passive: true})
        document.addEventListener("touchmove", this.onTouchMove, {passive: true})
        document.addEventListener("touchend", this.onTouchEnd, {passive: true})
        window.addEventListener("popstate", this.onPop, {passive: true})
    }

    componentWillUnmount()
    {
        document.removeEventListener("touchstart", this.onTouchStart)
        document.removeEventListener("touchmove", this.onTouchMove)
        document.removeEventListener("touchend", this.onTouchEnd)
        window.removeEventListener("popstate", this.onPop)
    }

    onPop = () =>
    {
        if (this.showSideFlag) this.hideSide(true)
    }

    showSide = () =>
    {
        window.history.pushState("for-history", "", document.location.pathname)
        this.showSideFlag = true
        this.sidebar.style.transition = "transform linear 0.2s"
        this.sidebar.style.transform = `translate3d(0px,0,0)`
        this.sidebarBack.style.transition = "opacity linear 0.3s, height linear 0s 0s"
        this.sidebarBack.style.opacity = `1`
        this.sidebarBack.style.height = `100vh`
        if (document.body.clientWidth <= 480) document.body.style.overflowY = "hidden"
        setTimeout(() =>
        {
            if (this.sidebar) this.sidebar.style.transition = "initial"
            if (this.sidebarBack) this.sidebarBack.style.transition = "initial"
        }, 250)
    }

    hideSide = (dontRemovePush, e, redirectTo) =>
    {
        if (!dontRemovePush && this.showSideFlag) window.history.back()
        else if (e && redirectTo)
        {
            e.preventDefault()
            window.history.replaceState("", "", redirectTo)
        }
        this.showSideFlag = false
        this.sidebar.style.transition = "transform linear 0.1s"
        this.sidebar.style.transform = `translate3d(100%,0,0)`
        this.sidebarBack.style.transition = "opacity linear 0.3s, height linear 0s 0.4s"
        this.sidebarBack.style.opacity = `0`
        this.sidebarBack.style.height = `0`
        document.body.style.overflowY = "auto"
        setTimeout(() =>
        {
            if (this.sidebar)
            {
                this.sidebar.style.transition = "initial"
                this.sidebar.scroll({top: 0})
            }
            if (this.sidebarBack) this.sidebarBack.style.transition = "initial"
        }, 250)
    }

    checkParentClass(element, classname)
    {
        if (element.className && element.className.toString().split(" ").indexOf(classname) >= 0) return true
        return element.parentNode && this.checkParentClass(element.parentNode, classname)
    }

    onTouchStart = e =>
    {
        if (!this.checkParentClass(e.target, "dont-gesture"))
        {
            this.prevX = this.showSideFlag ? 0 : this.sidebar ? this.sidebar.clientWidth : 0
            this.posX = e.touches[0].clientX
            this.posY = e.touches[0].clientY
            this.started = true
        }
    }

    onTouchMove = e =>
    {
        this.deltaY = this.posY - e.touches[0].clientY
        this.deltaX = this.posX - e.touches[0].clientX
        if (this.changing || (this.started && this.deltaY < 5 && this.deltaY > -5 && (this.deltaX > 5 || this.deltaX < -5)))
        {
            this.posX = e.touches[0].clientX
            this.prevX = this.prevX - this.deltaX >= 0 ? this.prevX - this.deltaX <= this.sidebar.clientWidth ? this.prevX - this.deltaX : this.sidebar.clientWidth : 0
            this.sidebar.style.transform = `translate3d(${this.prevX}px,0,0)`
            this.sidebarBack.style.opacity = `${1 - (this.prevX / this.sidebar.clientWidth)}`
            this.sidebarBack.style.height = `100vh`
            if (this.started)
            {
                if (document.body.clientWidth <= 480) document.body.style.overflowY = "hidden"
                this.changing = true
            }
            this.started = false
        }
        else this.started = false
    }

    onTouchEnd = () =>
    {
        if (this.changing)
        {
            if (!(this.deltaX > 3) && (this.deltaX < -3 || this.prevX >= this.sidebar.clientWidth / 2))
            {
                this.prevX = this.sidebar.clientWidth
                this.hideSide()
            }
            else
            {
                this.prevX = 0
                this.showSide()
            }
            this.changing = false
        }
    }

    toggleSidebar = () =>
    {
        if (this.showSideFlag) this.hideSide()
        else if (document.body.clientWidth <= 480) this.showSide()
    }

    showContact = () =>
    {
        const {showContact} = this.props
        this.hideSide(true)
        showContact({dontPush: true})
    }

    goToPriceSection = () =>
    {
        this.hideSide()
        setTimeout(() => goToPrice(), 100)
    }

    render()
    {
        return (
            <React.Fragment>
                <div id="sidebarBack" ref={e => this.sidebarBack = e} style={{opacity: "0", height: "0"}} className="header-sidebar-back" onClick={this.toggleSidebar}/>
                <div ref={e => this.sidebar = e} style={{transform: "translate3d(100%,0,0)"}} className="header-sidebar">
                    <div className="header-sidebar-profile">
                        <div className="header-sidebar-profile-title">{process.env.REACT_APP_TITLE}</div>
                        <div className="header-sidebar-profile-sign">{process.env.REACT_APP_BANNER}</div>
                    </div>
                    <Material className="header-sidebar-sign-in" onClick={this.showContact}>ثبت سفارش</Material>
                    <div className="header-sidebar-section">
                        <Link to="/resume" onClick={e => this.hideSide(true, e, "/resume")}><Material className="header-sidebar-section-item">نمونه کارها</Material></Link>
                        <Material className="header-sidebar-section-item" onClick={this.goToPriceSection}>تعرفه‌ها</Material>
                        <Link to="/about-us" onClick={e => this.hideSide(true, e, "/about-us")}><Material className="header-sidebar-section-item">درباره ما</Material></Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Sidebar