import { t } from "i18next";
import React from "react";

const Terms = () => {
  return (
    <>
        <section className="login__section">
            <div className="container">
            <div className="title__wrapper mbttom_60 zoom-in">
                <h3 className="blue_title">{t('termsAndConditions')}</h3>
            </div>
            <div className="terms_wrCard">
                <p>{t('welcometowww.stylingresume.com!')}</p>
                <p>{t("thesetermsandconditionsoutlinetherules")}</p>
                <p>{t('byaccessingthiswebsiteweassumeyouaccept')}</p>
                <p>{t('thefollowingterminologyappliestotheseTermsandConditions')}</p>
                <h5>{t('cookies')}</h5>
                <p>{t('weemploytheuseofcookies')}</p>
                <p>{t('mostinteractivewebsitesusecookies')}</p>
                <h5>{t('license')}</h5>
                <p>{t('unlessotherwisestated')}</p>
                <h5>{t('youmustnot')}</h5>
                <ol className="p-0">
                  <li>{t('republishmaterialfrom')}</li>
                  <li>{t('sub-licensematerial')}</li>
                  <li>{t('reproduceduplicateorcopy')}</li>
                  <li>{t('redistributecontentfrom')}</li>
                </ol>
                <p>{t('thisAgreementshallbeginonthedatehereof')}</p>
                <p>{t('partsofthiswebsiteofferanopportunityforusers')}</p>
                <p>{t('stylingResumereservestherighttomonitor')}</p>
                <h5>{t('youwarrantandrepresentthat')}</h5>
                <ol className="p-0">
                  <li >{t('youareentitledtoposttheComments')}</li>
                  <li>{t('theCommentsdonotinvadeanyintellectual')}</li>
                  <li>{t('theCommentsdonotcontainanydefamatory')}</li>
                  <li>{t('theCommentswillnotbeusedtosolicit')}</li>
                </ol>
                <p >{t('youherebygrantStylingResumeanon-exclusive')}</p>
                <h5>{t('hyperlinkingtoourContent')}</h5>
                <p>{t('thefollowingorganizationsmaylink')}</p>
                <ol className="p-0">
                  <li>{t('governmentagencies')}</li>
                  <li>{t('searchengines')}</li>
                  <li>{t('newsorganizations')}</li>
                  <li>{t('onlinedirectorydistributorsmaylink')}</li>
                  <li>{t('systemwideAccreditedBusinessesexcept')}</li>
                </ol>
                <p>{t('theseorganizationsmaylinktoourhomepage')}</p>
                <ol className="p-0">
                  <li >{t('commonly-knownconsumer')}</li>
                  <li >{t('dot.comcommunitysites')}</li>
                  <li >{t('associationsorothergroups')}</li>
                  <li >{t('onlinedirectorydistributors')}</li>
                  <li >{t('internetportals')}</li>
                  <li >{t('accountinglaw')}</li>
                  <li >{t('educationalinstitutions')}</li>
                </ol>
                <p >{t('wewillapprovelinkrequests')}</p>
                <p >{t('theseorganizationsmaylinktoourhome')}</p>
                <p >{t('ifyouareoneoftheorganizationslisted')}</p>
                <h5 >{t('approvedorganizationsmay')}</h5>
                <ol className="p-0">
                <li >{t('byuseofourcorporatename')}</li>
                <li >{t('byuseoftheuniformresource')}</li>
                <li >{t('byuseofanyotherdescription')}</li>
                </ol>
                <p >{t("nouseofStylingResume'slogo")}</p>
                <h5 >{t('iFrames')} </h5>
                <p>{t('withoutpriorapprovalandwrittenpermission')}</p>
                <h5 >{t('content Liability')}</h5>
                <p >{t('weshallnotbeholdresponsibleforanycontent')}</p>
                <h5 >{t('yourPrivacy')}</h5>
                <p >{t('pleasereadPrivacyPolicy')}</p>
                <h5 >{t('reservationofRights')}</h5>
                <p>{t('wereservetherighttorequestthatyouremovealllinks')}</p>
                <h5 >{t('removaloflinksfromourwebsite')}</h5>
                <p >{t('ifyoufindanylinkonourWebsitethatisoffensive')}</p>
                <p >{t('wedonotensurethattheinformationonthiswebsite')}</p>
                <h5 >{t('disclaimer')}</h5>
                <p>{t('tothemaximumextentpermittedbyapplicablelaw')}</p>
                <ol className="p-0">
                  <li >{t('deathorpersonalinjury')}</li>
                  <li >{t('fraudorfraudulent')}</li>
                  <li >{t('permittedunderapplicable')}</li>
                  <li >{t('excludeanyofouroryourliabilitiesthatmay')}</li>
                </ol>
                <p >{t('thelimitationsandprohibitionsofliabilityset')}</p>
                <p >{t('aslongasthewebsiteandtheinformation')}</p>
            </div>
            </div>
        </section>
    </>
  );
};

export default Terms;
