import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
        <section className="login__section">
            <div className="container">
                <div className="title__wrapper zoom-in">
                    <h3 className="blue_title" >{t('contactus')}</h3>
                </div>
                <div className="logForm_wrCard mx-auto">
                    <form action="" className="login_form">
                        <p className="cont_quest">
                            {t('doyouhaveaquestionremarkcomplaintorsuggestion')}
                            <Link className='d-inline mx-2' to="/faqs">{t('frequentlyaskedquestions')}</Link>
                            {t('us.Ifyourquestionremainsunanswered')}
                        </p>
                        {/* <div class="form__group mbttom_40">
                            <select class="contact_input nice-select mbttom_40">
                                <option value="Subject" selected> Subject </option>
                                <option value="Subject2"> Subject2 </option>
                                <option value="Subject3"> Subject3 </option>
                            </select>
                        </div> */}
                        <div className="form__group mbttom_40">
                            <input type="text" className="contact_input mbttom_40" placeholder={t("name")}/>
                        </div>
                        <div className="form__group mbttom_40">
                            <input type="email" className="contact_input mbttom_40" placeholder={t("emailaddress")}/>
                        </div>
                        <div className="text__group mbttom_40">
                            <textarea className="contact_input mbttom_40" placeholder={t("yourMessage")}></textarea>
                        </div>  
                        <button type="submit" className="main__btn blue_btn hvr-sweep-to-left w-100 mbttom_40">{t('send')}</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact