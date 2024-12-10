import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import { t } from "i18next";
import { Context } from "../../context/Context";
const Employment = () => {
  const {fullData , setFullData} = useContext(Context);
  const employment = fullData.find((item) => item.id === 'employment');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFullData((prevData) =>
      prevData.map((item) =>
        item.id === 'employment'
          ? { ...item, [name]: value }
          : item
      )
    );
  };
  const years = [];
  for (let year = 1960; year <= 2020; year++) {
    years.push(year);
  }
  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header className="btn-choose constainer-header-accordion">
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 17C16.3284 17 17 17.6716 17 18.5C17 19.3284 16.3284 20 15.5 20C14.6716 20 14 19.3284 14 18.5C14 17.6716 14.6716 17 15.5 17ZM8.5 17C9.32843 17 10 17.6716 10 18.5C10 19.3284 9.32843 20 8.5 20C7.67157 20 7 19.3284 7 18.5C7 17.6716 7.67157 17 8.5 17ZM15.5 10C16.3284 10 17 10.6716 17 11.5C17 12.3284 16.3284 13 15.5 13C14.6716 13 14 12.3284 14 11.5C14 10.6716 14.6716 10 15.5 10ZM8.5 10C9.32843 10 10 10.6716 10 11.5C10 12.3284 9.32843 13 8.5 13C7.67157 13 7 12.3284 7 11.5C7 10.6716 7.67157 10 8.5 10ZM15.5 3C16.3284 3 17 3.67157 17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3ZM8.5 3C9.32843 3 10 3.67157 10 4.5C10 5.32843 9.32843 6 8.5 6C7.67157 6 7 5.32843 7 4.5C7 3.67157 7.67157 3 8.5 3Z" fill="#212121"/>
      </svg>
        <button
          className="w-100 d-flex justify-content-between align-items-center"
          type="button"
        >
          <input className="border-0 " type="text" 
          // onChange={(e)=>{setEmployment({...employment,title:e.target.value})}} 
          onChange={handleInputChange}
          name="title" 
          value={employment.title}/>
          {/* <span>{t("employment")}</span> */}
          <div className="d-flex align-items-center">
            <Dropdown onClick={(e) => e.stopPropagation()}>
              <Dropdown.Toggle
                className="text-dark border-0 bg-transparent"
                id="dropdown-basic"
              >
                <i className="fa-solid fa-ellipsis-vertical icon-plus btn-seting"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  className="text-dark bg-transparent"
                  href="#/action-1"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1716 3H5C3.89543 3 3 3.89543 3 5V11.1716C3 11.702 3.21071 12.2107 3.58579 12.5858L10.8787 19.8787C12.0503 21.0503 13.9497 21.0503 15.1213 19.8787L19.8787 15.1213C21.0503 13.9497 21.0503 12.0503 19.8787 10.8787L12.5858 3.58579C12.2107 3.21071 11.702 3 11.1716 3Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle cx="7.5" cy="7.5" r="1.5" fill="#000000" />
                  </svg>
                  {/* {t('renamesection')} */}
                  <span className="text-dark">{t("renamesection")}</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 23 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.42908 1.79313C7.42887 1.24085 7.87641 0.793328 8.42869 0.793572L14.4287 0.796221C14.981 0.796465 15.4288 1.24438 15.4291 1.79666L15.4298 3.79667L21.4298 3.79932C21.9821 3.79956 22.43 4.24748 22.4302 4.79976C22.4304 5.35205 21.9829 5.79957 21.4306 5.79932L1.43065 5.79049C0.878371 5.79025 0.430483 5.34234 0.430268 4.79005C0.430053 4.23776 0.877593 3.79024 1.42988 3.79049L7.42986 3.79314L7.42908 1.79313ZM9.42986 3.79402L13.4298 3.79579L13.4295 2.79578L9.42947 2.79402L9.42986 3.79402Z"
                      fill="black"
                    />
                    <path
                      d="M9.43297 11.794C9.98525 11.7943 10.4331 12.2422 10.4334 12.7945L10.4365 20.7945C10.4367 21.3468 9.98915 21.7943 9.43686 21.7941C8.88458 21.7938 8.43669 21.3459 8.43648 20.7936L8.43336 12.7936C8.43315 12.2413 8.88069 11.7938 9.43297 11.794Z"
                      fill="black"
                    />
                    <path
                      d="M14.4333 12.7963C14.4331 12.244 13.9852 11.7961 13.433 11.7958C12.8807 11.7956 12.4331 12.2431 12.4334 12.7954L12.4365 20.7954C12.4367 21.3477 12.8846 21.7956 13.4369 21.7958C13.9891 21.7961 14.4367 21.3486 14.4365 20.7963L14.4333 12.7963Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.67611 8.13585C2.86596 7.91693 3.14154 7.79125 3.43143 7.79138L19.4314 7.79845C19.7213 7.79857 19.997 7.92449 20.187 8.14358C20.377 8.36266 20.4627 8.65335 20.4218 8.94031L18.3869 23.2223C18.1764 24.7001 16.911 25.7974 15.4181 25.7967L7.45873 25.7932C5.96579 25.7925 4.6996 24.6942 4.48789 23.2161L2.44193 8.93237C2.40082 8.64537 2.48626 8.35476 2.67611 8.13585ZM4.58521 9.7919L6.46767 22.9342C6.53824 23.4269 6.9603 23.793 7.45795 23.7932L15.4173 23.7967C15.915 23.7969 16.3367 23.4312 16.4069 22.9386L18.2792 9.79794L4.58521 9.7919Z"
                      fill="black"
                    />
                  </svg>
                  {t("removesection")}
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
      <Accordion.Body className="cursor-pointer">
        <div className="my-2 p-3 py-4 border border-secondary rounded">
          <div className="my-2">
            <label className="label-form-choose" for="position">
              {t("position")}
            </label>
            <input
              // onChange={(e)=>{
              //   setEmployment(
              //     {...employment,position : e.target.value }
              //   );
              // }} 
              onChange={handleInputChange}
              name="position"
              value={employment.position}
              className="input-form-choose w-100"
              type="text"
              id="position"
            />
          </div>
          <div className="d-flex">
            <div className="my-2">
              <label className="label-form-choose" for="employer">
                {t("employer")}
              </label>
              <input
                // onChange={(e)=>{
                //   setEmployment(
                //     {...employment,employer : e.target.value }
                //   );
                // }} 
                onChange={handleInputChange}
                name="employer"
                value={employment.employer}
                className="input-form-choose w-95"
                type="text"
                id="employer"
              />
            </div>
            <div className="my-2">
              <label className="label-form-choose" for="city">
                {t("city")}
              </label>
              <input 
                // onChange={(e)=>{
                //   setEmployment(
                //     {...employment,city : e.target.value }
                //   );
                // }} 
                onChange={handleInputChange}
                name="city"
                value={employment.city}
                className="input-form-choose w-95"
                type="text" 
                id="city" />
            </div>
          </div>
          <div className="d-flex">
            <div className="my-2 w-50">
              <p>{t("startdate")}</p>
              <select
              // onChange={(e)=>{
              //   setEmployment(
              //     {...employment, startDateMonth: e.target.value }
              //   );
              // }}
              onChange={handleInputChange}
              name="startDateMonth"
              className="select-form-choose mr-2"  id="">
                <option selected>{t("Month")}</option>
                <option value="1">{t("January")}</option>
                <option value="2">{t("February")}</option>
                <option value="3">{t("March")}</option>
                <option value="4">{t("April")}</option>
                <option value="5">{t("May")}</option>
                <option value="6">{t("June")}</option>
                <option value="7">{t("July")}</option>
                <option value="8">{t("August")}</option>
                <option value="9">{t("September")}</option>
                <option value="10">{t("October")}</option>
                <option value="11">{t("November")}</option>
                <option value="12">{t("December")}</option>
              </select>
              <select 
              // onChange={(e) => {
              //   setEmployment({
              //     ...employment,
              //     startDateYear: e.target.value
              //   });
              // }}
              onChange={handleInputChange}
              name="startDateYear"
              className="select-form-choose selectYear" >
                <option value="">{t("year")}</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-2">
              <p>{t("enddate")}</p>
              <select
                // onChange={(e)=>{
                //   setEmployment(
                //     {...employment, endDateMonth: e.target.value }
                //   );
                // }}
                onChange={handleInputChange}
                name="endDateMonth"
                className="select-form-choose mr-2" id="">
                <option selected>{t("Month")}</option>
                <option value="1">{t("January")}</option>
                <option value="2">{t("February")}</option>
                <option value="3">{t("March")}</option>
                <option value="4">{t("April")}</option>
                <option value="5">{t("May")}</option>
                <option value="6">{t("June")}</option>
                <option value="7">{t("July")}</option>
                <option value="8">{t("August")}</option>
                <option value="9">{t("September")}</option>
                <option value="10">{t("October")}</option>
                <option value="11">{t("November")}</option>
                <option value="12">{t("December")}</option>
              </select>
              <select 
              // onChange={(e)=>{
              //   setEmployment(
              //     {...employment, endDateYear: e.target.value }
              //   );
              // }} 
              onChange={handleInputChange}
              name="endDateYear"
              className="select-form-choose selectYear" >
                <option >{t("year")}</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <p className="my-2">{t("description")}</p>
            <div className="summernote-Description">
              <div className="summernote"></div>
            </div>
          </div>
          <div className="d-flex  flex-row-reverse mt-3">
            <button className="btn-add hvr-sweep-to-left">{t("save")}</button>
            <svg
              className="mx-2 mt-5px"
              width="20"
              height="20"
              viewBox="0 0 23 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.42908 1.79313C7.42887 1.24085 7.87641 0.793328 8.42869 0.793572L14.4287 0.796221C14.981 0.796465 15.4288 1.24438 15.4291 1.79666L15.4298 3.79667L21.4298 3.79932C21.9821 3.79956 22.43 4.24748 22.4302 4.79976C22.4304 5.35205 21.9829 5.79957 21.4306 5.79932L1.43065 5.79049C0.878371 5.79025 0.430483 5.34234 0.430268 4.79005C0.430053 4.23776 0.877593 3.79024 1.42988 3.79049L7.42986 3.79314L7.42908 1.79313ZM9.42986 3.79402L13.4298 3.79579L13.4295 2.79578L9.42947 2.79402L9.42986 3.79402Z"
                fill="black"
              />
              <path
                d="M9.43297 11.794C9.98525 11.7943 10.4331 12.2422 10.4334 12.7945L10.4365 20.7945C10.4367 21.3468 9.98915 21.7943 9.43686 21.7941C8.88458 21.7938 8.43669 21.3459 8.43648 20.7936L8.43336 12.7936C8.43315 12.2413 8.88069 11.7938 9.43297 11.794Z"
                fill="black"
              />
              <path
                d="M14.4333 12.7963C14.4331 12.244 13.9852 11.7961 13.433 11.7958C12.8807 11.7956 12.4331 12.2431 12.4334 12.7954L12.4365 20.7954C12.4367 21.3477 12.8846 21.7956 13.4369 21.7958C13.9891 21.7961 14.4367 21.3486 14.4365 20.7963L14.4333 12.7963Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.67611 8.13585C2.86596 7.91693 3.14154 7.79125 3.43143 7.79138L19.4314 7.79845C19.7213 7.79857 19.997 7.92449 20.187 8.14358C20.377 8.36266 20.4627 8.65335 20.4218 8.94031L18.3869 23.2223C18.1764 24.7001 16.911 25.7974 15.4181 25.7967L7.45873 25.7932C5.96579 25.7925 4.6996 24.6942 4.48789 23.2161L2.44193 8.93237C2.40082 8.64537 2.48626 8.35476 2.67611 8.13585ZM4.58521 9.7919L6.46767 22.9342C6.53824 23.4269 6.9603 23.793 7.45795 23.7932L15.4173 23.7967C15.915 23.7969 16.3367 23.4312 16.4069 22.9386L18.2792 9.79794L4.58521 9.7919Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <button className="border border-secondary p-2 bg-white rounded">
          <i className="fa-solid fa-plus"></i>
          <span>{t("addEmployment")}</span>
        </button>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Employment;
