import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs"
import "./FeatureBox.css"

export default function FeatureBox({ icon, title, description }) {
    return (
        <div className='col-lg-4 col-md-6 col-sm-11'>
            <div className="feature-item">
                <div className="feature-icon">
                    {icon}
                </div>

                <h4 className="feature-title">{title}</h4>

                <div className="feature-description">
                    طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد.
                </div>
                <span className='hovered-arrow'><BsArrowLeftShort  className='more-info my-2' /></span>
            </div>

        </div>
    )
}
