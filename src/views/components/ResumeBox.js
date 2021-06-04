import Material from "./Material"
import React, {useState} from "react"
import MyLoader from "./MyLoader"

function ResumeBox(props)
{
    const {resumeThumb, resumeMain} = props
    const [isShow, setIsShow] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    function popState()
    {
        setIsShow(false)
        document.body.style.overflowY = "auto"
        window.removeEventListener("popstate", popState)
    }

    function toggleShow()
    {
        if (isShow) window.history.back()
        else
        {
            setIsShow(true)
            document.body.style.overflowY = "hidden"
            window.history.pushState("for-history", "", document.location.pathname)
            window.addEventListener("popstate", popState, {passive: true})
            if (!isLoaded)
            {
                let img = new Image()
                img.src = resumeMain
                img.onload = () => setIsLoaded(true)
            }
        }
    }

    return (
        <>
            <Material className="resume-box" onClick={toggleShow}>
                <img className="resume-box-img" src={resumeThumb} alt=""/>
            </Material>
            {
                isShow &&
                <div className={`resume-box-img-fix-cont ${isLoaded ? "" : "loading"}`} onClick={toggleShow}>
                    {isLoaded && <img className="resume-box-img-fix" src={resumeMain} alt=""/>}
                    <MyLoader className={`resume-box-img-loading ${isLoaded ? "hide" : ""}`} width={60}/>
                </div>
            }
        </>
    )
}

export default ResumeBox