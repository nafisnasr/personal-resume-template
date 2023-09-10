import React, { useState } from 'react'
import TitleSection from '../TitleSection/TitleSection'
import ArticleBox from '../ArticleBox/ArticleBox'
import "./Blog.css"
import { articleData } from '../../data'


export default function Blog() {

    const [articles, setArticles] = useState(articleData)

    return (
        <section className="blog">
            <div className="container">

                <TitleSection
                    category="بلاگ"
                    title="نوشته های من"
                    isCenter={true}
                />

                <div className="blog-wrapper row">
                    {articles.map(article => (
                        <ArticleBox {...article} key={article.id} />

                    ))}
                </div>
            </div>

        </section>
    )
}
