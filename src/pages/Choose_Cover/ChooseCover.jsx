import React, { useCallback, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import { t } from "i18next";
import Templets from "../../components/Templets/Templets";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import PersonalDetails from "../../components/Accordion/PersonalDetails";
import Education from "../../components/Accordion/Education";
import Employment from "../../components/Accordion/Employment";
import Skills from "../../components/Accordion/Skills";
import Languages from "../../components/Accordion/Languages";
import AccordionItem from "../../components/Accordion/AccordionItem";
import CustomSection1 from "../../components/CustomSection/CustomSection1";
import CustomSection3 from "../../components/CustomSection/CustomSection3";
import CustomSection2 from "../../components/CustomSection/CustomSection2";
import CustomSection4 from "../../components/CustomSection/CustomSection4";
import CustomSection5 from "../../components/CustomSection/CustomSection5";
import { Context } from "../../context/Context";
import { SketchPicker , ChromePicker  } from "react-color";
const ChooseCover = () => {
  const {fullData,setFullData,
    fileName, nuberCustomSection ,education,employment, skills,languages, section1,section2,section3,section4,section5, } =useContext(Context);

//   const [personalData, setPersonalData] = useState({
//     name: "ANDREW",
//     familyName: "CLARK",
//     email: "https:email.com",
//     phone: "+1 (555) 555-5555",
//     city: "Dallas",
//     state: "TX",
//     year: 0,
//   });
//   // const [education, setEducation] = useState({
//   // title: t("education"),
//   // education: "Student",
//   // school: "University of Texas",
//   // city: "Dallas",
//   // startDateMonth: "",
//   // endDateMonth: "",
//   // startDateYear: 0,
//   // endDateYear: 0,
//   // });
//   const [employment, setEmployment] = useState({
//     title: t("employment"),
//     position: "Student",
//     employer: "University of Texas",
//     city: "Cairo",
//     startDateMonth: "",
//     endDateMonth: "",
//     startDateYear: 0,
//     endDateYear: 0,
//   });
//   const [skills, setSkills] = useState({
//     title: t("skills"),
//     skills: [{ titleSkill: "", rangeSkill: 0 }],
// });
//   const [languages, setLanguages] = useState({
//     title: t("Languages"),
//     language: [{ titleLanguage: "", rangeLanguage: 0 }],
//   });

  const [color, setColor] = useState("#D55959");
  const [lineheight,setLineheight] = useState(1.5)
  const [fontSize,setFontSize] = useState('XS')
  const [fontFamily, setFontFamily] = useState('Arial');
  // const [data, setData] = useState([
  //   // {  
  //   //   title: t("education"),
  //   //   education: "Student",
  //   //   school: "University of Texas",
  //   //   city: "Dallas",
  //   //   startDateMonth: "",
  //   //   endDateMonth: "",
  //   //   startDateYear: 0,
  //   //   endDateYear: 0,
  //   // },
  //   // {
  //   //   title: t("employment"),
  //   //   position: "Student",
  //   //   employer: "University of Texas",
  //   //   city: "Cairo",
  //   //   startDateMonth: "",
  //   //   endDateMonth: "",
  //   //   startDateYear: 0,
  //   //   endDateYear: 0,
  //   // },
  //   // {
  //   //   title: t("skills"),
  //   //   skills: [{ titleSkill: "", rangeSkill: 0 }],
  //   // },
  //   // {
  //   //   title: t("Languages"),
  //   //   language: [{ titleLanguage: "", rangeLanguage: 0 }],
  //   // },
  //   education,
  //   employment, 
  //   skills,
  //   languages,
  //   section1,section2,section3,section4,section5,
  // ])

  const handleChangeLineheight =(e,numberLheight)=>{
    e.stopPropagation();
    setLineheight(numberLheight)
    
  }

  const handleChangeComplete = (newColor) => {
    setColor(newColor.hex);
  };
  const handleChangeFontSize =(fSize)=>{
    setFontSize(fSize)
  }
  const handleFamilyChangeFont = (fontName) => {
    setFontFamily(fontName);
  };
  const [isOpenColor, setIsOpenColor] = useState(false);
  const [isLineheight, setIsLineheight] = useState(false);
  const [isFontSize, setIsFontSize] =useState(false);
  const [isFontFamily, setIsFontFamily] =useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    if (isZoomed) {
      document.querySelector('body').style.overflowY = 'auto';
  } else {
      document.querySelector('body').style.overflowY = 'hidden';
  }
    setIsZoomed(!isZoomed);
    

  };
  const handlestopPropagation =(e)=>{
    e.stopPropagation();
  }
  const [dataCV, setdataCV] = useState({

    name: "ANDREW",
    Familyname: "CLARK",
    phone: "+1 (555) 555-5555",
    city: " Dallas",
    state: "TX",
    year: 0,
  });
  const years = [];
  for (let year = 1960; year <= 2020; year++) {
    years.push(year);
  }
  // const contentRef = document.querySelector('.container-templet')
  const handleDownloadPDF = useCallback(() => {
    const input = document.querySelector(".container-templet");
    html2canvas(input, { scale: 4 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      // const imgHeight = pageHeight;
      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`${fileName}.pdf`);
    });
  }, []);
  const [components, setComponents] = useState([
    Education,
    Employment,
    Skills,
    Languages,
  ]);
  const moveItem = (fromIndex, toIndex) => {
    const updatedComponents = [...components];
    const [movedComponent] = updatedComponents.splice(fromIndex, 1);
    updatedComponents.splice(toIndex, 0, movedComponent);
    setComponents(updatedComponents);
    // update data in cv 
    const copyDataGroup = fullData
    const dataGroup = copyDataGroup.splice(fromIndex, 1)[0];
    copyDataGroup.splice(toIndex, 0,dataGroup);
    setFullData(copyDataGroup)


  };
  const addCustomSection = () => {
    if (!components.some((component) => component === CustomSection1)) {
      setComponents([...components, CustomSection1]);
    } else if (!components.some((component) => component === CustomSection2)) {
      setComponents([...components, CustomSection2]);
    } else if (!components.some((component) => component === CustomSection3)) {
      setComponents([...components, CustomSection3]);
    } else if (!components.some((component) => component === CustomSection4)) {
      setComponents([...components, CustomSection4]);
    } else if (!components.some((component) => component === CustomSection5)) {
      setComponents([...components, CustomSection5]);
    } else {
      alert(t("maximumnumberofcustom"));
    }
    // if(nuberCustomSection >= components.length){
    //   alert(t('maximumnumberofcustom'))
    //   return;
    // }else{
    //   setnuberCustomSection(nuberCustomSection + 1)
    // }
  };
  const removeCustomSectionByIndex = (indexToRemove) => {
    setComponents(components.filter((_, index) => index !== indexToRemove));
  };
  console.log("addCustomSection called", dataCV);
  return (
    <>
      <section className="form_section">
        <div className="containers m-2">
          <form action="" className="cv_form">
            <div className="formOne_wrapper">
              <h3 className="side_title">{t("fillyourdata")}</h3>
              <div className="row">
                <div className="col-12 col-md-6">
                  <Accordion alwaysOpen={false}>
                    <PersonalDetails setdataCV={setdataCV} dataCV={dataCV} />
                    {components
                      .slice(0, nuberCustomSection)
                      .map((Component, index) => (
                        <AccordionItem
                          key={index}
                          index={index}
                          moveItem={moveItem}
                          component={Component}
                          setdataCV={setdataCV}
                          dataCV={dataCV}
                          removeCustomSectionByIndex={
                            removeCustomSectionByIndex
                          }
                        />
                      ))}
                    {/* <PersonalDetails setdataCV={setdataCV} dataCV={dataCV}/>
                    <Education setdataCV={setdataCV} dataCV={dataCV} />
                    <Employment setdataCV={setdataCV} dataCV={dataCV}/>
                    <Skills/>
                    <Languages/> */}
                  </Accordion>
                  <div className="skillsWrap_flex mt-3">
                    <div className="skillOne_grey">
                      <i className="fa-solid fa-plus"></i>
                      {t("profile")}
                    </div>
                    <div className="skillOne_grey">
                      <i className="fa-solid fa-plus"></i>
                      {t("courses")}
                    </div>
                    <div className="skillOne_grey">
                      <i className="fa-solid fa-plus"></i>
                      {t("internships")}
                    </div>
                    <div className="skillOne_grey">
                      <i className="fa-solid fa-plus"></i>
                      {t("extracurricularActivities")}
                    </div>
                    <div className="skillOne_grey">
                      <i className="fa-solid fa-plus"></i>
                      {t("references")}
                    </div>
                    <div className="skillOne_grey">
                      <i className="fa-solid fa-plus"></i>
                      {t("qualities")}
                    </div>
                    <div className="skillOne_grey">
                      <i className="fa-solid fa-plus"></i>
                      {t("certificates")}
                    </div>
                    <div className="skillOne_grey">
                      <i className="fa-solid fa-plus"></i>
                      {t("achievements")}
                    </div>
                    <div className="skillOne_grey">
                      <i className="fa-solid fa-plus"></i>
                      {t("conclusion")}
                    </div>
                    <button
                      onClick={addCustomSection}
                      type="button"
                      className="skillOne_grey"
                    >
                      <i className="fa-solid fa-plus"></i>
                      {t("customSection")}
                    </button>
                  </div>
                  <div onClick={(e) => handleDownloadPDF(e)} className="btn-download blueMid_btn hvr-sweep-to-left mrGsRT_auto">
                    <img src="img/download.svg" alt="" />
                    <span>{t("download")}</span>
                  </div>
                </div>
                
                <div className="col-12 col-md-6">
                  <div className={`zoom-section ${isZoomed ? 'zoomed' : ''}`}>
                    <div className="cv_prevCard mbttom_40 mx-auto">
                      <Templets lineheight={lineheight} color={color} dataCV={dataCV} />
                      <div className="container-edtor-templet">
                        <div className={isZoomed?"edtor-templet edtor-inzoom":"edtor-templet "}>
                          <button className="btn-templets">
                            <svg width="20" hanging="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon-color"><path fill="currentColor" d="M142.309-300.001q-15.365 0-25.759-10.351-10.394-10.35-10.394-25.65v-288.004q0-15.3 10.394-25.646t25.759-10.347h61.537q15.366 0 25.76 10.351Q240-639.298 240-623.998v288.004q0 15.3-10.394 25.646t-25.76 10.347zm193.685 80q-15.3 0-25.646-10.395t-10.347-25.759v-447.69q0-15.365 10.351-25.759 10.35-10.395 25.65-10.395h288.004q15.3 0 25.646 10.395t10.347 25.759v447.69q0 15.365-10.351 25.759-10.35 10.395-25.65 10.395zM360-680v400zm396.154 379.999q-15.366 0-25.76-10.351Q720-320.702 720-336.002v-288.004q0-15.3 10.394-25.646t25.76-10.347h61.537q15.365 0 25.759 10.351 10.394 10.35 10.394 25.65v288.004q0 15.3-10.394 25.646t-25.759 10.347zM360-680v400h240v-400z"></path></svg>
                          </button>
                          <div className="d-flex ">
                            <Dropdown onToggle={()=>{setIsFontFamily(!isFontFamily)}}>
                              <Dropdown.Toggle className="Dropdown-lineheight"  >
                                <svg width="20" hanging="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 960" className="icon-color"><path fill="currentColor" d="m210.386 591.898-35.082 97.987q-3.629 12.096-13.306 18.75-9.678 6.654-21.775 6.653-20.566 0-32.662-16.936-12.097-16.935-4.839-36.291l152.423-404.042q4.839-12.097 14.517-19.356 9.677-7.258 22.984-7.258h31.453q13.306 0 22.984 7.258 9.678 7.259 14.516 19.356l152.424 405.252q7.258 19.356-4.234 35.686-11.492 16.332-32.057 16.331-13.308 0-22.985-7.258-9.678-7.258-14.516-19.355l-33.872-96.777zm25.404-70.163h145.165l-70.163-200.812h-4.839zm446.382 206.86q-59.275 0-93.147-30.847t-33.872-84.075q0-50.808 39.315-82.865 39.316-32.058 101.011-32.057 27.823 0 51.413 4.234 23.589 4.233 40.525 13.911V499.96q0-32.662-22.38-52.017t-61.09-19.355q-18.145 0-34.477 5.443-16.33 5.444-29.638 15.122-10.887 8.468-24.194 9.677-13.307 1.21-24.194-7.258t-12.702-21.17 7.863-22.38q22.984-20.565 52.018-31.452t66.534-10.887q75.001 0 114.922 35.686t39.92 103.43v183.876q0 14.516-10.282 24.799t-24.799 10.282q-14.517 0-25.404-10.887t-10.887-25.404v-10.887h-3.63q-15.726 24.194-42.339 38.106-26.615 13.911-60.486 13.911m12.097-60.485q38.711 0 65.929-27.219 27.219-27.218 27.219-65.929-16.936-9.678-38.711-14.516-21.774-4.839-39.92-4.839-38.71 0-59.276 15.121-20.565 15.122-20.565 42.945 0 24.194 18.146 39.315 18.145 15.122 47.178 15.122"></path></svg>
                                {isFontFamily ? (
                                  <i className="fa-solid fa-chevron-down icon-arrow-down"></i>
                                ) : (
                                  <i className="fa-solid fa-chevron-up icon-arrow-top"></i>
                                )}
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="DropdownMenu-lineheight text-center">
                                <p className="p-0 m-0">{t('fontsize')}</p>
                                <Dropdown.Item draggable="false" className="Dropdownitem-fontfamily" onClick={() => handleFamilyChangeFont('font-arial')}>Arial</Dropdown.Item>  
                                <Dropdown.Item  draggable="false"  className="Dropdownitem-fontfamily"  onClick={() => handleFamilyChangeFont('font-calibri')}  >  Calibri  </Dropdown.Item>
                                <Dropdown.Item  draggable="false"  className="Dropdownitem-fontfamily"  onClick={() => handleFamilyChangeFont('font-courier-new')}>  Courier New</Dropdown.Item>
                                <Dropdown.Item  draggable="false"  className="Dropdownitem-fontfamily"  onClick={() => handleFamilyChangeFont('font-dejavu-sans')}>  DejaVu Sans</Dropdown.Item>

                                <Dropdown.Item
                                  draggable="false"
                                  className="Dropdownitem-fontfamily"
                                  onClick={() => handleFamilyChangeFont('font-garamond')}
                                >
                                  Garamond
                                </Dropdown.Item>

                                <Dropdown.Item
                                  draggable="false"
                                  className="Dropdownitem-fontfamily"
                                  onClick={() => handleFamilyChangeFont('font-georgia')}
                                >
                                  Georgia
                                </Dropdown.Item>

                                <Dropdown.Item
                                  draggable="false"
                                  className="Dropdownitem-fontfamily"
                                  onClick={() => handleFamilyChangeFont('font-helvetica')}
                                >
                                  Helvetica
                                </Dropdown.Item>

                                <Dropdown.Item
                                  draggable="false"
                                  className="Dropdownitem-fontfamily"
                                  onClick={() => handleFamilyChangeFont('font-lato')}
                                >
                                  Lato
                                </Dropdown.Item>

                                <Dropdown.Item
                                  draggable="false"
                                  className="Dropdownitem-fontfamily"
                                  onClick={() => handleFamilyChangeFont('font-noto-sans')}
                                >
                                  Noto Sans
                                </Dropdown.Item>

                                <Dropdown.Item
                                  draggable="false"
                                  className="Dropdownitem-fontfamily"
                                  onClick={() => handleFamilyChangeFont('font-noto-serif')}
                                >
                                  Noto Serif
                                </Dropdown.Item>

                                <Dropdown.Item
                                  draggable="false"
                                  className="Dropdownitem-fontfamily"
                                  onClick={() => handleFamilyChangeFont('font-poppins')}
                                >
                                  Poppins
                                </Dropdown.Item>

                                <Dropdown.Item
                                  draggable="false"
                                  className="Dropdownitem-fontfamily"
                                  onClick={() => handleFamilyChangeFont('font-times-new-roman')}
                                >
                                  Times New Roman
                                </Dropdown.Item>

                                <Dropdown.Item
                                  draggable="false"
                                  className="Dropdownitem-fontfamily"
                                  onClick={() => handleFamilyChangeFont('font-trebuchet')}
                                >
                                  Trebuchet
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown onToggle={()=>{setIsFontSize(!isFontSize)}}>
                              <Dropdown.Toggle className="Dropdown-lineheight"  >
                              <svg width="20" hanging="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="icon-lineheight"><path fill="currentColor" d="M576.54-695.001H420.385q-17.628 0-29.967-12.353-12.34-12.352-12.34-29.999t12.34-30.146q12.339-12.5 29.967-12.5h397.307q17.628 0 29.967 12.353 12.34 12.353 12.34 29.999t-12.34 30.146-29.967 12.5H661.537v472.693q0 17.628-12.352 29.967-12.353 12.34-30 12.34t-30.146-12.452-12.499-30.24zM219.232-496.924h-76.924q-17.628 0-29.967-12.353-12.34-12.352-12.34-29.999t12.34-30.146q12.339-12.5 29.967-12.5h238.461q17.628 0 29.967 12.353 12.34 12.352 12.34 29.999t-12.34 30.146q-12.339 12.5-29.967 12.5h-76.924v274.616q0 17.628-12.353 29.967-12.352 12.34-29.999 12.34t-29.954-12.34q-12.307-12.339-12.307-29.967z"></path></svg>
                                {isFontSize ? (
                                  <i className="fa-solid fa-chevron-down icon-arrow-down"></i>
                                ) : (
                                  <i className="fa-solid fa-chevron-up icon-arrow-top"></i>
                                )}
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="DropdownMenu-lineheight text-center">
                                <p className="p-0 m-0">{t('fontsize')}</p>
                                <Dropdown.Item draggable="false" onClick={(e)=>{handleChangeFontSize('XS')}} className="Dropdownitem-lineheight">XS</Dropdown.Item>
                                <Dropdown.Item draggable="false" onClick={(e)=>{handleChangeFontSize('S')}} className="Dropdownitem-lineheight">S</Dropdown.Item>
                                <Dropdown.Item draggable="false" onClick={(e)=>{handleChangeFontSize('M')}} className="Dropdownitem-lineheight">M</Dropdown.Item>
                                <Dropdown.Item draggable="false" onClick={(e)=>{handleChangeFontSize('L')}} className="Dropdownitem-lineheight">L</Dropdown.Item>
                                <Dropdown.Item draggable="false" onClick={(e)=>{handleChangeFontSize('XL')}} className="Dropdownitem-lineheight">XL</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown onToggle={()=>{setIsLineheight(!isLineheight)}}>
                              <Dropdown.Toggle className="Dropdown-lineheight"  >
                              <svg width="25" hanging="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="icon-lineheight"><path fill="currentColor" d="m216.155-664.463-52.924 52.309q-8.308 8.308-20.577 8.5t-21.66-9.199q-8.608-8.608-8.608-20.993t8.692-21.076l99.636-99.636q5.748-5.748 12.03-8.056t13.462-2.308 13.41 2.308 11.979 8.056l99.636 99.636q8.307 8.307 8.807 20.576t-8.891 21.66q-8.608 8.609-20.685 8.917t-21.384-8.385l-52.924-52.309v368.926l52.924-52.309q8.307-8.308 20.576-8.5t21.66 9.199q8.609 8.608 8.609 20.993t-8.692 21.076l-99.636 99.636q-5.749 5.748-12.031 8.056t-13.461 2.308-13.41-2.308-11.979-8.056l-99.636-99.636q-8.308-8.307-8.808-20.576t8.891-21.66q8.609-8.609 20.686-8.917t21.384 8.385l52.924 52.309zm301.152 444.462q-12.384 0-20.999-8.629t-8.615-21.384q0-12.756 8.625-21.371T517.692-280h310.384q13.567 0 22.745 9.172t9.178 22.73q0 13.559-9.577 22.943t-23.115 9.385zm.385-230q-12.75 0-21.374-8.628-8.625-8.629-8.625-21.384t8.625-21.371 21.374-8.615h312.307q12.75 0 21.375 8.628t8.625 21.384-8.625 21.371-21.375 8.615zm0-229.999q-12.75 0-21.374-8.735-8.625-8.736-8.625-21.649 0-12.586 8.514-21.1t21.1-8.515l310.384-4.231q13.731 0 23.019 9.172 9.289 9.172 9.289 22.731 0 13.558-9.289 22.943Q841.422-680 827.691-680z"></path></svg>
                                {isLineheight ? (
                                  <i className="fa-solid fa-chevron-down icon-arrow-down"></i>
                                ) : (
                                  <i className="fa-solid fa-chevron-up icon-arrow-top"></i>
                                )}
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="DropdownMenu-lineheight text-center">
                                <p className="p-0 m-0">{t('lineheight')}</p>
                                <Dropdown.Item draggable="false" onClick={(e)=>{handleChangeLineheight(e,1)}}  className="Dropdownitem-lineheight">1</Dropdown.Item>
                                <Dropdown.Item draggable="false" onClick={(e)=>{handleChangeLineheight(e,1.15)}}  className="Dropdownitem-lineheight">1.15</Dropdown.Item>
                                <Dropdown.Item draggable="false" onClick={(e)=>{handleChangeLineheight(e,1.25)}}  className="Dropdownitem-lineheight">1.25</Dropdown.Item>
                                <Dropdown.Item draggable="false" onClick={(e)=>{handleChangeLineheight(e,1.5)}}  className="Dropdownitem-lineheight">1.5</Dropdown.Item>
                                <Dropdown.Item draggable="false" onClick={(e)=>{handleChangeLineheight(e,2)}}  className="Dropdownitem-lineheight">2</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown onToggle={()=>{setIsOpenColor(!isOpenColor)}}>
                              <Dropdown.Toggle className="Dropdown-icon-color" id="dropdown-basic" >
                              <i class="fa-solid fa-fill-drip icon-color"></i>
                                {isOpenColor ? (
                                  <i className="fa-solid fa-chevron-down icon-arrow-down"></i>
                                ) : (
                                  <i className="fa-solid fa-chevron-up icon-arrow-top"></i>
                                )}
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="DropdownMenu-color">
                                <Dropdown.Item draggable="false" onClick={(e) => e.stopPropagation()}  className="Dropdownitem-color">
                                  <ChromePicker onMouseDown={(e) => e.preventDefault()} color={color} onChangeComplete={handleChangeComplete} />
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <button className="btn-zoom" type="button" onClick={handleZoom}>
                            {isZoomed ? 
                            <svg className="icon-color" width="24" hanging="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path fill="currentColor" d="M300.001-257.849 187.077-144.924q-8.307 8.307-20.884 8.5t-21.269-8.5q-8.692-8.692-8.692-21.077 0-12.384 8.692-21.076l112.925-112.924h-87.848q-12.75 0-21.375-8.629t-8.625-21.384 8.625-21.371T170.001-360h153.845q15.366 0 25.76 10.394T360-323.846v153.845q0 12.75-8.629 21.375t-21.384 8.625-21.37-8.625-8.616-21.375zm359.998 0v87.848q0 12.75-8.629 21.375t-21.384 8.625-21.371-8.625T600-170.001v-153.845q0-15.366 10.394-25.76T636.154-360h153.845q12.75 0 21.375 8.629t8.625 21.384-8.625 21.37-21.375 8.616h-87.848l112.925 112.924q8.307 8.307 8.5 20.884t-8.5 21.269-21.077 8.692-21.076-8.692zm-402.15-402.15L144.924-772.923q-8.307-8.307-8.5-20.884t8.5-21.269q8.692-8.692 21.077-8.692 12.384 0 21.076 8.692l112.924 112.925v-87.848q0-12.75 8.629-21.375t21.384-8.625 21.371 8.625T360-789.999v153.845q0 15.366-10.394 25.76T323.846-600H170.001q-12.75 0-21.375-8.629t-8.625-21.384 8.625-21.37 21.375-8.616zm444.302 0h87.848q12.75 0 21.375 8.629t8.625 21.384-8.625 21.371T789.999-600H636.154q-15.366 0-25.76-10.394T600-636.154v-153.845q0-12.75 8.629-21.375t21.384-8.625 21.37 8.625 8.616 21.375v87.848l112.924-112.925q8.307-8.307 20.884-8.5t21.269 8.5 8.692 21.077-8.692 21.076z"></path></svg>
                            : 
                            <svg className="icon-color" width="24" hanging="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path fill="currentColor" d="M242.153-200h87.848q12.749 0 21.374 8.629T360-169.987t-8.625 21.37q-8.625 8.616-21.374 8.616H176.155q-15.365 0-25.759-10.395t-10.395-25.759v-153.846q0-12.749 8.629-21.374T170.014-360t21.371 8.625T200-330.001v87.848l112.924-112.924q8.308-8.308 20.884-8.5t21.269 8.5 8.692 21.076-8.692 21.077zm475.694 0L604.923-312.924q-8.308-8.308-8.5-20.884t8.5-21.269 21.076-8.692 21.077 8.692L760-242.153v-87.848q0-12.749 8.629-21.374T790.013-360t21.37 8.625 8.616 21.374v153.846q0 15.365-10.395 25.759t-25.759 10.395H629.999q-12.749 0-21.374-8.629T600-170.014t8.625-21.371T629.999-200zM200-717.847v87.848q0 12.749-8.629 21.374T169.987-600t-21.37-8.625q-8.616-8.625-8.616-21.374v-153.846q0-15.365 10.395-25.759t25.759-10.395h153.846q12.749 0 21.374 8.629T360-789.986t-8.625 21.371T330.001-760h-87.848l112.924 112.924q8.308 8.308 8.5 20.884t-8.5 21.269-21.076 8.692-21.077-8.692zm560 0L647.076-604.923q-8.308 8.308-20.884 8.5t-21.269-8.5-8.692-21.076 8.692-21.077L717.847-760h-87.848q-12.749 0-21.374-8.629T600-790.013t8.625-21.37 21.374-8.616h153.846q15.365 0 25.759 10.395t10.395 25.759v153.846q0 12.749-8.629 21.374T789.986-600t-21.371-8.625T760-629.999z"></path></svg>}
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <button type="button" onClick={handleZoom}>
                    {isZoomed ? 'Reset Zoom' : 'Zoom In'}
                  </button> */}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ChooseCover;
// Download the latest iOS or Android app to try advanced voice mode
// Get more natural, real-time conversations with advanced voice. Senses and responds to humor, sarcasm, interruptions, and more.