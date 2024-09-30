import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'

const Forgetpass = () => {
    return (
        <>
        <section className="login__section">
            <div className="container">
                <div className="logForm_wrCard mx-auto">
                <form action="" className="login_form">
                    <h3 className="center_title">{t('restoreyourpassword')} </h3>
                    <h5 className="centerMD_title">{t('wewillsendyouansecureemail')}</h5>
                    <div className="form__group mbttom_30">
                    <input
                        type="text"
                        className="login_input mbttom_30"
                        placeholder={t('yourEmail')}
                    />
                    </div>
                    <button
                    type="submit"
                    className="main__btn blue_btn hvr-sweep-to-left w-100 mbttom_100">{t('send')}</button>
                    <div className="hAcount_link">
                        <span >{t('youdonhaveanaccountyet')}</span>
                        <Link to="/signup">{t('signuphere')}</Link>
                    </div>
                </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Forgetpass