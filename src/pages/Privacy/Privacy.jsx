import { t } from 'i18next'
import React from 'react'

const Privacy = () => {
    return (
        <>
        <section className="login__section">
            <div className="container">
                <div className="title__wrapper mbttom_60 zoom-in" >
                    <h3 className="blue_title">{t('privacyPolicyForStylingResume')}</h3>
                </div>
                <div className="terms_wrCard">
                    <p>{t('"welcometowww.stylingresume.com!')}</p>
                    <p >{t('atwww.stylingresume.comaccessiblefrom')}</p>
                    <p> {t('ifyouhaveadditionalquestionsorrequiremoreinformation')}</p>
                    <p>{t('thisPrivacyPolicyappliesonlytoouronlineactivities')}</p>
                    <h5>{t('consent')}</h5>
                    <p>{t('byusingourwebsite,youherebyconsent')}</p>
                    <p>{t('informationwecollect')}</p>
                    <p>{t('thepersonalinformationthatyouareasked')}</p>
                    <p>{t('ifyoucontactusdirectlywemayreceiveadditional')}</p>
                    <p>{t('whenyouregisterforanAccountwemayask')}</p>
                    <p>{t('howweuseyourinformation')}</p>
                    <p>{t('weusetheinformationwecollectinvariouswaysincludingto')}</p>
                    <ol>
                        <li>{t('provideoperateandmaintainourwebsite')}</li>
                        <li>{t('improvepersonalizeandexpandourwebsite')}</li>
                        <li>{t('understandandanalyzehowyouuseourwebsite')}</li>
                        <li>{t('developnewproductsservicesfeaturesandfunctionality')}</li>
                        <li>{t('communicatewithyoueitherdirectlyorthrough')}</li>
                        <li >{t('sendyouemails')}</li>
                        <li>{t('findandpreventfraud')}</li>
                    </ol>
                    <h5>{t('logFiles')}</h5>
                    <p>{t('followsastandardprocedureofusinglogfiles')}</p>
                    <h5>{t('cookiesandWebBeacons')}</h5>
                    <p>{t('likeanyotherwebsitewww.stylingresume.comuses')}</p>
                    <h5>{t('googleDoubleClickDARTCookie')}</h5>
                    <p>{t('googleisoneofathird-partyvendoronoursite')}</p>
                    <h5>{t('advertisingPartnersPrivacyPolicies')} </h5>
                    <p >{t('youmayconsultthislisttofindthePrivacy')}</p>
                    <p>{t('third-partyadserversoradnetworksuses')}</p>
                    <p>{t('notethatwww.stylingresume.comhasnoaccess')}</p>
                    <h5>{t('thirdPartyPrivacyPolicies')}</h5>
                    <p>{t('privacyPolicydoesnotapplytootheradvertisersorwebsites')}</p>
                    <p>{t('youcanchoosetodisablecookiesthroughyourindividual')}</p>
                    <h5>{t('cCPAPrivacyRights(DoNotSellMyPersonalInformation)')}</h5>
                    <p>{t('undertheCCPAamongotherrights')}</p>
                    <p>{t('requestthatabusinessthatcollectsaconsumerspersonal')}</p>
                    <p>{t('requestthatabusinessdeleteanypersonaldataabout')}</p>
                    <p>{t('requestthatabusinessthatsellsaconsumers')}</p>
                    <p>{t('ifyoumakearequestwehaveonemonth')}</p>
                    <h5 >{t('gDPRDataProtectionRights')}</h5>
                    <p>{t('wewouldliketomakesureyouarefullyaware')}</p>
                    <p>{t('therighttoaccessYouhavetheright')}</p>
                    <p>{t('therighttorectificationYouhavetheright')}</p>
                    <p>{t('therighttoerasureYouhavetheright')}</p>
                    <p>{t('therighttorestrictprocessingYouhavetheright')}</p>
                    <p>{t('therighttoobjecttoprocessingYouhave')}</p>
                    <p>{t('therighttodataportabilityYouhave')}</p>
                    <p>{t('ifyoumakearequestwehaveonemonthtorespondtoyou')}</p>
                    <h5>{t('childrensInformation')}</h5>
                    <p>{t('anotherpartofourpriorityisaddingprotectionforchildren')}</p>
                    <p>{t('doesnotknowinglycollectanyPersonalIdentifiableInformation')}</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Privacy