import React, { useState } from 'react'
import TitleSection from "../TitleSection/TitleSection"
import PortfolioBox from "../PortfolioBox/PortfolioBox"
import {portfolioData} from '../../data'
import "./Portfolio.css"

export default function Portfolio() {

    const [portfolios, setPortfolios] = useState(portfolioData)

    return (
        <section className='Portfolio'>
            <div className="container">

                <TitleSection
                    isCenter={true}
                    title='نمونه کار های من'
                    category='نمونه کار'
                />

                <div className="Portfolio-wrapper row">
                    {portfolios.map(item => (
                        <PortfolioBox {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
