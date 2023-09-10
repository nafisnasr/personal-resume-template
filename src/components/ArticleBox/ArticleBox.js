import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md"
import "./ArticleBox.css"

export default function ArticleBox({ title, img, category, time }) {
    return (
        <div className='col-lg-4 col-md-6 col-11'>
            <div className="article-box">

                <div className="img-container">
                    <img
                        src={img}
                        alt={title}
                        className='container-fluid'
                    />
                </div>

                <div className="article-category container">

                    <span className="category">{category}</span>

                    <div className="icon-container">
                        <MdOutlineWatchLater className='icon' />
                        <span className="time">{time} قبل</span>
                    </div>
                </div>

                <h5 className="article-title">{title}</h5>
            </div>
        </div>
    )
}
