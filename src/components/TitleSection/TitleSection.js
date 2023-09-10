import React from 'react'
import "./TitleSection.css"


export default function TitleSection({ category, title, isCenter }) {
    return (
        <div className={`title-section container ${isCenter && 'text-center'} `}>
            <p className="category-name">
                {category}
            </p>
            <h2>{title}</h2>
        </div>
    )
}
