import { t } from 'i18next';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
        <section className="login__section">
            <div className="container">
                <div className="logForm_wrCard mx-auto">
                    <form action="" className="login_form">
                        <h3 className="center_title">{t('signintoyouraccount')}</h3>
                        <div className="logSocial_flex mbttom_50">
                            <Link href="#" className="logSoc_bttn face_BKone hvr-sweep-to-right"> <img src="img/face.svg" alt=""/>
                                facebook </Link>
                            <Link href="#" className="logSoc_bttn google_BK hvr-sweep-to-right"> <img src="img/google.svg" alt=""/>
                                google </Link>
                            <Link href="#" className="logSoc_bttn linked_BK hvr-sweep-to-right"> <img src="img/linked.svg" alt=""/>
                                linkedin </Link>
                        </div>
                        <h5 className="centerMD_title">{t('orsigninwithemail')}</h5>
                        <div className="form__group mbttom_30">
                            <input type="text" className="login_input mbttom_30"  placeholder={t('yourEmail')}/>
                        </div>
                        <div className="form__group mbttom_30">
                            <input type={showPassword?"text":"password"} className="login_input form__password mbttom_30" placeholder={t("password")}/>
                            {showPassword?
                            <i onClick={()=>setShowPassword(false)} className="fa-regular password_icon fa-eye"></i>: 
                            <i onClick={()=>setShowPassword(true)} className="fa-regular fa-eye-slash password_icon"></i>}
                        </div>
                        <label className="remember_label mbttom_40">
                            <input type="checkbox" className="input_checkbox"/>
                            <span>{t('rememberme')}</span>
                        </label>
                        <button type="submit" className="main__btn blue_btn hvr-sweep-to-left w-100 mbttom_40">{t('signin')}</button>
                        <Link to="/forgetPass" className="forgetPass_link mbttom_20">{t('forgottenPassword')}</Link>
                        <div className="hAcount_link">
                            <span>{t("don'tHaveAnAccount")}</span> <Link to="/signup">{t('createAnAccount')}</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Login