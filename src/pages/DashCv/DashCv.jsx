import React from 'react'
import { Link } from 'react-router-dom'

const DashCv = () => {
  return (
    <>
    <div className="mob-overlay"></div>
    <section className="dashboard__wrapper">
        <div className="mobile_header desktop__none">
            <Link to="/" className="tMobile__logo">
                <img src="img/logo.png" alt=""/>
            </Link>
            <button className="toggle__sidebar"><i className="fa-solid fa-bars-staggered"></i></button>
        </div>
        <aside className="dashboard__menu">
            <Link to="/" className="sidebar__logo">
                <img src="img/logo.png" alt=""/>
            </Link>
            <ul className="dashboard__list p-0">
                <li className="side__item">
                    <Link className="side__link" to="/Dashboard">
                        <img src="img/menu.png" alt="" className="side__icon"/>
                        <span> dashboard </span>
                    </Link>
                </li>
                <li className="side__item">
                    <Link className="side__link" to="/dash_resume">
                        <img src="img/resume.png" alt="" className="side__icon"/>
                        <span> resumes </span>
                    </Link>
                </li>
                <li className="side__item">
                    <Link className="side__link active__link" to="/dash_cv">
                        <img src="img/cv.png" alt="" className="side__icon"/>
                        <span> CVs </span>
                    </Link>
                </li>
                <li className="side__item">
                    <Link className="side__link" to="/dash_cover">
                        <img src="img/cover-letter.png" alt="" className="side__icon"/>
                        <span> cover letters </span>
                    </Link>
                </li>
            </ul>
            <Link to="/login" className="login_link"> <img src="img/user.png" alt=""/> login </Link>
        </aside>
        <div className="dashboard__container">
            <div className="dashWrap__CInner">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="createN_column">
                            <div className="topCRt_flex">
                                <h3> CVs </h3>
                            </div>
                            <Link to="/choose_cv" className="creatNew_Card">
                                <span > Create New CV </span>
                                <i className="fa-solid fa-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default DashCv