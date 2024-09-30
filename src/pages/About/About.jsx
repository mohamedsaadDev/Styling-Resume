import { t } from 'i18next'
import React from 'react'

const About = () => {
  return (
    <>
    <section className="about py-5" id="about">
        <div className="container d-lg-flex">
            <img className="img-about" src="img/pexels-moose-photos-170195-1586996.jpg" alt=""/>
            <div className="info px-4">
                <h3> {t("aboutUs")}</h3>
                <p className="py-2" >{t('atResumewebelieveinthepowerofresumes')}</p>
                <p className="py-2" >{t('weunderstandtheimportanceofhaving')}</p>
                <p className="py-2" >{t('ifyourelookingforaneasyandeffective')}</p>
                <p className="py-2" >{t('joinustodayandstartbuilding')}</p>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default About