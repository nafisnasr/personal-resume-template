import React from 'react'
import { GrLinkedinOption } from "react-icons/gr"
import { FaInstagram } from "react-icons/fa"
import { BsTelegram } from "react-icons/bs"
import Typewriter from "typewriter-effect"
import "./Main.css"

export default function Main() {
    return (
        <main>
            <div className="container">

                <div className="main-wrapper row">

                    <div className="right-col col-lg-6 col-md-6 col-11">
                        <img
                            src="/images/profile.png"
                            alt="resume picture"
                            className='container-fluid rounded' />
                    </div>

                    <div className="left-col col-lg-6 col-md-6 col-11">
                        <h1 className="main-title">رضا نعیمی هستم</h1>
                        <h1 className="main-title">
                            <Typewriter
                                onInit={(typeWriter) => {
                                    typeWriter
                                        .typeString("برنامه نویس فرانت اند!")
                                        .start()
                                        .pauseFor(2000)
                                        .deleteAll()
                                }}
                                options={{
                                    loop: true,
                                }}
                            />
                        </h1>

                        <p className='main-description'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                        </p>

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
            </div>
        </main>
    )
}
