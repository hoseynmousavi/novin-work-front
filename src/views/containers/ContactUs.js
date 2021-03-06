import React, {PureComponent} from "react"
import Material from "../components/Material"
import ArrowSvg from "../../media/svgs/ArrowSvg"
import MyLoader from "../components/MyLoader"
import AtSvg from "../../media/svgs/AtSvg"
import PhonesSvg from "../../media/svgs/MobilePhoneSvg"
import MobilePhoneSvg from "../../media/svgs/MobilePhoneSvg"
import numberCorrection from "../../helpers/numberCorrection"
import Constant from "../../constant/Constant"
import SocialIcons from "../components/SocialIcons"
import request from "../../functions/request"
import {toast} from "react-toastify"

class ContactUs extends PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            title: "پکیج سفارشی",
            height: "0",
        }
    }

    componentDidMount()
    {
        const {defaultTab} = this.props
        if (defaultTab) this.setState({title: defaultTab})
    }

    hideContact = () => window.history.back()

    showDialog = () => this.setState({showDialog: true, height: "300px"})

    hideDialog = () => this.setState({showDialog: false, height: "0"})

    selectTitle = title => this.setState({title}, () => this.hideDialog())

    changeInput = name => e =>
    {
        if (name === "contact")
        {
            let input = numberCorrection(e.target.value.trim().toLowerCase())
            this.setState({[name + "Valid"]: input === "" || Constant.PHONE_REGEX.test(input) || Constant.EMAIL_REGEX.test(input), [name]: input})
        }
        else if (name === "desc")
        {
            let input = numberCorrection(e.target.value)
            this.setState({[name + "Valid"]: !!input, [name]: input})
        }
    }

    submit = () =>
    {
        let {isLoading, contactValid, descValid, desc, contact, title} = this.state || {}
        if (!isLoading)
        {
            if (contactValid && descValid)
            {
                if (Constant.SUBJECT_CHOICES[title])
                {
                    this.setState({isLoading: true}, () =>
                    {
                        request.post({
                            url: "contact",
                            data: {
                                subject: Constant.SUBJECT_CHOICES[title],
                                description: desc,
                                contact_info: contact,
                            },
                        })
                            .then(() =>
                            {
                                this.setState({isLoading: false}, () =>
                                {
                                    this.hideContact()
                                    toast.success("پیام شما با موفقیت ارسال شد")
                                })
                            })
                            .catch(() => this.setState({isLoading: false}, () => toast.error("ارسال پیام با مشکل مواجه شد، بعداً امتحان کنید!")))
                    })
                }
                else toast.error("خطا در عنوان متن!")
            }
            else
            {
                if (descValid === undefined) descValid = false
                if (contactValid === undefined) contactValid = false
                this.setState({descValid, contactValid})
            }
        }
    }

    render()
    {
        const {showDialog, title, isLoading, contact, contactValid, descValid, desc, height} = this.state || {}
        return (
            <>
                <div className="show-session-quiz-back dont-gesture" onClick={this.hideContact}/>
                <div className="header-contact-modal dont-gesture">
                    {
                        showDialog && <div className="header-contact-modal-content-form-dialog-back" onClick={this.hideDialog}/>
                    }
                    <div className="header-contact-modal-title">ارتباط با ما</div>
                    <div className="header-contact-modal-content">
                        <div className="header-contact-modal-content-form">
                            <Material className="header-contact-modal-content-form-title" onClick={this.showDialog}>
                                <div>{title ? title : "موضوع پیام *"}</div>
                                <ArrowSvg className="header-contact-modal-content-form-title-svg"/>
                            </Material>
                            <div className={`header-contact-modal-content-form-dialog ${showDialog ? "" : "hide"}`} style={{height}}>
                                {
                                    Object.keys(Constant.SUBJECT_CHOICES).map(item =>
                                        <Material key={item} className="header-contact-modal-content-form-title item" onClick={() => this.selectTitle(item)}>
                                            <div>{item}</div>
                                        </Material>,
                                    )
                                }
                            </div>
                            <textarea placeholder="توضیحات *"
                                      className={`header-contact-modal-content-form-area ${descValid || descValid === undefined ? "" : "err"}`}
                                      rows={10}
                                      value={desc || ""}
                                      onChange={this.changeInput("desc")}
                            />
                            <input className={`header-contact-modal-content-form-area ${contactValid || contactValid === undefined ? "" : "err"}`}
                                   value={contact || ""}
                                   placeholder="ایمیل یا شماره تماس *"
                                   onChange={this.changeInput("contact")}
                            />
                            <Material className={`profile-page-submit ${isLoading ? "disable" : ""}`} onClick={this.submit}>
                                {
                                    isLoading ?
                                        <MyLoader width={17}/>
                                        :
                                        "ارسال"
                                }
                            </Material>
                        </div>
                        <div className="header-contact-modal-content-detail">
                            <div className="header-contact-modal-content-detail-call-us">
                                دیگر راه‌های ارتباطی:
                            </div>
                            <div className="footer-left-details-call wrap">
                                <a href={`mailto:${process.env.REACT_APP_EMAIL}`} className="footer-left-details-call-item">
                                    <Material className="footer-left-details-call-material modal">
                                        <div className="direction-ltr">{process.env.REACT_APP_EMAIL}</div>
                                        <AtSvg className="footer-left-details-call-svg"/>
                                    </Material>
                                </a>
                                <a href={`tel:${process.env.REACT_APP_PHONE_NUMBER.replace(/-/g, "")}`} className="footer-left-details-call-item">
                                    <Material className="footer-left-details-call-material modal">
                                        <div className="direction-ltr">{process.env.REACT_APP_PHONE_NUMBER}</div>
                                        <PhonesSvg className="footer-left-details-call-svg"/>
                                    </Material>
                                </a>
                                <a href={`tel:${process.env.REACT_APP_PHONE.replace(/-/g, "")}`} className="footer-left-details-call-item modal">
                                    <Material className="footer-left-details-call-material modal">
                                        <div className="direction-ltr">{process.env.REACT_APP_PHONE}</div>
                                        <MobilePhoneSvg className="footer-left-details-call-svg"/>
                                    </Material>
                                </a>
                            </div>

                            <div className="header-contact-modal-content-address">
                                نشانی:
                            </div>
                            <div>
                                {process.env.REACT_APP_ADDRESS}
                            </div>

                            <div className="footer-left-social wrap">
                                <div>ما را در شبکه‌های اجتماعی دنبال کنید:</div>
                                <div className="footer-left-social-icons wrap">
                                    <SocialIcons/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactUs