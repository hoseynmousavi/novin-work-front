import resume from "../../media/images/resume2.jpg"
import Material from "./Material"
import React, {useState} from "react"

function ResumeBox()
{
    const [isShow, setIsShow] = useState(false)

    function toggleShow()
    {
        if (isShow)
        {
            setIsShow(false)
        }
        else
        {
            setIsShow(true)
        }
    }

    return (
        <>
            <Material className="resume-box" onClick={toggleShow}>
                <img className="resume-box-img" src={resume} alt=""/>
            </Material>
            {
                isShow &&
                <>
                    <div className="show-session-quiz-back dont-gesture" onClick={toggleShow}/>
                    <div className="resume-box-img-fix-cont">
                        <img className="resume-box-img-fix" src={resume} alt=""/>
                    </div>
                </>
            }
        </>
    )
}

export default ResumeBox