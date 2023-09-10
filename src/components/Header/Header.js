import React from 'react'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <div className="header-wrapper">
                <div className="container">
                    <div className="row navbar">

                        <div className="nav-right-col col-6 col-md-3">
                            <a href="#" className='brand'>رزومه</a>
                        </div>

                        <div className="nav-left-col col-6 col-md-9">

                            <div className="main-menu d-lg-block d-none d-md-none">
                                <ul>
                                    <li>
                                        <Link className="link" to="/">خانه</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/">خدمات</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/">نمونه کار</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/">رزومه</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/">قیمت</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/">وبلاگ</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/">تماس</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="offconvas-menu d-lg-none">
                                <button href="#" className="mobile-nav">
                                    <FaBars className='navbar-icon' />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
