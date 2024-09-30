import { t } from "i18next";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Pricing = () => {
    const [month,setmonth]= useState(true);
    return (
    <>
        <section className="login__section">
        <div className="container">
            <div
            className="packtitle_wrap zoom-in">
            <h3>{t('pickaplanthatsrightforyou')}</h3>
            <p>{t('Pricingplansforbusinessesatevery')}</p>
            </div>
            <div className={month?"packType_flex month_active mx-auto":"packType_flex year_active mx-auto"}>
                <div onClick={()=>setmonth(true)} className={month?"innerBTn_half month_span hF_active":"innerBTn_half month_span"}>{t('monthly')}</div>
                <div onClick={()=>setmonth(false)} className={month?"innerBTn_half year_span":"innerBTn_half year_span hF_active"}>{t('yearly')}</div>
            </div>
            {month?
            <div className="row packages_row">
            <div className="col-12 col-md-6 col-lg-4">
                <div
                className="package_CardN1 zoom-in">
                <div className="pack_price">
                    $20 <span>{t('month')}</span>
                </div>
                <h3 className="packg_title">{t('standardPackage')}</h3>
                <p>{t("formostbusinessesthat")}</p>
                <ul className="packg_list p-0">
                    <li>{t('multipleresume/CVtemplates')}</li>
                    <li>{t('enhancedcustomizationoptions')}</li>
                    <li >{t("integrationofadownloadablePDF")}</li>
                </ul>
                    <Link to="/payment" className="main__btn blue_btn black_btn hvr-sweep-to-right w-100">{t("chooseplan")}</Link>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div
                className="package_CardN1 blue_package zoom-in">
                <div className="popular_btn" >{t("mostpopular")}</div>
                <div className="pack_price">
                    $20 <span>{t('month')}</span>
                </div>
                <h3 className="packg_title">{t('premiumPackage')}</h3>
                <p data-i18n="formostbusinessesthat">{t('formostbusinessesthat')}</p>
                <ul className="packg_list p-0">
                    <li>{t("multipleresume/CVtemplates")}</li>
                    <li>{t('enhancedcustomizationoptions')}</li>
                    <li>{t('integrationofadownloadablePDF')}</li>
                </ul>
                <Link to="/payment" className="main__btn blue_btn black_btn hvr-sweep-to-left w-100">{t('chooseplan')}</Link>
            </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
            <div
                className="package_CardN1 zoom-in">
                <div className="pack_price">
                $20 <span>{t('month')}</span>
                </div>
                <h3 className="packg_title" data-i18n="standardPackage">{t('standardPackage')}</h3>
                <p >{t('formostbusinessesthat')}</p>
                <ul className="packg_list p-0">
                <li >{t('multipleresume/CVtemplates')}</li>
                <li >{t('enhancedcustomizationoptions')}</li>
                <li >{t('integrationofadownloadablePDF')}</li>
                </ul>
                <Link to="/payment" className="main__btn blue_btn black_btn hvr-sweep-to-right w-100" >{t('chooseplan')}</Link>
            </div>
            </div>
        </div>
        :
        <div className="row packages_row">
            <div className="col-12 col-md-6 col-lg-4">
                <div
                className="package_CardN1 zoom-in">
                <div className="pack_price">
                    $240 <span>/ {t('years')}</span>
                </div>
                <h3 className="packg_title">{t('standardPackage')}</h3>
                <p>{t('formostbusinessesthat')}</p>
                <ul className="packg_list p-0">
                    <li>{t('multipleresume/CVtemplates')}</li>
                    <li>{t('enhancedcustomizationoptions')}</li>
                    <li>{t('integrationofadownloadablePDF')}</li>
                </ul>
                    <Link to="/payment" className="main__btn blue_btn black_btn hvr-sweep-to-right w-100">{t('chooseplan')}</Link>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div
                className="package_CardN1 blue_package zoom-in">
                <div className="popular_btn">{t('mostpopular')}</div>
                <div className="pack_price">
                    $240 <span>/ {t('years')}</span>
                </div>
                <h3 className="packg_title">{t('premiumPackage')}</h3>
                <p>{t('formostbusinessesthat')}</p>
                <ul className="packg_list p-0">
                    <li>{t('multipleresume/CVtemplates')}</li>
                    <li>{t('enhancedcustomizationoptions')}</li>
                    <li>{t('integrationofadownloadablePDF')}</li>
                    <li>{t('integrationofadownloadablePDF')}</li>
                </ul>
                <Link to="/payment" className="main__btn blue_btn black_btn hvr-sweep-to-left w-100">{t('chooseplan')}</Link>
            </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
            <div
                className="package_CardN1 zoom-in">
                <div className="pack_price">
                    $240 <span>/ {t('years')}</span>
                </div>
                <h3 className="packg_title">{t('standardPackage')}</h3>
                <p>{t('formostbusinessesthat')}</p>
                <ul className="packg_list p-0">
                <li>{t('multipleresume/CVtemplates')}</li>
                <li>{t('enhancedcustomizationoptions')}</li>
                <li>{t('integrationofadownloadablePDF')}</li>
                </ul>
                <Link to="/payment" className="main__btn blue_btn black_btn hvr-sweep-to-right w-100" >{t('chooseplan')}</Link>
            </div>
            </div>
        </div>
            }
        </div>
    </section>
    </>
    );
};

export default Pricing;
