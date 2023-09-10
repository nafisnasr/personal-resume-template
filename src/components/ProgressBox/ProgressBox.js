import React from 'react'
import TitleSection from '../TitleSection/TitleSection'
import ProgressBarFunc from '../ProgressBarFunc/ProgressBarFunc'

import "./ProgressBox.css"

export default function ProgressBox() {
    return (
        <section className='progress-box'>
            <div className="container my-2">

                <TitleSection
                    title="رزومه ی من"
                    category="رزومه"
                />

                <div className="progress-box__wrapper row">

                    <ProgressBarFunc title="html" percent={95} />
                    <ProgressBarFunc title="css" percent={75} />
                    <ProgressBarFunc title="javascript" percent={65} />
                    <ProgressBarFunc title="bootstrap" percent={90} />
                    <ProgressBarFunc title="react" percent={70} />
                    <ProgressBarFunc title="npm" percent={100} />
                    
                </div>
            </div>
        </section>
    )
}
