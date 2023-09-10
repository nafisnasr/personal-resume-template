import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import "./PortfolioBox.css"

export default function PortfolioBox({ title, img, category, rate }) {
    return (
        <div className='col-lg-4 col-md-6 col-sm-11'>
            <div className="Portfolio-item">

                <div className="Portfolio-img my-2">
                    <img src={img} alt={title} className="container-fluid" />
                </div>

                <div className="category-box my-2 container">
                    <p className="category-name">
                        {category}
                    </p>
                    <div className="icon-box">
                        <AiOutlineHeart className='rate-icon' />
                        <span className='rate mx-2'>{rate}</span>
                    </div>
                </div>

                <h5 className="portfolio-title my-2 p-1">
                    {title}
                </h5>
            </div>
        </div>
    )
}
