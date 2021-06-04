import ResumeBox from "../components/ResumeBox"
import resumeThumb from "../../media/images/resume/resume-thumb.jpg"
import resumeMain from "../../media/images/resume/resume-main.jpg"
import resumeThumb1 from "../../media/images/resume/resume-thumb1.jpg"
import resumeMain1 from "../../media/images/resume/resume-main1.jpg"
import resumeThumb2 from "../../media/images/resume/resume-thumb2.jpg"
import resumeMain2 from "../../media/images/resume/resume-main2.jpg"
import resumeThumb3 from "../../media/images/resume/resume-thumb3.jpg"
import resumeMain3 from "../../media/images/resume/resume-main3.jpg"
import resumeThumb4 from "../../media/images/resume/resume-thumb4.jpg"
import resumeMain4 from "../../media/images/resume/resume-main4.jpg"
import resumeThumb5 from "../../media/images/resume/resume-thumb5.jpg"
import resumeMain5 from "../../media/images/resume/resume-main5.jpg"
import resumeThumb6 from "../../media/images/resume/resume-thumb6.jpg"
import resumeMain6 from "../../media/images/resume/resume-main6.jpg"

function ResumePage()
{
    return (
        <div className="resume">
            <ResumeBox resumeThumb={resumeThumb} resumeMain={resumeMain}/>
            <ResumeBox resumeThumb={resumeThumb1} resumeMain={resumeMain1}/>
            <ResumeBox resumeThumb={resumeThumb2} resumeMain={resumeMain2}/>
            <ResumeBox resumeThumb={resumeThumb3} resumeMain={resumeMain3}/>
            <ResumeBox resumeThumb={resumeThumb4} resumeMain={resumeMain4}/>
            <ResumeBox resumeThumb={resumeThumb5} resumeMain={resumeMain5}/>
            <ResumeBox resumeThumb={resumeThumb6} resumeMain={resumeMain6}/>
            <div className="resume-box-hide"/>
            <div className="resume-box-hide"/>
            <div className="resume-box-hide"/>
        </div>
    )
}

export default ResumePage