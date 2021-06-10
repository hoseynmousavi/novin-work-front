import ResumeBox from "../components/ResumeBox"
import ResumeList from "../../constant/ResumeList"

function ResumePage()
{
    return (
        <div className="resume">
            {
                ResumeList.sort((a, b) => a.order - b.order).map((item, index) =>
                    <ResumeBox key={index} resumeThumb={item.thumb} resumeMain={item.main} name={item.name}/>,
                )
            }
            <div className="resume-box-hide"/>
            <div className="resume-box-hide"/>
            <div className="resume-box-hide"/>
        </div>
    )
}

export default ResumePage