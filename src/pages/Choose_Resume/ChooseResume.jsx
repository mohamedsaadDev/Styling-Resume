import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { t } from 'i18next';
const ChooseResume = () => {
    const years = [];
    for (let year = 1960; year <= 2020; year++) {
        years.push(year);
    }
    return (
        <>
        <section className="form_section">
                <div className="containers m-2">
                    <form action="" className="cv_form">
                        <div className="formOne_wrapper">
                            <h3 className="side_title">{t('fillyourdata')}</h3>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="btn-choose constainer-header-accordion">
                                                <button className='w-100 d-flex justify-content-between align-items-center' type='button' >
                                                    <span>{t('personaldetails')}</span>
                                                    <div className="d-flex align-items-center">
                                                            <Dropdown onClick={(e)=>e.stopPropagation()}>
                                                                <Dropdown.Toggle className='text-dark border-0 bg-transparent'  id="dropdown-basic">
                                                                    <i className="fa-solid fa-ellipsis-vertical icon-plus btn-seting"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item className='text-dark ' href="#/action-1">
                                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11.1716 3H5C3.89543 3 3 3.89543 3 5V11.1716C3 11.702 3.21071 12.2107 3.58579 12.5858L10.8787 19.8787C12.0503 21.0503 13.9497 21.0503 15.1213 19.8787L19.8787 15.1213C21.0503 13.9497 21.0503 12.0503 19.8787 10.8787L12.5858 3.58579C12.2107 3.21071 11.702 3 11.1716 3Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <circle cx="7.5" cy="7.5" r="1.5" fill="#000000"/>
                                                                    </svg>
                                                                    {t('renamesection')}
                                                                    {/* <span className='text-dark' data-i18n="renamesection"></span>  */}
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">
                                                                    <svg width="20" height="20" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42908 1.79313C7.42887 1.24085 7.87641 0.793328 8.42869 0.793572L14.4287 0.796221C14.981 0.796465 15.4288 1.24438 15.4291 1.79666L15.4298 3.79667L21.4298 3.79932C21.9821 3.79956 22.43 4.24748 22.4302 4.79976C22.4304 5.35205 21.9829 5.79957 21.4306 5.79932L1.43065 5.79049C0.878371 5.79025 0.430483 5.34234 0.430268 4.79005C0.430053 4.23776 0.877593 3.79024 1.42988 3.79049L7.42986 3.79314L7.42908 1.79313ZM9.42986 3.79402L13.4298 3.79579L13.4295 2.79578L9.42947 2.79402L9.42986 3.79402Z" fill="black"/>
                                                                        <path d="M9.43297 11.794C9.98525 11.7943 10.4331 12.2422 10.4334 12.7945L10.4365 20.7945C10.4367 21.3468 9.98915 21.7943 9.43686 21.7941C8.88458 21.7938 8.43669 21.3459 8.43648 20.7936L8.43336 12.7936C8.43315 12.2413 8.88069 11.7938 9.43297 11.794Z" fill="black"/>
                                                                        <path d="M14.4333 12.7963C14.4331 12.244 13.9852 11.7961 13.433 11.7958C12.8807 11.7956 12.4331 12.2431 12.4334 12.7954L12.4365 20.7954C12.4367 21.3477 12.8846 21.7956 13.4369 21.7958C13.9891 21.7961 14.4367 21.3486 14.4365 20.7963L14.4333 12.7963Z" fill="black"/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67611 8.13585C2.86596 7.91693 3.14154 7.79125 3.43143 7.79138L19.4314 7.79845C19.7213 7.79857 19.997 7.92449 20.187 8.14358C20.377 8.36266 20.4627 8.65335 20.4218 8.94031L18.3869 23.2223C18.1764 24.7001 16.911 25.7974 15.4181 25.7967L7.45873 25.7932C5.96579 25.7925 4.6996 24.6942 4.48789 23.2161L2.44193 8.93237C2.40082 8.64537 2.48626 8.35476 2.67611 8.13585ZM4.58521 9.7919L6.46767 22.9342C6.53824 23.4269 6.9603 23.793 7.45795 23.7932L15.4173 23.7967C15.915 23.7969 16.3367 23.4312 16.4069 22.9386L18.2792 9.79794L4.58521 9.7919Z" fill="black"/>
                                                                    </svg>
                                                                    <span>{t('removesection')}</span>
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        <button type="button" className="border-0 btn-plus">
                                                            <i className="fa-solid fa-plus icon-plus"></i>
                                                            <i className="fa-solid fa-minus icon-negative"></i>
                                                        </button>
                                                    </div>
                                                </button>
                                            </Accordion.Header>
                                            <Accordion.Body >
                                                <div className="accordion-body my-2 p-2 border border-secondary rounded">
                                                        <div className="d-flex my-4 ">
                                                            <div className=" bg-light pointer icon-upload  ">
                                                                <label for="upload" className="text-secondary w-100" >
                                                                        <svg className="text-secondary pointer" width="100%" height="20px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.205 3h11.59c1.114 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926v7.51l-4.391-4.053a1.5 1.5 0 0 0-2.265.27l-3.13 4.695-2.303-1.48a1.5 1.5 0 0 0-1.96.298L3.005 18.15A12.98 12.98 0 0 1 3 17.795V6.205c0-1.115.116-1.519.334-1.926.218-.407.538-.727.945-.945C4.686 3.116 5.09 3 6.205 3zm9.477 8.53L21 16.437v1.357c0 1.114-.116 1.519-.334 1.926a2.272 2.272 0 0 1-.945.945c-.407.218-.811.334-1.926.334H6.205c-1.115 0-1.519-.116-1.926-.334a2.305 2.305 0 0 1-.485-.345L8.2 15.067l2.346 1.508a1.5 1.5 0 0 0 2.059-.43l3.077-4.616zM7.988 6C6.878 6 6 6.832 6 7.988 6 9.145 6.879 10 7.988 10 9.121 10 10 9.145 10 7.988 10 6.832 9.121 6 7.988 6z" /></svg>
                                                                </label>
                                                                <input id="upload" type="file" hidden />
                                                            </div>
                                                            <div className="my-auto">
                                                                <div className="d-flex">
                                                                    <div className="mx-2">
                                                                        <label className="label-form-choose" for="Givenname">{t('givenname')}</label>
                                                                        <input className="input-form-choose w-100 " id="Givenname" type="text"/>
                                                                    </div>
                                                                    <div className="mx-2">
                                                                        <label className="label-form-choose" for="Familyname">{t('familyname')}</label>
                                                                        <input className="input-form-choose w-100" id="Familyname" type="text"/>
                                                                    </div>
                                                                </div>
                                                                <div className="m-2">
                                                                    <label className="label-form-choose W-100" for="Emailaddress" >{t('emailaddress')}</label>
                                                                    <input className="input-form-choose w-100" id="Emailaddress" type="text"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mx-2">
                                                            <label className="label-form-choose" for="headline">{t('headline')}</label>
                                                            <input className="input-form-choose w-100" id="headline" type="text"/>
                                                        </div>
                                                        <div className="mx-2">
                                                            <label className="label-form-choose" for="phonenumber">{t('phonenumber')}</label>
                                                            <input className="input-form-choose w-100" id="phonenumber" type="namber"/>
                                                        </div>
                                                        <div className="mx-2">
                                                            <label className="label-form-choose" for="address">{t('address')}</label>
                                                            <input className="input-form-choose w-100" id="address" type="text"/>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="w-50" >
                                                                <label className="label-form-choose" for="postcode">{t('postcode')}</label>
                                                                <input className="input-form-choose w-95" id="postcode" type="text"/>
                                                            </div>
                                                            <div className="w-50">
                                                                <label className="label-form-choose" for="City">{t('city')}</label>
                                                                <input className="input-form-choose w-95" id="City" type="text"/>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex  flex-row-reverse mt-3">
                                                            <button className="btn-add hvr-sweep-to-left">{t('save')}</button>
                                                            <svg className="mx-2 mt-5px" width="20" height="20" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42908 1.79313C7.42887 1.24085 7.87641 0.793328 8.42869 0.793572L14.4287 0.796221C14.981 0.796465 15.4288 1.24438 15.4291 1.79666L15.4298 3.79667L21.4298 3.79932C21.9821 3.79956 22.43 4.24748 22.4302 4.79976C22.4304 5.35205 21.9829 5.79957 21.4306 5.79932L1.43065 5.79049C0.878371 5.79025 0.430483 5.34234 0.430268 4.79005C0.430053 4.23776 0.877593 3.79024 1.42988 3.79049L7.42986 3.79314L7.42908 1.79313ZM9.42986 3.79402L13.4298 3.79579L13.4295 2.79578L9.42947 2.79402L9.42986 3.79402Z" fill="black"/>
                                                                <path d="M9.43297 11.794C9.98525 11.7943 10.4331 12.2422 10.4334 12.7945L10.4365 20.7945C10.4367 21.3468 9.98915 21.7943 9.43686 21.7941C8.88458 21.7938 8.43669 21.3459 8.43648 20.7936L8.43336 12.7936C8.43315 12.2413 8.88069 11.7938 9.43297 11.794Z" fill="black"/>
                                                                <path d="M14.4333 12.7963C14.4331 12.244 13.9852 11.7961 13.433 11.7958C12.8807 11.7956 12.4331 12.2431 12.4334 12.7954L12.4365 20.7954C12.4367 21.3477 12.8846 21.7956 13.4369 21.7958C13.9891 21.7961 14.4367 21.3486 14.4365 20.7963L14.4333 12.7963Z" fill="black"/>
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67611 8.13585C2.86596 7.91693 3.14154 7.79125 3.43143 7.79138L19.4314 7.79845C19.7213 7.79857 19.997 7.92449 20.187 8.14358C20.377 8.36266 20.4627 8.65335 20.4218 8.94031L18.3869 23.2223C18.1764 24.7001 16.911 25.7974 15.4181 25.7967L7.45873 25.7932C5.96579 25.7925 4.6996 24.6942 4.48789 23.2161L2.44193 8.93237C2.40082 8.64537 2.48626 8.35476 2.67611 8.13585ZM4.58521 9.7919L6.46767 22.9342C6.53824 23.4269 6.9603 23.793 7.45795 23.7932L15.4173 23.7967C15.915 23.7969 16.3367 23.4312 16.4069 22.9386L18.2792 9.79794L4.58521 9.7919Z" fill="black"/>
                                                            </svg>
                                                        </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header className="btn-choose constainer-header-accordion">
                                                <button className='w-100 d-flex justify-content-between align-items-center' type='button' >
                                                    <span>{t('education')}</span>
                                                    <div className="d-flex align-items-center">
                                                            <Dropdown onClick={(e)=>e.stopPropagation()}>
                                                                <Dropdown.Toggle className='text-dark border-0 bg-transparent'  id="dropdown-basic">
                                                                    <i className="fa-solid fa-ellipsis-vertical icon-plus btn-seting"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item className='text-dark bg-transparent' href="#/action-1">
                                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11.1716 3H5C3.89543 3 3 3.89543 3 5V11.1716C3 11.702 3.21071 12.2107 3.58579 12.5858L10.8787 19.8787C12.0503 21.0503 13.9497 21.0503 15.1213 19.8787L19.8787 15.1213C21.0503 13.9497 21.0503 12.0503 19.8787 10.8787L12.5858 3.58579C12.2107 3.21071 11.702 3 11.1716 3Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <circle cx="7.5" cy="7.5" r="1.5" fill="#000000"/>
                                                                    </svg>
                                                                    {t('renamesection')}
                                                                    <span className='text-dark'>{t('renamesection')}</span> 
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">
                                                                    <svg width="20" height="20" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42908 1.79313C7.42887 1.24085 7.87641 0.793328 8.42869 0.793572L14.4287 0.796221C14.981 0.796465 15.4288 1.24438 15.4291 1.79666L15.4298 3.79667L21.4298 3.79932C21.9821 3.79956 22.43 4.24748 22.4302 4.79976C22.4304 5.35205 21.9829 5.79957 21.4306 5.79932L1.43065 5.79049C0.878371 5.79025 0.430483 5.34234 0.430268 4.79005C0.430053 4.23776 0.877593 3.79024 1.42988 3.79049L7.42986 3.79314L7.42908 1.79313ZM9.42986 3.79402L13.4298 3.79579L13.4295 2.79578L9.42947 2.79402L9.42986 3.79402Z" fill="black"/>
                                                                        <path d="M9.43297 11.794C9.98525 11.7943 10.4331 12.2422 10.4334 12.7945L10.4365 20.7945C10.4367 21.3468 9.98915 21.7943 9.43686 21.7941C8.88458 21.7938 8.43669 21.3459 8.43648 20.7936L8.43336 12.7936C8.43315 12.2413 8.88069 11.7938 9.43297 11.794Z" fill="black"/>
                                                                        <path d="M14.4333 12.7963C14.4331 12.244 13.9852 11.7961 13.433 11.7958C12.8807 11.7956 12.4331 12.2431 12.4334 12.7954L12.4365 20.7954C12.4367 21.3477 12.8846 21.7956 13.4369 21.7958C13.9891 21.7961 14.4367 21.3486 14.4365 20.7963L14.4333 12.7963Z" fill="black"/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67611 8.13585C2.86596 7.91693 3.14154 7.79125 3.43143 7.79138L19.4314 7.79845C19.7213 7.79857 19.997 7.92449 20.187 8.14358C20.377 8.36266 20.4627 8.65335 20.4218 8.94031L18.3869 23.2223C18.1764 24.7001 16.911 25.7974 15.4181 25.7967L7.45873 25.7932C5.96579 25.7925 4.6996 24.6942 4.48789 23.2161L2.44193 8.93237C2.40082 8.64537 2.48626 8.35476 2.67611 8.13585ZM4.58521 9.7919L6.46767 22.9342C6.53824 23.4269 6.9603 23.793 7.45795 23.7932L15.4173 23.7967C15.915 23.7969 16.3367 23.4312 16.4069 22.9386L18.2792 9.79794L4.58521 9.7919Z" fill="black"/>
                                                                    </svg>
                                                                    {t('removesection')}
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        <button type="button" className="border-0 btn-plus">
                                                            <i className="fa-solid fa-plus icon-plus"></i>
                                                            <i className="fa-solid fa-minus icon-negative"></i>
                                                        </button>
                                                    </div>
                                                </button>
                                            </Accordion.Header>
                                            <Accordion.Body >
                                                <div className="my-2 p-3 py-4 border border-secondary rounded">
                                                            <div className="my-2">
                                                                <label className="label-form-choose" for="Education">{t('education')}</label>
                                                                <input className="input-form-choose w-100" type="text" id="Education"/>
                                                            </div>
                                                            <div className="d-flex">
                                                                <div className="my-2">
                                                                    <label className="label-form-choose" for="school">{t('school')}</label>
                                                                    <input className="input-form-choose w-95" type="text" id="school"/>
                                                                </div>
                                                                <div className="my-2">
                                                                    <label className="label-form-choose" for="city">{t('city')}</label>
                                                                    <input className="input-form-choose w-95" type="text" id="city"/>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex">
                                                                <div className="my-2 w-50">
                                                                    <p >{t('startdate')}</p>
                                                                    <select className="select-form-choose mr-2" name="" id="">
                                                                        <option selected >{t('month')}</option>
                                                                        <option value="1">{t('January')}</option>
                                                                        <option value="2">{t('February')}</option>
                                                                        <option value="3">{t('March')}</option>
                                                                        <option value="4">{t('April')}</option>
                                                                        <option value="5">{t('May')}</option>
                                                                        <option value="6">{t('June')}</option>
                                                                        <option value="7">{t('July')}</option>
                                                                        <option value="8">{t('August')}</option>
                                                                        <option value="9">{t('September')}</option>
                                                                        <option value="10">{t('October')}</option>
                                                                        <option value="11">{t('November')}</option>
                                                                        <option value="12">{t('December')}</option>
                                                                    </select>
                                                                    <select className="select-form-choose selectYear" name="">
                                                                        <option value="year">{t('year')}</option>
                                                                        {years.map(year => (
                                                                            <option key={year} value="year">{year}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                                <div className="my-2">
                                                                    <p>{t('enddate')}</p>
                                                                    <select className="select-form-choose mr-2" name="" id="">
                                                                        <option selected >{t('month')}</option>
                                                                        <option value="1">{t('January')}</option>
                                                                        <option value="2">{t('February')}</option>
                                                                        <option value="3">{t('March')}</option>
                                                                        <option value="4">{t('April')}</option>
                                                                        <option value="5">{t('May')}</option>
                                                                        <option value="6">{t('June')}</option>
                                                                        <option value="7">{t('July')}</option>
                                                                        <option value="8">{t('August')}</option>
                                                                        <option value="9">{t('September')}</option>
                                                                        <option value="10">{t('October')}</option>
                                                                        <option value="11">{t('November')}</option>
                                                                        <option value="12">{t('December')}</option>
                                                                    </select>
                                                                    <select className="select-form-choose selectYear" name="" >
                                                                        <option value="year">{t('year')}</option>
                                                                        {years.map(year => (
                                                                            <option key={year} value="year">{year}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="my-2 ">{t('description')}</p>
                                                                <div className="summernote-Description">
                                                                    <div className="summernote" ></div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex  flex-row-reverse mt-3">
                                                                <button className="btn-add hvr-sweep-to-left">{t('save')}</button>
                                                                <svg className="mx-2 mt-5px" width="20" height="20" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42908 1.79313C7.42887 1.24085 7.87641 0.793328 8.42869 0.793572L14.4287 0.796221C14.981 0.796465 15.4288 1.24438 15.4291 1.79666L15.4298 3.79667L21.4298 3.79932C21.9821 3.79956 22.43 4.24748 22.4302 4.79976C22.4304 5.35205 21.9829 5.79957 21.4306 5.79932L1.43065 5.79049C0.878371 5.79025 0.430483 5.34234 0.430268 4.79005C0.430053 4.23776 0.877593 3.79024 1.42988 3.79049L7.42986 3.79314L7.42908 1.79313ZM9.42986 3.79402L13.4298 3.79579L13.4295 2.79578L9.42947 2.79402L9.42986 3.79402Z" fill="black"/>
                                                                    <path d="M9.43297 11.794C9.98525 11.7943 10.4331 12.2422 10.4334 12.7945L10.4365 20.7945C10.4367 21.3468 9.98915 21.7943 9.43686 21.7941C8.88458 21.7938 8.43669 21.3459 8.43648 20.7936L8.43336 12.7936C8.43315 12.2413 8.88069 11.7938 9.43297 11.794Z" fill="black"/>
                                                                    <path d="M14.4333 12.7963C14.4331 12.244 13.9852 11.7961 13.433 11.7958C12.8807 11.7956 12.4331 12.2431 12.4334 12.7954L12.4365 20.7954C12.4367 21.3477 12.8846 21.7956 13.4369 21.7958C13.9891 21.7961 14.4367 21.3486 14.4365 20.7963L14.4333 12.7963Z" fill="black"/>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67611 8.13585C2.86596 7.91693 3.14154 7.79125 3.43143 7.79138L19.4314 7.79845C19.7213 7.79857 19.997 7.92449 20.187 8.14358C20.377 8.36266 20.4627 8.65335 20.4218 8.94031L18.3869 23.2223C18.1764 24.7001 16.911 25.7974 15.4181 25.7967L7.45873 25.7932C5.96579 25.7925 4.6996 24.6942 4.48789 23.2161L2.44193 8.93237C2.40082 8.64537 2.48626 8.35476 2.67611 8.13585ZM4.58521 9.7919L6.46767 22.9342C6.53824 23.4269 6.9603 23.793 7.45795 23.7932L15.4173 23.7967C15.915 23.7969 16.3367 23.4312 16.4069 22.9386L18.2792 9.79794L4.58521 9.7919Z" fill="black"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <button className="border border-secondary p-2 bg-white rounded">
                                                            <i className="fa-solid fa-plus"></i>
                                                            {t('addEducation')}
                                                        </button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header className="btn-choose constainer-header-accordion">
                                                <button className='w-100 d-flex justify-content-between align-items-center' type='button' >
                                                    <span>{t('employment')}</span>
                                                    <div className="d-flex align-items-center">
                                                            <Dropdown onClick={(e)=>e.stopPropagation()}>
                                                                <Dropdown.Toggle className='text-dark border-0 bg-transparent'  id="dropdown-basic">
                                                                    <i className="fa-solid fa-ellipsis-vertical icon-plus btn-seting"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item className='text-dark bg-transparent' href="#/action-1">
                                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11.1716 3H5C3.89543 3 3 3.89543 3 5V11.1716C3 11.702 3.21071 12.2107 3.58579 12.5858L10.8787 19.8787C12.0503 21.0503 13.9497 21.0503 15.1213 19.8787L19.8787 15.1213C21.0503 13.9497 21.0503 12.0503 19.8787 10.8787L12.5858 3.58579C12.2107 3.21071 11.702 3 11.1716 3Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <circle cx="7.5" cy="7.5" r="1.5" fill="#000000"/>
                                                                    </svg>
                                                                    {/* {t('renamesection')} */}
                                                                    <span className='text-dark' >{t('renamesection')}</span> 
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">
                                                                    <svg width="20" height="20" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42908 1.79313C7.42887 1.24085 7.87641 0.793328 8.42869 0.793572L14.4287 0.796221C14.981 0.796465 15.4288 1.24438 15.4291 1.79666L15.4298 3.79667L21.4298 3.79932C21.9821 3.79956 22.43 4.24748 22.4302 4.79976C22.4304 5.35205 21.9829 5.79957 21.4306 5.79932L1.43065 5.79049C0.878371 5.79025 0.430483 5.34234 0.430268 4.79005C0.430053 4.23776 0.877593 3.79024 1.42988 3.79049L7.42986 3.79314L7.42908 1.79313ZM9.42986 3.79402L13.4298 3.79579L13.4295 2.79578L9.42947 2.79402L9.42986 3.79402Z" fill="black"/>
                                                                        <path d="M9.43297 11.794C9.98525 11.7943 10.4331 12.2422 10.4334 12.7945L10.4365 20.7945C10.4367 21.3468 9.98915 21.7943 9.43686 21.7941C8.88458 21.7938 8.43669 21.3459 8.43648 20.7936L8.43336 12.7936C8.43315 12.2413 8.88069 11.7938 9.43297 11.794Z" fill="black"/>
                                                                        <path d="M14.4333 12.7963C14.4331 12.244 13.9852 11.7961 13.433 11.7958C12.8807 11.7956 12.4331 12.2431 12.4334 12.7954L12.4365 20.7954C12.4367 21.3477 12.8846 21.7956 13.4369 21.7958C13.9891 21.7961 14.4367 21.3486 14.4365 20.7963L14.4333 12.7963Z" fill="black"/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67611 8.13585C2.86596 7.91693 3.14154 7.79125 3.43143 7.79138L19.4314 7.79845C19.7213 7.79857 19.997 7.92449 20.187 8.14358C20.377 8.36266 20.4627 8.65335 20.4218 8.94031L18.3869 23.2223C18.1764 24.7001 16.911 25.7974 15.4181 25.7967L7.45873 25.7932C5.96579 25.7925 4.6996 24.6942 4.48789 23.2161L2.44193 8.93237C2.40082 8.64537 2.48626 8.35476 2.67611 8.13585ZM4.58521 9.7919L6.46767 22.9342C6.53824 23.4269 6.9603 23.793 7.45795 23.7932L15.4173 23.7967C15.915 23.7969 16.3367 23.4312 16.4069 22.9386L18.2792 9.79794L4.58521 9.7919Z" fill="black"/>
                                                                    </svg>
                                                                    {t('removesection')}
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        <button type="button" className="border-0 btn-plus">
                                                            <i className="fa-solid fa-plus icon-plus"></i>
                                                            <i className="fa-solid fa-minus icon-negative"></i>
                                                        </button>
                                                    </div>
                                                </button>
                                            </Accordion.Header>
                                            <Accordion.Body >
                                            <div className="my-2 p-3 py-4 border border-secondary rounded">
                                                <div className="my-2">
                                                    <label className="label-form-choose" for="position">{t('position')}</label>
                                                    <input className="input-form-choose w-100" type="text" id="position"/>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="my-2">
                                                        <label className="label-form-choose" for="employer">{t('employer')}</label>
                                                        <input className="input-form-choose w-95" type="text" id="employer"/>
                                                    </div>
                                                    <div className="my-2">
                                                        <label className="label-form-choose" for="city" >{t('city')}</label>
                                                        <input className="input-form-choose w-95" type="text" id="city"/>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="my-2 w-50">
                                                        <p >{t('startdate')}</p>
                                                        <select className="select-form-choose mr-2" name="" id="">
                                                            <option selected >{t('month')}</option>
                                                            <option value="1">{t('January')}</option>
                                                            <option value="2">{t('February')}</option>
                                                            <option value="3">{t('March')}</option>
                                                            <option value="4">{t('April')}</option>
                                                            <option value="5">{t('May')}</option>
                                                            <option value="6">{t('June')}</option>
                                                            <option value="7">{t('July')}</option>
                                                            <option value="8">{t('August')}</option>
                                                            <option value="9">{t('September')}</option>
                                                            <option value="10">{t('October')}</option>
                                                            <option value="11">{t('November')}</option>
                                                            <option value="12">{t('December')}</option>
                                                        </select>
                                                        <select className="select-form-choose selectYear" name="" >
                                                            <option value="year">{t('year')}</option>
                                                            {years.map(year => (
                                                                <option key={year} value="year">{year}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="my-2">
                                                        <p>{t('enddate')}</p>
                                                        <select className="select-form-choose mr-2" name="" id="">
                                                        <option selected >{t('month')}</option>
                                                            <option value="1">{t('January')}</option>
                                                            <option value="2">{t('February')}</option>
                                                            <option value="3">{t('March')}</option>
                                                            <option value="4">{t('April')}</option>
                                                            <option value="5">{t('May')}</option>
                                                            <option value="6">{t('June')}</option>
                                                            <option value="7">{t('July')}</option>
                                                            <option value="8">{t('August')}</option>
                                                            <option value="9">{t('September')}</option>
                                                            <option value="10">{t('October')}</option>
                                                            <option value="11">{t('November')}</option>
                                                            <option value="12">{t('December')}</option>
                                                        </select>
                                                        <select className="select-form-choose selectYear" name="" id="selectYear">
                                                            <option value="year">{t('year')}</option>
                                                            {years.map(year => (
                                                                <option key={year} value="year">{year}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="my-2">{t('description')}</p>
                                                    <div className="summernote-Description">
                                                        <div className="summernote" ></div>
                                                    </div>
                                                </div>
                                                <div className="d-flex  flex-row-reverse mt-3">
                                                    <button className="btn-add hvr-sweep-to-left" >{t('save')}</button>
                                                    <svg className="mx-2 mt-5px" width="20" height="20" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42908 1.79313C7.42887 1.24085 7.87641 0.793328 8.42869 0.793572L14.4287 0.796221C14.981 0.796465 15.4288 1.24438 15.4291 1.79666L15.4298 3.79667L21.4298 3.79932C21.9821 3.79956 22.43 4.24748 22.4302 4.79976C22.4304 5.35205 21.9829 5.79957 21.4306 5.79932L1.43065 5.79049C0.878371 5.79025 0.430483 5.34234 0.430268 4.79005C0.430053 4.23776 0.877593 3.79024 1.42988 3.79049L7.42986 3.79314L7.42908 1.79313ZM9.42986 3.79402L13.4298 3.79579L13.4295 2.79578L9.42947 2.79402L9.42986 3.79402Z" fill="black"/>
                                                        <path d="M9.43297 11.794C9.98525 11.7943 10.4331 12.2422 10.4334 12.7945L10.4365 20.7945C10.4367 21.3468 9.98915 21.7943 9.43686 21.7941C8.88458 21.7938 8.43669 21.3459 8.43648 20.7936L8.43336 12.7936C8.43315 12.2413 8.88069 11.7938 9.43297 11.794Z" fill="black"/>
                                                        <path d="M14.4333 12.7963C14.4331 12.244 13.9852 11.7961 13.433 11.7958C12.8807 11.7956 12.4331 12.2431 12.4334 12.7954L12.4365 20.7954C12.4367 21.3477 12.8846 21.7956 13.4369 21.7958C13.9891 21.7961 14.4367 21.3486 14.4365 20.7963L14.4333 12.7963Z" fill="black"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67611 8.13585C2.86596 7.91693 3.14154 7.79125 3.43143 7.79138L19.4314 7.79845C19.7213 7.79857 19.997 7.92449 20.187 8.14358C20.377 8.36266 20.4627 8.65335 20.4218 8.94031L18.3869 23.2223C18.1764 24.7001 16.911 25.7974 15.4181 25.7967L7.45873 25.7932C5.96579 25.7925 4.6996 24.6942 4.48789 23.2161L2.44193 8.93237C2.40082 8.64537 2.48626 8.35476 2.67611 8.13585ZM4.58521 9.7919L6.46767 22.9342C6.53824 23.4269 6.9603 23.793 7.45795 23.7932L15.4173 23.7967C15.915 23.7969 16.3367 23.4312 16.4069 22.9386L18.2792 9.79794L4.58521 9.7919Z" fill="black"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <button className="border border-secondary p-2 bg-white rounded">
                                                <i className="fa-solid fa-plus"></i>
                                                <span >{t('addEmployment')}</span>
                                            </button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header className="btn-choose constainer-header-accordion">
                                                <button className='w-100 d-flex justify-content-between align-items-center' type='button' >
                                                <span>{t('skills')}</span>
                                                    <div className="d-flex align-items-center">
                                                            <Dropdown onClick={(e)=>e.stopPropagation()}>
                                                                <Dropdown.Toggle className='text-dark border-0 bg-transparent'  id="dropdown-basic">
                                                                    <i className="fa-solid fa-ellipsis-vertical icon-plus btn-seting"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item className='text-dark bg-transparent' href="#/action-1">
                                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11.1716 3H5C3.89543 3 3 3.89543 3 5V11.1716C3 11.702 3.21071 12.2107 3.58579 12.5858L10.8787 19.8787C12.0503 21.0503 13.9497 21.0503 15.1213 19.8787L19.8787 15.1213C21.0503 13.9497 21.0503 12.0503 19.8787 10.8787L12.5858 3.58579C12.2107 3.21071 11.702 3 11.1716 3Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <circle cx="7.5" cy="7.5" r="1.5" fill="#000000"/>
                                                                    </svg>
                                                                    {t('renamesection')}
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">
                                                                    <svg width="20" height="20" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42908 1.79313C7.42887 1.24085 7.87641 0.793328 8.42869 0.793572L14.4287 0.796221C14.981 0.796465 15.4288 1.24438 15.4291 1.79666L15.4298 3.79667L21.4298 3.79932C21.9821 3.79956 22.43 4.24748 22.4302 4.79976C22.4304 5.35205 21.9829 5.79957 21.4306 5.79932L1.43065 5.79049C0.878371 5.79025 0.430483 5.34234 0.430268 4.79005C0.430053 4.23776 0.877593 3.79024 1.42988 3.79049L7.42986 3.79314L7.42908 1.79313ZM9.42986 3.79402L13.4298 3.79579L13.4295 2.79578L9.42947 2.79402L9.42986 3.79402Z" fill="black"/>
                                                                        <path d="M9.43297 11.794C9.98525 11.7943 10.4331 12.2422 10.4334 12.7945L10.4365 20.7945C10.4367 21.3468 9.98915 21.7943 9.43686 21.7941C8.88458 21.7938 8.43669 21.3459 8.43648 20.7936L8.43336 12.7936C8.43315 12.2413 8.88069 11.7938 9.43297 11.794Z" fill="black"/>
                                                                        <path d="M14.4333 12.7963C14.4331 12.244 13.9852 11.7961 13.433 11.7958C12.8807 11.7956 12.4331 12.2431 12.4334 12.7954L12.4365 20.7954C12.4367 21.3477 12.8846 21.7956 13.4369 21.7958C13.9891 21.7961 14.4367 21.3486 14.4365 20.7963L14.4333 12.7963Z" fill="black"/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67611 8.13585C2.86596 7.91693 3.14154 7.79125 3.43143 7.79138L19.4314 7.79845C19.7213 7.79857 19.997 7.92449 20.187 8.14358C20.377 8.36266 20.4627 8.65335 20.4218 8.94031L18.3869 23.2223C18.1764 24.7001 16.911 25.7974 15.4181 25.7967L7.45873 25.7932C5.96579 25.7925 4.6996 24.6942 4.48789 23.2161L2.44193 8.93237C2.40082 8.64537 2.48626 8.35476 2.67611 8.13585ZM4.58521 9.7919L6.46767 22.9342C6.53824 23.4269 6.9603 23.793 7.45795 23.7932L15.4173 23.7967C15.915 23.7969 16.3367 23.4312 16.4069 22.9386L18.2792 9.79794L4.58521 9.7919Z" fill="black"/>
                                                                    </svg>
                                                                    {t('removesection')}
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        <button type="button" className="border-0 btn-plus">
                                                            <i className="fa-solid fa-plus icon-plus"></i>
                                                            <i className="fa-solid fa-minus icon-negative"></i>
                                                        </button>
                                                    </div>
                                                </button>
                                            </Accordion.Header>
                                            <Accordion.Body >
                                            <div className="my-2 p-3 py-4 border border-secondary rounded">
                                                <div className="my-2">
                                                    <label className="label-form-choose" for="skills">{t('skills')}</label>
                                                    <input className="input-form-choose w-95" type="text" id="skills"/>
                                                </div>
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <Form.Label>{t("level")}</Form.Label>
                                                        <Form.Range className="form-range w-75 bg-transparent mx-3" min="0" max="5" step="1"  />
                                                    </div>
                                                    <div className="d-flex  flex-row-reverse mt-3">
                                                        <button className="btn-add hvr-sweep-to-left" data-i18n="save"></button>
                                                            <svg className="mx-2 mt-5px" width="20" height="20" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42908 1.79313C7.42887 1.24085 7.87641 0.793328 8.42869 0.793572L14.4287 0.796221C14.981 0.796465 15.4288 1.24438 15.4291 1.79666L15.4298 3.79667L21.4298 3.79932C21.9821 3.79956 22.43 4.24748 22.4302 4.79976C22.4304 5.35205 21.9829 5.79957 21.4306 5.79932L1.43065 5.79049C0.878371 5.79025 0.430483 5.34234 0.430268 4.79005C0.430053 4.23776 0.877593 3.79024 1.42988 3.79049L7.42986 3.79314L7.42908 1.79313ZM9.42986 3.79402L13.4298 3.79579L13.4295 2.79578L9.42947 2.79402L9.42986 3.79402Z" fill="black"/>
                                                                <path d="M9.43297 11.794C9.98525 11.7943 10.4331 12.2422 10.4334 12.7945L10.4365 20.7945C10.4367 21.3468 9.98915 21.7943 9.43686 21.7941C8.88458 21.7938 8.43669 21.3459 8.43648 20.7936L8.43336 12.7936C8.43315 12.2413 8.88069 11.7938 9.43297 11.794Z" fill="black"/>
                                                                <path d="M14.4333 12.7963C14.4331 12.244 13.9852 11.7961 13.433 11.7958C12.8807 11.7956 12.4331 12.2431 12.4334 12.7954L12.4365 20.7954C12.4367 21.3477 12.8846 21.7956 13.4369 21.7958C13.9891 21.7961 14.4367 21.3486 14.4365 20.7963L14.4333 12.7963Z" fill="black"/>
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67611 8.13585C2.86596 7.91693 3.14154 7.79125 3.43143 7.79138L19.4314 7.79845C19.7213 7.79857 19.997 7.92449 20.187 8.14358C20.377 8.36266 20.4627 8.65335 20.4218 8.94031L18.3869 23.2223C18.1764 24.7001 16.911 25.7974 15.4181 25.7967L7.45873 25.7932C5.96579 25.7925 4.6996 24.6942 4.48789 23.2161L2.44193 8.93237C2.40082 8.64537 2.48626 8.35476 2.67611 8.13585ZM4.58521 9.7919L6.46767 22.9342C6.53824 23.4269 6.9603 23.793 7.45795 23.7932L15.4173 23.7967C15.915 23.7969 16.3367 23.4312 16.4069 22.9386L18.2792 9.79794L4.58521 9.7919Z" fill="black"/>
                                                            </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="border border-secondary p-2 bg-white rounded">
                                                <i className="fa-solid fa-plus"></i>
                                                <span>{t('addSkills')}</span>
                                            </button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header className="btn-choose constainer-header-accordion">
                                                <button className='w-100 d-flex justify-content-between align-items-center' type='button' >
                                                    <span>{t('Languages')}</span>
                                                    <div className="d-flex align-items-center">
                                                            <Dropdown onClick={(e)=>e.stopPropagation()}>
                                                                <Dropdown.Toggle className='text-dark border-0 bg-transparent'  id="dropdown-basic">
                                                                    <i className="fa-solid fa-ellipsis-vertical icon-plus btn-seting"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item className='text-dark bg-transparent' href="#/action-1">
                                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M11.1716 3H5C3.89543 3 3 3.89543 3 5V11.1716C3 11.702 3.21071 12.2107 3.58579 12.5858L10.8787 19.8787C12.0503 21.0503 13.9497 21.0503 15.1213 19.8787L19.8787 15.1213C21.0503 13.9497 21.0503 12.0503 19.8787 10.8787L12.5858 3.58579C12.2107 3.21071 11.702 3 11.1716 3Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <circle cx="7.5" cy="7.5" r="1.5" fill="#000000"/>
                                                                    </svg>
                                                                    {t('renamesection')}
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">
                                                                    <svg width="20" height="20" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42908 1.79313C7.42887 1.24085 7.87641 0.793328 8.42869 0.793572L14.4287 0.796221C14.981 0.796465 15.4288 1.24438 15.4291 1.79666L15.4298 3.79667L21.4298 3.79932C21.9821 3.79956 22.43 4.24748 22.4302 4.79976C22.4304 5.35205 21.9829 5.79957 21.4306 5.79932L1.43065 5.79049C0.878371 5.79025 0.430483 5.34234 0.430268 4.79005C0.430053 4.23776 0.877593 3.79024 1.42988 3.79049L7.42986 3.79314L7.42908 1.79313ZM9.42986 3.79402L13.4298 3.79579L13.4295 2.79578L9.42947 2.79402L9.42986 3.79402Z" fill="black"/>
                                                                        <path d="M9.43297 11.794C9.98525 11.7943 10.4331 12.2422 10.4334 12.7945L10.4365 20.7945C10.4367 21.3468 9.98915 21.7943 9.43686 21.7941C8.88458 21.7938 8.43669 21.3459 8.43648 20.7936L8.43336 12.7936C8.43315 12.2413 8.88069 11.7938 9.43297 11.794Z" fill="black"/>
                                                                        <path d="M14.4333 12.7963C14.4331 12.244 13.9852 11.7961 13.433 11.7958C12.8807 11.7956 12.4331 12.2431 12.4334 12.7954L12.4365 20.7954C12.4367 21.3477 12.8846 21.7956 13.4369 21.7958C13.9891 21.7961 14.4367 21.3486 14.4365 20.7963L14.4333 12.7963Z" fill="black"/>
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67611 8.13585C2.86596 7.91693 3.14154 7.79125 3.43143 7.79138L19.4314 7.79845C19.7213 7.79857 19.997 7.92449 20.187 8.14358C20.377 8.36266 20.4627 8.65335 20.4218 8.94031L18.3869 23.2223C18.1764 24.7001 16.911 25.7974 15.4181 25.7967L7.45873 25.7932C5.96579 25.7925 4.6996 24.6942 4.48789 23.2161L2.44193 8.93237C2.40082 8.64537 2.48626 8.35476 2.67611 8.13585ZM4.58521 9.7919L6.46767 22.9342C6.53824 23.4269 6.9603 23.793 7.45795 23.7932L15.4173 23.7967C15.915 23.7969 16.3367 23.4312 16.4069 22.9386L18.2792 9.79794L4.58521 9.7919Z" fill="black"/>
                                                                    </svg>
                                                                    {t('removesection')}
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        <button type="button" className="border-0 btn-plus">
                                                            <i className="fa-solid fa-plus icon-plus"></i>
                                                            <i className="fa-solid fa-minus icon-negative"></i>
                                                        </button>
                                                    </div>
                                                </button>
                                            </Accordion.Header>
                                            <Accordion.Body >
                                            <div className="my-2 p-3 py-4 border border-secondary rounded">
                                                        <div className="my-2">
                                                            <label className="label-form-choose" for="Languages">{t('Language')}</label>
                                                            <input className="input-form-choose w-95" type="text" id="Languages"/>
                                                        </div>
                                                        <div>
                                                            <div className="d-flex align-items-center">
                                                                <Form.Label>{t("level")}</Form.Label>
                                                                <Form.Range className="form-range w-75 bg-transparent mx-3" min="0" max="5" step="1"  />
                                                            </div>
                                                            <div className="d-flex  flex-row-reverse mt-3">
                                                                <button className="btn-add hvr-sweep-to-left">{t('save')}</button>
                                                                <svg className="mx-2 mt-5px" width="20" height="20" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42908 1.79313C7.42887 1.24085 7.87641 0.793328 8.42869 0.793572L14.4287 0.796221C14.981 0.796465 15.4288 1.24438 15.4291 1.79666L15.4298 3.79667L21.4298 3.79932C21.9821 3.79956 22.43 4.24748 22.4302 4.79976C22.4304 5.35205 21.9829 5.79957 21.4306 5.79932L1.43065 5.79049C0.878371 5.79025 0.430483 5.34234 0.430268 4.79005C0.430053 4.23776 0.877593 3.79024 1.42988 3.79049L7.42986 3.79314L7.42908 1.79313ZM9.42986 3.79402L13.4298 3.79579L13.4295 2.79578L9.42947 2.79402L9.42986 3.79402Z" fill="black"/>
                                                                    <path d="M9.43297 11.794C9.98525 11.7943 10.4331 12.2422 10.4334 12.7945L10.4365 20.7945C10.4367 21.3468 9.98915 21.7943 9.43686 21.7941C8.88458 21.7938 8.43669 21.3459 8.43648 20.7936L8.43336 12.7936C8.43315 12.2413 8.88069 11.7938 9.43297 11.794Z" fill="black"/>
                                                                    <path d="M14.4333 12.7963C14.4331 12.244 13.9852 11.7961 13.433 11.7958C12.8807 11.7956 12.4331 12.2431 12.4334 12.7954L12.4365 20.7954C12.4367 21.3477 12.8846 21.7956 13.4369 21.7958C13.9891 21.7961 14.4367 21.3486 14.4365 20.7963L14.4333 12.7963Z" fill="black"/>
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.67611 8.13585C2.86596 7.91693 3.14154 7.79125 3.43143 7.79138L19.4314 7.79845C19.7213 7.79857 19.997 7.92449 20.187 8.14358C20.377 8.36266 20.4627 8.65335 20.4218 8.94031L18.3869 23.2223C18.1764 24.7001 16.911 25.7974 15.4181 25.7967L7.45873 25.7932C5.96579 25.7925 4.6996 24.6942 4.48789 23.2161L2.44193 8.93237C2.40082 8.64537 2.48626 8.35476 2.67611 8.13585ZM4.58521 9.7919L6.46767 22.9342C6.53824 23.4269 6.9603 23.793 7.45795 23.7932L15.4173 23.7967C15.915 23.7969 16.3367 23.4312 16.4069 22.9386L18.2792 9.79794L4.58521 9.7919Z" fill="black"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="border border-secondary p-2 bg-white rounded">
                                                        <i className="fa-solid fa-plus"></i>
                                                        {t('addLanguages')}
                                                    </button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <div className="skillsWrap_flex mt-3">
                                        <div className="skillOne_grey">
                                            <i className="fa-solid fa-plus"></i>
                                            {t('profile')}
                                        </div>
                                        <div className="skillOne_grey">
                                            <i className="fa-solid fa-plus"></i>
                                            {t('courses')}
                                        </div>
                                        <div className="skillOne_grey">
                                            <i className="fa-solid fa-plus"></i>
                                            {t('internships')}
                                        </div>
                                        <div className="skillOne_grey">
                                            <i className="fa-solid fa-plus"></i>
                                            {t('extracurricularActivities')}
                                        </div>
                                        <div className="skillOne_grey">
                                            <i className="fa-solid fa-plus"></i>
                                            {t('references')}
                                        </div>
                                        <div className="skillOne_grey">
                                            <i className="fa-solid fa-plus"></i>
                                            {t('qualities')}
                                        </div>
                                        <div className="skillOne_grey">
                                            <i className="fa-solid fa-plus"></i>
                                            {t('certificates')}
                                        </div>
                                        <div className="skillOne_grey">
                                            <i className="fa-solid fa-plus"></i>
                                            {t('achievements')}
                                        </div>
                                        <div className="skillOne_grey">
                                            <i className="fa-solid fa-plus"></i>
                                            {t('conclusion')}
                                        </div>
                                        <div className="skillOne_grey">
                                            <i className="fa-solid fa-plus"></i>
                                            {t('customSection')}
                                        </div>
                                    </div>
                                    <a href="img/cv1.png" download className="blueMid_btn hvr-sweep-to-left mrGsRT_auto"> 
                                        <img src="img/download.svg" alt=""/> 
                                        <span>{t('download')}</span>
                                    </a>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div>
                                        <div className="cvPrev_drkTitle">{t("cover")}</div>
                                        <div className="cv_prevCard mbttom_40">
                                            <div id="summernote" className="summernotes h-25"> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
        </section>
        </>
    )
}

export default ChooseResume