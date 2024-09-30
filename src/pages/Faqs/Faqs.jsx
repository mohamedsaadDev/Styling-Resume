import { t } from "i18next";
import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Link} from 'react-router-dom';
const Faqs = () => {
    return (
    <>
    <section className="faqs__section">
        <div className="container">
            <div
            className="title__wrapper zoom-in"
            >
            <h3 className="main__title">
                {t('frequentlyaskedquestions')}
            </h3>
            <p className="main__des">{t('doyouhaveaquestion')}</p>
            </div>
            <div className="faqsWide_grid" id="accordionExample">
            <Accordion>
                <Accordion.Item className="faqs__card" eventKey="0">
                    <Accordion.Header className="faqs__header ">
                        <span className="faq_quest" >
                            {t('howdoIlogin')}
                        </span>
                        <span className="plus__icon">
                            <i className="fa fas fa-plus"></i>
                        </span>
                    </Accordion.Header>
                    <Accordion.Body className="faqs__content">
                        <span className="faq_answer">
                            {t('bylogginginviathetoprightcorner')}
                        </span>
                        <Link className="faq__link" data-i18n="here">{t('here')}</Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqs__card" eventKey="1">
                    <Accordion.Header className="faqs__header ">
                    <span className="faq_quest">{t('whatarethecosts')}</span>
                        <span className="plus__icon">
                        <i className="fa fas fa-plus"></i>
                        </span>
                    </Accordion.Header>
                    <Accordion.Body className="faqs__content">
                        <p className="d-flex">
                            {t('on')}
                            <Link className="faq__link mx-2">{t('this')}</Link> 
                            <span>{t('youcanfindinformationonthecosts')}</span> 
                        </p>
                        <span data-i18n="aftercompletingthepayment" className="faq_answer">
                            {t('aftercompletingthepayment')}
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqs__card" eventKey="2">
                    <Accordion.Header className="faqs__header ">
                        <span className="faq_quest">
                            {t('howdoIcreateanaccount')}
                        </span>
                        <span className="plus__icon">
                            <i className="fa fas fa-plus"></i>
                        </span>
                    </Accordion.Header>
                    <Accordion.Body className="faqs__content">
                        <span className="faq_answer">
                            {t('inorderforyoutouseallthefeatures')}
                        </span>
                        <Link href="" className="faq__link">
                            {t('here')}
                        </Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqs__card" eventKey="3">
                    <Accordion.Header className="faqs__header ">
                        <span className="faq_quest">
                            {t('howcanIeditmyresumeorcoverletter')}
                        </span>
                        <span className="plus__icon">
                        <i className="fa fas fa-plus"></i>
                        </span>
                    </Accordion.Header>
                    <Accordion.Body className="faqs__content">
                        <span className="faq_answer" >{t('selectthedocumentyouwishtoedit')}</span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqs__card" eventKey="4">
                    <Accordion.Header className="faqs__header ">
                        <span className="faq_quest">
                            {t('howdoIchangemytemplate')}
                        </span>
                        <span className="plus__icon">
                        <i className="fa fas fa-plus"></i>
                        </span>
                    </Accordion.Header>
                    <Accordion.Body className="faqs__content">
                    <span className="faq_answer">
                        {t('apreviewofthedocumentisdisplayedinthetemplate')}
                    </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqs__card" eventKey="5">
                    <Accordion.Header className="faqs__header ">
                        <span className="faq_quest">
                            {t('howdoIchangethestatusofanapplication')}
                        </span>
                        <span className="plus__icon">
                        <i className="fa fas fa-plus"></i>
                        </span>
                    </Accordion.Header>
                    <Accordion.Body className="faqs__content">
                    <span className="faq_answer" >
                        {t('youcanchangethestatusofanapplication')}
                    </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqs__card" eventKey="6">
                    <Accordion.Header className="faqs__header ">
                        <span className="faq_quest">
                            {t('howdoIcancelmysubscription')}
                        </span>
                        <span className="plus__icon">
                        <i className="fa fas fa-plus"></i>
                        </span>
                    </Accordion.Header>
                    <Accordion.Body className="faqs__content">
                        <span className="faq_answer">
                            {t('loginandclickonyourprofileiconandgoto')}
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqs__card" eventKey="7">
                    <Accordion.Header className="faqs__header ">
                        <span  className="faq_quest">
                            {t('howdoIimportaresume')}
                        </span>
                        <span className="plus__icon">
                        <i className="fa fas fa-plus"></i>
                        </span>
                    </Accordion.Header>
                    <Accordion.Body className="faqs__content">
                        <span className="faq_answer">
                            {t('youcanimportanexistingresumebyusing')}
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqs__card" eventKey="8">
                    <Accordion.Header className="faqs__header ">
                        <span className="faq_quest">
                            {t('wherecanIviewmyreceipt')}
                        </span>
                        <span className="plus__icon">
                            <i className="fa fas fa-plus"></i>
                        </span>
                    </Accordion.Header>
                    <Accordion.Body className="faqs__content">
                        <span className="faq_answer">
                            {t('loginandclickonyourprofileicontogoto')}
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
        </div>
        </section>
    </>
    );
};

export default Faqs;
