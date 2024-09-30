import { t } from 'i18next'
import React from 'react'
const Payment = () => {
    return (
        <>
        <section className="login__section">
        <div clasNames="container">
            <div className="payment_wrCard mx-auto">
                <div className="payTitle_wrap"> <h3>{t('paymentmethods')}</h3> </div>
                <div className="payCArd_inner">
                    <form action="" className="payment_form">
                        <div className="form_row">
                            <div className="col-12">
                                <label for="" className="payment_label">{t('country')}</label>
                                <div className="frGroup_wrap mbttom_16">
                                    <input type="tel" className="payment_input" id="phone"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <h3 className="visa_title">{t('choosePaymentMethod')}</h3>
                                <div className="cards__flex">
                                    <div className="checkV_wRltive">
                                        <input type="radio" className="hidden__radio" name="visaName"/>
                                        <div className="myChekRadio">
                                            <img src="img/gpay.png" alt="" className="visa__imgTH"/>
                                        </div>
                                    </div>
                                    <div className="checkV_wRltive">
                                        <input type="radio" className="hidden__radio" name="visaName" checked />
                                        <div className="myChekRadio">
                                            <img src="img/visa.png" alt="" className="visa__imgTH"/>
                                        </div>
                                    </div>
                                    <div className="checkV_wRltive">
                                        <input type="radio" className="hidden__radio" name="visaName"/>
                                        <div className="myChekRadio">
                                            <img src="img/cash.png" alt="" className="visa__imgTH"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <label for="" className="payment_label">{t('cardNumber')}</label>
                                <div className="frGroup_wrap mbttom_16">
                                    <input type="number" className="payment_input" placeholder=" 0000 0000 0000 0000 "/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <label for="" className="payment_label">{t('name')}</label>
                                <div className="frGroup_wrap mbttom_16">
                                    <input type="text" className="payment_input" placeholder={t("entername")}/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <label for="" className="payment_label">{t('expiryDate')}</label>
                                <div className="frGroup_wrap mbttom_16">
                                    <input type="text" className="payment_input datepicker" placeholder=" 00 00 0000"/>
                                    <img src="img/calendar.png" alt="" className="calendar_icon"/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <label for="" className="payment_label"> cVV </label>
                                <div className="frGroup_wrap mbttom_16">
                                    <input type="number" className="payment_input datepicker" placeholder=" 000 "/>
                                </div>
                            </div>
                        </div>
                        <div className="bottom_flex">
                            <div className="total_pay">{t('total')}: $98 </div>
                            <button type="submit" className="main__btn blue_btn hvr-sweep-to-left w-50">{t('confirm')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Payment