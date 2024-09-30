import React from 'react';
import { cv, resume ,coverLetter } from '../../data/data'
import Slider from './Slider';
import { t } from 'i18next';

const Home = () => {
    
  return (
    <main className='mt-5'>
      <section className="intro__section">
        <div className="container mx-3">
            <div className="top_Creator zoom-in" >
                <h5 > {t('onlineresumecreator')}</h5>
                <h3>{t('itisVerysimpleforanyone')}</h3>
                <p >{t('CreateYourVeryOwnProfessional')}</p>
            </div>
        </div>
    </section>

    <section className="main__section">
        <h3 className="side_title mx-4">{t('threesimplestepstoajob-winning')}</h3>
        <div className="container- w-100 d-flex align-items-center justify-content-center ">
            <div className="row cvWr_row">
                <div className="col-12 col-lg-4 relative_cvWrap">
                    <div className="cvOne_card">
                        <span className="cvtop_num"> 1 </span>
                        <div className="cvtop_thumb">
                            <img src="img/c1.png" alt="" className="cvtop_img"/>
                        </div>
                        <h5>{t('Pickatemplate')}</h5>
                    </div>
                </div>
                <div className="col-12 col-lg-4 relative_cvWrap">
                    <div className="cvOne_card">
                        <span className="cvtop_num"> 2 </span>
                        <div className="cvtop_thumb">
                            <img src="img/c2.png" alt="" className="cvtop_img"/>
                        </div>
                        <h5>{t('Enterallinformationabout')}</h5>
                    </div>
                </div>
                <div className="col-12 col-lg-4 relative_cvWrap">
                    <div className="cvOne_card">
                        <span className="cvtop_num"> 3 </span>
                        <div className="cvtop_thumb">
                            <img src="img/c3.png" alt="" className="cvtop_img"/>
                        </div>
                        <h5>{t('downloadyourresume')}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="main__section mbttom_80">
        <div className="container">
            <h3 data-i18n="resumeTemplates" className="side_title"> Resume Templates </h3>
        </div>
        <div id="AddAnResumesToTheSlider" className="resume_Slider">
        <Slider templet={resume} />
        </div>
    </section>

    <section className="main__section mbttom_80">
        <div className="container">
            <h3 className="side_title">{t('cvTemplates')} </h3>
        </div>
        <div id="AddAnCvToTheSlider" className="resume_Slider">
            <Slider templet={cv} />
        </div>
    </section>

    <section className="main__section mbttom_80">
        <div className="container">
            <h3 className="side_title">{t('coverLetterTemplates')}</h3>
        </div>
        <div id="AddAnCoverToTheSlider" className="resume_Slider">
        <Slider templet={coverLetter} />
        </div>
    </section>
    </main>
  )
}

export default Home