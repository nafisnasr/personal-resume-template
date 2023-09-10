import React from 'react'
import { ProgressBar } from 'react-bootstrap'

import "./ProgressBarFunc.css"

export default function ProgressBarFunc({ percent, title }) {
    const now = percent
    return (
        <div className="col-lg-6 col-11 my-3">
            <div className="progress-bar__container">

                <p className='progress-bar__title'>{title}</p>
                < ProgressBar animated now={now} variant="danger" label={`${now}%`} />

            </div>
        </div>
    )
}
