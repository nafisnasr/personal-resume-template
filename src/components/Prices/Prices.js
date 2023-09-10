import React, { useState } from 'react'
import TitleSection from '../TitleSection/TitleSection'
import "./Prices.css"
import TabBox from '../TabBox/TabBox'
import { BsCheckLg } from "react-icons/bs"
import { HiMiniXMark } from "react-icons/hi2"

export default function Prices() {

    const [showStandardTab, setShowStandardTab] = useState(true)
    const [showElementTab, setShowElementTab] = useState(false)
    const [showPremuimTab, setShowPremuimTab] = useState(false)

    const [tabCategory, setTabCategory] = useState('standard')

    return (
        <section className="prices-box">
            <div className="container">

                <TitleSection
                    title="لیست قیمت ها"
                    category="قیمت"
                    isCenter={true}
                />

                <div className="prices-box__wrapper row">
                    <div className="prices-box__col col-lg-8 col-11">

                        <div className="prices-box__btn-container my-2">
                            <button
                                className={tabCategory === "element" ? "prices-box__btn prices-box__btn-active" : "prices-box__btn"}
                                onClick={() => {
                                    setShowPremuimTab(false)
                                    setShowStandardTab(false)
                                    setShowElementTab(true)
                                    setTabCategory("element")
                                }}
                            >
                                پایه
                            </button>
                            <button className={tabCategory === "standard" ? "prices-box__btn prices-box__btn-active" : "prices-box__btn"}
                                onClick={() => {
                                    setShowPremuimTab(false)
                                    setShowElementTab(false)
                                    setShowStandardTab(true)
                                    setTabCategory("standard")
                                }}
                            >
                                استاندارد
                            </button>
                            <button
                                className={tabCategory === "premuim" ? "prices-box__btn prices-box__btn-active" : "prices-box__btn"}
                                onClick={() => {
                                    setShowPremuimTab(true)
                                    setShowElementTab(false)
                                    setShowStandardTab(false)
                                    setTabCategory("premuim")
                                }}
                            >
                                پرمیوم
                            </button>
                        </div>

                        <div className="prices-box__tabs my-1">
                            {showElementTab && (
                                <TabBox
                                    className="element-tab"
                                    title="طراحی تک صفحه ای"
                                    price={2000000}
                                    info="طراحی اختصاصی و تمیز سایت شرکتی و فروشگاهی با سرعت بالا و گرافیک مینیمال"
                                >
                                    <div className="tab-main__price-list">

                                        <ul className="price-list__right-box">
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                یک برگ با المنتور
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                طراحی سفارشی
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                طراحی رسپانسیو
                                            </li>
                                            <li>
                                                <HiMiniXMark className='price-list__icon notchecked' />
                                                درج محتوا
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                نصب 2 افزونه
                                            </li>
                                        </ul>
                                        <ul className="price-list__left-box">
                                            <li>
                                                <HiMiniXMark className='price-list__icon notchecked' />
                                                المنتور چند برگی
                                            </li>
                                            <li>
                                                <HiMiniXMark className='price-list__icon notchecked' />
                                                طراحی فیگما
                                            </li>
                                            <li>
                                                <HiMiniXMark className='price-list__icon notchecked' />
                                                طراحی تمیز
                                            </li>
                                            <li>
                                                <HiMiniXMark className='price-list__icon notchecked' />
                                                8 پلاگین اضافی
                                            </li>
                                            <li>
                                                <HiMiniXMark className='price-list__icon notchecked' />
                                                دامنه رایگان
                                            </li>
                                        </ul>
                                    </div>

                                </TabBox>
                            )}
                            {showStandardTab && (
                                <TabBox
                                    className="standard-tab"
                                    title="طراحی سه صفحه ای"
                                    price={4000000}
                                    info="طراحی اختصاصی و تمیز سایت شرکتی و فروشگاهی با سرعت بالا و گرافیک عالی به همراه کانفیگ اولیه سئو"
                                >

                                    <div className="tab-main__price-list">
                                        <ul className="price-list__right-box">
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                یک برگ با المنتور
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                طراحی سفارشی
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                طراحی رسپانسیو
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                درج محتوا
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                نصب 4 افزونه
                                            </li>
                                        </ul>
                                        <ul className="price-list__left-box">
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                المنتور چند برگی
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                طراحی فیگما
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                طراحی تمیز
                                            </li>
                                            <li>
                                                <HiMiniXMark className='price-list__icon notchecked' />
                                                8 پلاگین اضافی
                                            </li>
                                            <li>
                                                <HiMiniXMark className='price-list__icon notchecked' />
                                                دامنه رایگان
                                            </li>
                                        </ul>
                                    </div>

                                </TabBox>
                            )}
                            {showPremuimTab && (
                                <TabBox
                                    className="premium-tab"
                                    title="طراحی چند صفحه ای"
                                    price={6000000}
                                    info="طراحی اختصاصی و تمیز سایت شرکتی و فروشگاهی با سرعت بالا و گرافیک عالی با هاست و دامنه رایگان و سئو و بهینه"
                                >

                                    <div className="tab-main__price-list">
                                        <ul className="price-list__right-box">
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                یک برگ با المنتور
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                طراحی سفارشی
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                طراحی رسپانسیو
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                درج محتوا
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                نصب نا محدود افزونه
                                            </li>
                                        </ul>
                                        <ul className="price-list__left-box">
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                المنتور چند برگی
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                طراحی فیگما
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                طراحی تمیز
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                8 پلاگین اضافی
                                            </li>
                                            <li>
                                                <BsCheckLg className='price-list__icon checked' />
                                                دامنه رایگان
                                            </li>
                                        </ul>
                                    </div>

                                </TabBox>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
