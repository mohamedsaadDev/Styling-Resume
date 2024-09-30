import { t } from 'i18next';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {Context} from "../../context/Context"
const BlackHeader = () => {
    const { i18n} = useTranslation();
    let location = useLocation().pathname;
    const[show,setShow] = useState(false)
    const {fileName, setfileName } = useContext(Context);
    const hideRoutes = [
        '/',
        '/Dashboard',
        '/dash_resume',
        '/dash_cv',
        '/dash_cover',
        '/pricing',
        '/templets',
        '/privacy',
        '/login',
        '/forgetPass',
        '/signup',
        '/terms',
        '/about',
        '/contact']
    const hidelayout = ()=>{
        if(hideRoutes.includes(location)){
            setShow(false)
        }else{
            setShow(true)
        }
    }
    useEffect(() => {
        hidelayout()
    })
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
    return (
        <>
        {
            show&&
            <>
            <header className="main__header">
                <div className="darkhd_bk">
                    <Link to="/Dashboard" className="main__btn grey_border hvr-sweep-to-right btn-responsive"> 
                            <i className="fa-solid fa-arrow-left"></i> 
                            <span className="hidden_md_secreens" >{t('cv')}</span></Link>
                    <div className="cvFlexbtn_wrap">
                        <ul className="d-flex align-items-center mb-0 ">
                            <li><Link href="#" className="white_link" > 
                            <input onChange={(e)=>setfileName(e.target.value)} className="input-untitledResume bg-transparent text-white border-0" type="text" value={fileName}/> <img src="img/check.svg" alt=""/> </Link></li>
                            <li>
                                <div className="bttnsFlex_wrap mrgEnd_14 hidden_medium_secreens">   
                                    <button className="leftBtn_arr"> <i className="fa-solid fa-reply"></i> </button>
                                    <button className="rightBtn_arr"> <i className="fa-solid fa-share"></i> </button>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown login__dropdown mrgEnd_14 hidden_medium_secreens ">
                                    <button className="login__dropbtn grey_border dropdown-toggle hvr-sweep-to-right" type="button" data-toggle="dropdown" aria-expanded="false">
                                        <img src="img/translate.svg" alt="" className="dropUser__img"/>
                                        <span >{t('currentlanguage')}</span>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </button>
                                    <div className="dropdown-menu p-0">
                                        <button onClick={() => changeLanguage()} className="dropdown-item hvr-sweep-to-right hv-white">{t('reverselanguage')}</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="relative_upload  mrgEnd_14 btn-responsive">
                                    <input type="file" id="file-upload" className="absolute_inputUP d-none "/>
                                    <label htmlFor="file-upload" className="main__btn grey_border hvr-sweep-to-right btn-responsive"> 
                                        <img src="img/upload.svg" alt=""/> 
                                        <span className="hidden_md_secreens" >{t('import')}</span> 
                                    </label>
                                </div>
                            </li>
                            <li><a href="img/cv1.png" download className="blueMid_btn hvr-sweep-to-left btn-responsive"> 
                                    <img src="img/download.svg" alt=""/> 
                                    <span className="hidden_md_secreens">{t('download')}</span> 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            </>
        }
        </>
    )
}

export default BlackHeader