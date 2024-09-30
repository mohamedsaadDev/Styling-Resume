import React, { useCallback, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
// import Dropdown from "react-bootstrap/Dropdown";
// import Form from "react-bootstrap/Form";
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
import {Context} from "../../context/Context"
const ChooseCover = () => {
  const {fileName,nuberCustomSection,setnuberCustomSection} = useContext(Context);
  const [personalData,setpersonalData] = useState({
      name: "ANDREW",
      Familyname: "CLARK",
      phone: "+1 (555) 555-5555",
      city: " Dallas",
      state: "TX",
      year: 0,
    })

    
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
  const [components, setComponents] = useState(
    [Education,Employment,Skills,Languages]
  )
  const moveItem = (fromIndex, toIndex) => {
    const updatedComponents = [...components];
    const [movedComponent] = updatedComponents.splice(fromIndex, 1);
    updatedComponents.splice(toIndex, 0, movedComponent);
    setComponents(updatedComponents);
  };
  const addCustomSection = () => {
    if (!components.some(component => component === CustomSection1)) {
      setComponents([...components, CustomSection1]);
    } else if (!components.some(component => component === CustomSection2)) {
      setComponents([...components, CustomSection2]);
    } else if (!components.some(component => component === CustomSection3)) {
      setComponents([...components, CustomSection3]);
    } else if (!components.some(component => component === CustomSection4)) {
      setComponents([...components, CustomSection4]);
    } else if (!components.some(component => component === CustomSection5)) {
      setComponents([...components, CustomSection5]);
    } else {
      alert(t('maximumnumberofcustom'))
    }
    // if(nuberCustomSection >= components.length){
    //   alert(t('maximumnumberofcustom'))
    //   return;
    // }else{
    //   setnuberCustomSection(nuberCustomSection + 1)
    // }
  }
  const removeCustomSectionByIndex = (indexToRemove) => {
    setComponents(components.filter((_, index) => index !== indexToRemove));
  };
  console.log('addCustomSection called',dataCV);
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
                  <PersonalDetails setdataCV={setdataCV} dataCV={dataCV}/>
                    {
                      components.slice(0,nuberCustomSection).map((Component, index) => (
                        <AccordionItem
                          key={index}
                          index={index}
                          moveItem={moveItem}
                          component={Component}
                          setdataCV={setdataCV} 
                          dataCV={dataCV}
                          removeCustomSectionByIndex={removeCustomSectionByIndex}
                          
                        />
                      ))
                    }
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
                    <button onClick={addCustomSection} type="button" className="skillOne_grey">
                      <i className="fa-solid fa-plus"></i>
                      {t("customSection")}
                    </button>
                  </div>
                  <div
                    onClick={(e) => handleDownloadPDF(e)}
                    className="btn-download blueMid_btn hvr-sweep-to-left mrGsRT_auto"
                  >
                    <img src="img/download.svg" alt="" />
                    <span>{t("download")}</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div>
                    {/* <div className="cvPrev_drkTitle">{t("cover")}</div> */}
                    <div className="cv_prevCard mbttom_40">
                      <Templets dataCV={dataCV} />
                      {/* <div id="summernote" className="summernotes h-25"> </div> */}
                    </div>
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
