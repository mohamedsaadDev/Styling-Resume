import React, { useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { hidelayout } from '../../util/Locationpath';
import { t } from 'i18next';
const Header = () => {
    let location = useLocation().pathname;
    useEffect(() => {
        hidelayout(location)
    },[location])
    useEffect(() => {
        // hidelayout(location)
        const loader = document.querySelector('.loader-container');
        if (loader) {
            loader.style.transition = 'opacity 0.5s ease';
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
        }, []);
        const opnesidebar = () => {
            const sidebarWrapper = document.querySelector('.sidebar-wrapper');
            const navbarcollapse = document.querySelector('.none-opne');
            const body = document.body;
            const mobOverlay = document.querySelector('.mob-overlay');
            if(sidebarWrapper|| navbarcollapse || body || mobOverlay){
                sidebarWrapper.classList.add('sidebar-show');
                navbarcollapse.classList.add('d-none');
                body.classList.add('overBody__hidden');
                mobOverlay.classList.add('active');
            }
            };
            const clossesidebar = () => {
                const sidebarWrapper = document.querySelector('.sidebar-wrapper');
                const navbarcollapse = document.querySelector('.none-opne');
                const body = document.body;
                const mobOverlay = document.querySelector('.mob-overlay');
                if (sidebarWrapper|| navbarcollapse || body || mobOverlay) {
                    sidebarWrapper.classList.remove('sidebar-show');
                    navbarcollapse.classList.remove('d-none');
                    body.classList.remove('overBody__hidden');
                    mobOverlay.classList.remove('active');
                } 
            };
    return (
        <>
        <div className="loader-container" id="loader-container">
            <span className="loader"> </span>
        </div>
        <div className="mob-overlay"></div>
        <div className="sidebar-wrapper">
        <div className="absMenu_inner">
                <div className="container">
                    <div onClick={clossesidebar} id="burgerBtn"></div>
                    <div className="navbar__collapse">
                        <ul className="my__navbar">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/"> {t('home')} </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dash_resume"> {t('resume')} </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dash_cv"> {t('cv')} </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dash_cover"> {t('cover')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faqs">{t('faqs')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">{t("blogs")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div    className="buttons_wrap">
                        <Link to="/login" data-i18n="login" className="main__btn outline_btn hvr-sweep-to-right mrgEnd_24"> {t('login')} </Link>
                        <Link href="/Dashbord" className="main__btn blue_btn hvr-sweep-to-left">{t('getstarted')}</Link>
                    </div>
                </div>
        </div>
        <div className="nav-content">
            <div className="background">
            <div className="portion"></div>
            <div className="portion"></div>
            <div className="portion"></div>
            </div>
        </div>
        </div>
        <header className="main__header none-opne">
            <div className="header__Wrapper">
        <div className="contctop_row">
        <Link to='/' className="navbar-brand" >
                <img src="img/logo.png" alt="" />
        </Link>
        <div onClick={opnesidebar} className="navbar_toggler" id="sidebar_toggler">
        <div className="nav-btn">
            <div className="btn-bar menu"></div>
            <div className="btn-bar menu"></div>
            <div className="btn-bar menu"></div>
            <div className="btn-bar close"></div>
            <div className="btn-bar close"></div>
                </div>
            </div>
                <div className="navbar__collapse  d__mob__none">
                <ul className="my-0 my__navbar">
                    <li className="nav-item">
                        <Link to='/' className="nav-link translate">{t('home')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dash_resume">{t('resume')} </Link>
                    </li>
                    <li className="nav-item hide_rtl">
                        <Link className="nav-link" to="/dash_cv" > cv </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dash_cover"> {t('cover')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/faqs" >{t('faqs')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blogs"> {t('blogs')} </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/pricing">{t('pricing')}</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/templet">templet</Link>
                    </li> */}
                </ul>   
            </div>
            <div className="buttons_wrap d__mob__none">
                <Link to="/login" className="main__btn outline_btn hvr-sweep-to-right btn-login"> {t('login')}</Link>
                <Link to="/Dashboard" className="main__btn blue_btn hvr-sweep-to-left btn-startnow" >{t('getstarted')}</Link>
            </div>
        </div>
    </div>
    </header>
        </>
    )
}

export default Header