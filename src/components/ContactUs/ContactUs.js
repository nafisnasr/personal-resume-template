import React, { useState } from 'react'
import TitleSection from "../TitleSection/TitleSection"
import { GrLinkedinOption } from "react-icons/gr"
import { FaInstagram } from "react-icons/fa"
import { BsTelegram } from "react-icons/bs"
import swal from 'sweetalert'


import "./ContactUs.css"

export default function ContactUs() {

    const [firstNameValue, setFirstNameValue] = useState('')
    const [lastNameValue, setLastNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [subjectValue, setSubjectValue] = useState('')
    const [textAreaValue, setTextAreaValue] = useState('')

    const submitHandler = (event) => {

        event.preventDefault()
        console.log("submitted")

        setFirstNameValue('')
        setLastNameValue('')
        setEmailValue('')
        setSubjectValue('')
        setTextAreaValue('')

        swal({
            title: "پیام شما با موفقیت ثبت شد!",
            icon: "success",
            buttons: "بستن",
        })
    }

    return (
        <section className='contact-us'>
            <div className="container">

                <TitleSection
                    title="تماس با من"
                    category="تماس"
                    isCenter={true}
                />

                <div className="contact-us-wrapper row">

                    <div className="col-lg-5 col-11">
                        <div className="contact-right-col">
                            <div className="contact-img-container my-2">
                                <img src="/images/contact-us.webp"
                                    alt="contact us"
                                    className="container-fluid"
                                />
                            </div>
                            <h3 className='contact-title'>نعیم احمدی طراح سایت</h3>
                            <p>گروه طراحی سایت</p>

                            <div className="contact-me-form my-2">
                                <p>برای مشاوره فرم را ارسال کنید تا کارشناسان ما با شما تماس بگیرند.</p>
                                <div className='telephone'>
                                    <span className='phone'>شماره تلفن:</span>
                                    <span>021333333</span>
                                </div>
                                <div className='mobile'>
                                    <span className='phone'>شماره موبایل:</span>
                                    <span>021333333</span>
                                </div>
                            </div>
                            <div className="contact-box">
                                <span>راه های ارتباط با من:</span>

                                <div className="social-media-box">
                                    <a className='social-icon link' href='#'>
                                        <GrLinkedinOption className="icon" />
                                    </a>
                                    <a className='social-icon link' href='#'>
                                        <FaInstagram className="icon" />
                                    </a>
                                    <a className='social-icon link' href='#'>
                                        <BsTelegram className="icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-11">
                        <div className="contact-left-col">
                            <form>

                                <div className="name-box">
                                    <div className="input-box">
                                        <label>نام شما</label>
                                        <input className='input'
                                            type="text"
                                            value={firstNameValue}
                                            onChange={event => setFirstNameValue(event.target.value)}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label>نام و نام خانوادگی</label>
                                        <input className='input'
                                            type="text"
                                            value={lastNameValue}
                                            onChange={event => setLastNameValue(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="email-box">
                                    <div className="input-box">
                                        <label >ایمیل</label>
                                        <input className='input'
                                            type="email"
                                            value={emailValue}
                                            onChange={event => setEmailValue(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="subject-box">
                                    <div className="input-box">
                                        <label >موضوع</label>
                                        <input className='input'
                                            type="text"
                                            value={subjectValue}
                                            onChange={event => setSubjectValue(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="text-box">
                                    <div className="input-box">
                                        <label >متن پیام</label>
                                        <textarea className='input'
                                            cols="30"
                                            value={textAreaValue}
                                            onChange={event => setTextAreaValue(event.target.value)}
                                            rows="10"></textarea>
                                    </div>
                                </div>
                                <div className="submit-btn-container">
                                    <input
                                        type="submit"
                                        value="ارسال"
                                        className='submit-btn'
                                        onClick={submitHandler}
                                    />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
