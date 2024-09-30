import React, { createContext, useState } from "react";
import { t } from "i18next";
export const UserInfoContext = createContext();
const UserInfoContextProvider = ({ children }) => {
  return (
    <UserInfoContext.Provider
      value={{
        personalData,
        setPersonalData,
        education,
        setEducation,
        employment,
        setEmployment,
        skills,
        setSkills,
        languages,
        setLanguages,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContext;
