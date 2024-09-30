import React from "react";
import { useTranslation } from "react-i18next";
const Translate = ({ children }) => {
    const { t } = useTranslation();
    React.useEffect(() => {
        document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (key) {
            element.textContent = t(key);
        }
        });
    });
    return children;
    };

export default Translate;
