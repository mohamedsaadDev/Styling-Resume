import { t, use } from 'i18next';
import React, { createContext, useEffect, useState } from 'react';
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initialSection = {
    title: t("customSection"),
    elements: [],
    valueElements: [],
  };
  const [fullData,setFullData]= useState( [
        {
          id:'education',
          title: t("education"),
          education: "Student",
          school: "University of Texas",
          city: "Dallas",
          startDateMonth: "",
          endDateMonth: "",
          startDateYear: '',
          endDateYear: '',
        },
        {
          id:'employment',
          title: t("employment"),
          position: "Student",
          employer: "University of Texas",
          city: "Cairo",
          startDateMonth: "",
          endDateMonth: "",
          startDateYear: '',
          endDateYear: '',
        },
        {
          id:'skills',
          title: t("skills"),
          skills: [{ titleSkill: "", rangeSkill: 0 }],
        },
        {
          id:'languages',
          title: t("Languages"),
          language: [{ titleLanguage: "", rangeLanguage: 0 }],
        },
        {
          id:'section1',
          title: t("customSection"),
          elements: [],
          valueElements: [],
        },
        {
          id:'section2',
          title: t("customSection"),
          elements: [],
          valueElements: [],
        },
        {
          id:'section3',
          title: t("customSection"),
          elements: [],
          valueElements: [],
        },
        {
          id:'section4',
          title: t("customSection"),
          elements: [],
          valueElements: [],
        },
        {
          id:'section5',
          title: t("customSection"),
          elements: [],
          valueElements: [],
        },
  ])
  const [nameSection,setNameSection] =useState(['PersonalDetails','education','employment','skills','Languages'])
//   const fullData = {
//   personalData:{
//     name: "ANDREW",
//     familyName: "CLARK",
//     email: "https:email.com",
//     phone: "+1 (555) 555-5555",
//     city: "Dallas",
//     state: "TX",
//     year: 0,
//   },
//   education:{
//     title: t("education"),
//     education: "Student",
//     school: "University of Texas",
//     city: "Dallas",
//     startDateMonth: "",
//     endDateMonth: "",
//     startDateYear: '',
//     endDateYear: '',
//   },
//   employment:{
//     title: t("employment"),
//     position: "Student",
//     employer: "University of Texas",
//     city: "Cairo",
//     startDateMonth: "",
//     endDateMonth: "",
//     startDateYear: '',
//     endDateYear: '',
//   },
//   skills:{
//     title: t("skills"),
//     skills: [{ titleSkill: "", rangeSkill: 0 }],
//   },
//   languages:{
//     title: t("Languages"),
//     language: [{ titleLanguage: "", rangeLanguage: 0 }],
//   }
// }

  const titleResume = localStorage.getItem('fileName') || 'untitledResume';
  const [fileName, setfileName] = useState(titleResume);
  const [nuberCustomSection,setnuberCustomSection] =useState(10)
  //User Info importint
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
  startDateYear: 1995,
  endDateYear: 2000,
  });
  const [employment, setEmployment] = useState({
    title: t("employment"),
    position: "Student",
    employer: "University of Texas",
    city: "Cairo",
    startDateMonth: "",
    endDateMonth: "",
    startDateYear: '',
    endDateYear: '',
  });
//   const [skills, setSkills] = useState({
//     title: t("skills"),
//     skills: [{ titleSkill: "", rangeSkill: 0 }],
// });
  const [languages, setLanguages] = useState({
    title: t("Languages"),
    language: [{ titleLanguage: "", rangeLanguage: 0 }],
  });

  const [section1,setSection1] = useState(initialSection)
  const [section2,setSection2] = useState(initialSection)
  const [section3,setSection3] = useState(initialSection)
  const [section4,setSection4] = useState(initialSection)
  const [section5,setSection5] = useState(initialSection)

  useEffect(() => {
    localStorage.setItem('fileName', fileName);
  }, [fileName]);
  const [order, setOrder] = useState([
    "education",
    "employment", 
    "skills",
    "languages", 
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
  ]);
  const [data,setData]=useState([
    education,
    employment, 
    // skills,
    languages, 
    section1,
    section2,
    section3,
    section4,
    section5,])
    
    // useState(()=>{
    //   setData(data);
    // },[data,education,
    //   employment, 
    //   skills,
    //   languages, 
    //   section1,
    //   section2,
    //   section3,
    //   section4,
    //   section5])
    
    // useEffect(() => {
    //   const updatedData = order.map((item) => {
    //     switch (item) {
    //       case "education":
    //         return education;
    //       case "employment":
    //         return employment;
    //       case "skills":
    //         return skills;
    //       case "languages":
    //         return languages;
    //       case "section1":
    //         return section1;
    //       case "section2":
    //         return section2;
    //       case "section3":
    //         return section3;
    //       case "section4":
    //         return section4;
    //       case "section5":
    //         return section5;
    //       default:
    //         return null;
    //     }
    //   });
    //   setData(updatedData);
    // }, [education, employment, skills, languages, section1, section2, section3, section4, section5, order]);


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
      // skills,
      // setSkills,
      languages, 
      setLanguages,
      data,
      setData,
      fullData,
      setFullData

      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;