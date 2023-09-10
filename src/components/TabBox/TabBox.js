import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md"
import { AiOutlineLineChart } from "react-icons/ai"
import './TabBox.css'


export default function TabBox({ title, children, price, info }) {
    return (
        <div className='tab'>
            <div className="tab-header my-2">
                <div className="tab-header__right-box">
                    <h4 className="title">{title}</h4>
                    <p className="category">المنتور</p>
                </div>
                <div className="tab-header__left-box">
                    <button>{price} {" "}تومان</button>
                </div>
            </div>

            <div className="tab-main p-2 my-2">
                <p className="tab-main__info">
                    {info}
                </p>
                    {children}
            </div>


            <div className="tab-footer my-2">
                <div className="tab-footer__btn-box">
                    <button>سفارش طراحی</button>
                </div>
                <div className="tab-footer__text">
                    <span>
                        <MdOutlineWatchLater className='tab-footer__icon mx-1' />
                        تحویل 2 روزه
                    </span>
                    <span>
                        <AiOutlineLineChart className='tab-footer__icon mx-1' />
                        پشتیبانی نامحدود
                    </span>
                </div>
            </div>
        </div>
    )
}
