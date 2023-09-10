import React from 'react'
import TitleSection from '../TitleSection/TitleSection'
import FeatureBox from '../FeatureBox/FeatureBox'
import { IoLayers, IoSettings } from "react-icons/io5"
import { BsCodeSlash } from "react-icons/bs"
import { CgScreen } from "react-icons/cg"
import { FaMobileScreen } from "react-icons/fa6"
import { HiWifi } from "react-icons/hi"
import "./Features.css"

export default function Features() {
    return (
        <section className='features'>
            <div className="container">

                <TitleSection
                    category='ویژگی ها'
                    title='کارهای من'
                    isCenter={false}
                />

                <div className="feature-wrapper row">
                    <FeatureBox
                        icon={<IoLayers className="feature-icon" />}
                        title='توسعه اپ'
                    />
                    <FeatureBox
                        icon={<CgScreen className="feature-icon" />}
                        title='طراحی سایت'
                    />
                    <FeatureBox
                        icon={<BsCodeSlash className="feature-icon" />}
                        title='کدنویسی اختصاصی'
                    />
                    <FeatureBox
                        icon={<FaMobileScreen className="feature-icon" />}
                        title='طراحی اپلیکیشن'
                    />
                    <FeatureBox
                        icon={<HiWifi className="feature-icon" />}
                        title='سئو مارکتینگ'
                    />
                    <FeatureBox
                        icon={<IoSettings className="feature-icon" />}
                        title='بهینه سازی سایت'
                    />
                </div>

            </div>
        </section>
    )
}
