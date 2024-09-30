import { t } from 'i18next';
import React,{useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const Footer = () => {
    const { i18n} = useTranslation();
    const html = document.querySelector('html')
const changeLanguage = () => {
    if(i18n.language === "en"){
        i18n.changeLanguage('ar');
        html.dir = "rtl"
        window.location.reload();
    }else{
        i18n.changeLanguage('en');
        html.dir = "ltr"
        window.location.reload();
    }
};
    useEffect(()=>{
    if( i18n.language === "en"){
        html.dir = "ltr"
    }else{
        html.dir = "rtl"
    }
},[i18n.language,html])
    return (
        <>
        <div className="footer" id="footer">
        <div className="footer__wrapper">
            <div className="container- w-100">
                <div id="wrapper-footer" className="row">
                <div className="col-12 col-lg-4">
                        <div className="footerCol_one mx-5">
                            <Link to="/" className="footer_logo"> <img src="img/logo2.png" alt=""/> </Link>
                            <p >{t('onlineresumecreator')}</p>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="footerCol_one">
                            <h3 className="footer_title">{t("resources")}</h3>
                            <ol className=" p-0 footer_UList">
                                <li> <Link to="/" className="footerLink1" >{t("home")}</Link> </li>
                                <li> <Link to="/pricing" className="footerLink1" > {t('pricing')} </Link> </li>
                                <li> <Link to="/dash_resume" className="footerLink1" >{t('resumeTemplates')}</Link> </li>
                                <li> <Link to="/dash_cover" className="footerLink1" >{t('coverLetterTemplates')}</Link> </li>
                                <li> <Link to="/dash_cv" className="footerLink1" >{t('cvTemplates')}</Link> </li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-6 col-lg-2">
                        <div className="footerCol_one">
                            <h3 className="footer_title">{t('support')}</h3>
                            <ol className="p-0 footer_UList">
                                <li> <Link to="/faqs" className="footerLink1">{t('faqs')}</Link> </li>
                                <li> <Link to="/contact" className="footerLink1">{t('contactUs')}</Link> </li>
                                <li> <Link to="/privacy" className="footerLink1">{t('privacyPolicy')}</Link> </li>
                                <li> <Link to="/terms" className="footerLink1">{t('termsofUse')}</Link> </li>
                                <li> <Link to="/about" className="footerLink1">{t('aboutUs')}</Link> </li>
                            </ol>
                        </div>
                </div>
                    <div className="col-6 col-lg-3  ">
                        <div className="footerCol_one sideNews_col mx-5">
                                <button onClick={() => changeLanguage()} id="language-switcher" className="float-end main__btn white_border hvr-sweep-to-right">
                                <img src="img/globe.svg" alt=""/>
                                <span id="languageLabel">{t('language')}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyRights__wrap">
            <p> Copyright 2024 - Styling Resume </p>
        </div>
        </div>
        </>
    )
}

export default Footer