import React, { createContext, useState } from "react";
import { t } from "i18next";
export const SectionsContext = createContext();
const SectionsProvider = ({ children }) => {
    const initialSection = {
        title: t("customSection"),
        elements: [],
        valueElements: [],
    };
    // const [sections, setSections] = useState([
    //     { ...initialSection },
    //     { ...initialSection },
    //     { ...initialSection },
    //     { ...initialSection },
    //     { ...initialSection },
    // ]);
    const [sections1, setSections1] = useState(initialSection)
    const [sections2, setSections2] = useState(initialSection)
    const [sections3, setSections3] = useState(initialSection)
    const [sections4, setSections4] = useState(initialSection)
    const [sections5, setSections5] = useState(initialSection)
    return (
        <SectionsContext.Provider value={
            { sections1, 
            setSections1,
            sections2, 
            setSections2,
            sections3, 
            setSections3,
            sections4, 
            setSections4,
            sections5, 
            setSections5,
            }}>
        {children}
        </SectionsContext.Provider>
    );
};
export default SectionsProvider;
