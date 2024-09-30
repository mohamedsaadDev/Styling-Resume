import { t, use } from 'i18next';
import React, { createContext, useEffect, useState } from 'react';
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initialSection = {
    title: t("customSection"),
    elements: [],
    valueElements: [],
  };
  
  const titleResume = localStorage.getItem('fileName') || 'untitledResume';
  const [fileName, setfileName] = useState(titleResume);
  const [nuberCustomSection,setnuberCustomSection] =useState(10)
  //User Info
  const [personalData, setPersonalData] = useState({
    name: "ANDREW",
    familyName: "CLARK",
    email: "https:email.com",
    phone: "+1 (555) 555-5555",
    city: "Dallas",
    state: "TX",
    year: 0,
  });
  const [education, setEducation] = useState({
  title: t("education"),
  education: "Student",
  school: "University of Texas",
  city: "Dallas",
  startDateMonth: "",
  endDateMonth: "",
  startDateYear: 0,
  endDateYear: 0,
  });
  const [employment, setEmployment] = useState({
    title: t("employment"),
    position: "Student",
    employer: "University of Texas",
    city: "Cairo",
    startDateMonth: "",
    endDateMonth: "",
    startDateYear: 0,
    endDateYear: 0,
  });
  const [skills, setSkills] = useState({
    title: t("skills"),
    skills: [{ titleSkill: "", rangeSkill: 0 }],
});
const [languages, setLanguages] = useState({
  title: t("Languages"),
  language: [{ titleLanguage: "", rangeLanguage: 0 }],
});
// Custom Section
  const [section1,setSection1] = useState(initialSection)
  const [section2,setSection2] = useState(initialSection)
  const [section3,setSection3] = useState(initialSection)
  const [section4,setSection4] = useState(initialSection)
  const [section5,setSection5] = useState(initialSection)

  useEffect(() => {
    localStorage.setItem('fileName', fileName);
  }, [fileName]);

  return (
    <Context.Provider value={
      {fileName, 
      setfileName, 
      section1,
      setSection1,
      section2,
      setSection2,
      section3,
      setSection3,
      section4,
      setSection4,
      section5,
      setSection5,
      nuberCustomSection,
      setnuberCustomSection,
      //User Info
      personalData, 
      setPersonalData,
      education, 
      setEducation,
      employment, 
      setEmployment,
      skills,
      setSkills,
      languages, 
      setLanguages
      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;