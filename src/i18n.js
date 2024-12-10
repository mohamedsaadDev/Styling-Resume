import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from "./lang/en.json"
import ar from "./lang/ar.json"
const resources = {
    en: { translation: en
    },
    ar: { translation: ar
    }
};
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
    }
    });
export default i18n;



/* Add custom Js code below */ 
//const dummyElement = document.querySelector('[item-id="726753193"]');
//id="product-726753193"
document.addEventListener('DOMContentLoaded', function () {
    let subscriptionPeriod = 'اسبوعي';
    let numberOfMeals = '5';

    const dummyElement = document.querySelector('#product-726753193');
    const newDiv = document.createElement("div");
    newDiv.classList.add("Fake-product-content");

    const templateSubscription = `
    <div class="bg-app w-full flex justify-center">
        <div class="wrapper-subscription p-4 flex">
            <div class="title-box">
                <h1>قم بإنشاء البوكس الخاص بك</h1>
            </div>
            <div class="container-box">
                <div>
                    <div class="container-subscription">
                        <p>مدة الاشتراك</p>
                        <div>
                            <p class="w-full" subscription="يومي">يوم واحد</p>
                            <p class="w-full active" subscription="اسبوعي">اسبوعي</p>
                            <p class="w-full hidden" subscription="شهري">شهري</p>
                        </div>
                    </div>
                    <div class="container-numberofmeals">
                        <p>عدد الوجبات</p>
                        <div class="meal-day hide">
                            <p number-meal="1">1</p>
                            <p number-meal="2">2</p>
                            <p class="active" number-meal="3">3</p>
                        </div>
                        <div class="meal-week">
                            <p number-meal="3">3</p>
                            <p number-meal="4">4</p>
                            <p class="active" number-meal="5">5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    newDiv.innerHTML = templateSubscription;
    if (dummyElement) {
        dummyElement.insertAdjacentElement("afterbegin", newDiv);
    }

    // استخدام setTimeout للتأكد من تحميل العناصر المطلوبة
    setTimeout(function () {
        const btn = document.querySelector('salla-add-product-button[product-id="726753193"] div salla-button button span');
        const mealDay = document.querySelector('.meal-day');
        const mealWeek = document.querySelector('.meal-week');
        const textarea = document.getElementById("options[185250491]");

        if (btn) {
            btn.innerHTML = 'اختار الوصفات';
            console.log('تم تحديث نص الزر:', btn.innerHTML);
        } else {
            console.warn('لم يتم العثور على عنصر الزر المحدد.');
        }

        function updateTextarea() {
            if (textarea) {
                textarea.value = `مدة الاشتراك: ${subscriptionPeriod} عدد الوجبات: ${numberOfMeals}`;
            } else {
                console.warn('لم يتم العثور على عنصر textarea.');
            }
        }
        updateTextarea();

        const mealOptions = document.querySelectorAll('.container-numberofmeals p[number-meal]');
        mealOptions.forEach(option => {
            option.addEventListener('click', function () {
                mealOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                numberOfMeals = option.getAttribute('number-meal');
                updateTextarea();
            });
        });

        const subscriptionDuration = document.querySelectorAll('.container-subscription p[subscription]');
        subscriptionDuration.forEach(option => {
            option.addEventListener('click', function () {
                subscriptionDuration.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                subscriptionPeriod = option.getAttribute('subscription');

                if (subscriptionPeriod === 'يومي') {
                    mealDay.classList.remove('hide');
                    mealWeek.classList.add('hide');
                } else if (subscriptionPeriod === 'اسبوعي') {
                    mealDay.classList.add('hide');
                    mealWeek.classList.remove('hide');
                }

                updateTextarea();
            });
        });

        const sallaButton = document.querySelector('salla-button[product-id="726753193"]');
        if (sallaButton) {
            sallaButton.addEventListener("click", function () {
                setTimeout(function () {
                    if (subscriptionPeriod === 'يومي') {
                        window.location.href = "https://makfi.co/ar/%D8%A7%D9%84%D9%8A%D9%88%D9%85/c1411561416?filters[category_id]=1411561416";
                    } else if (subscriptionPeriod === 'اسبوعي') {
                        window.location.href = "https://makfi.co/ar/%D8%A7%D9%84%D8%A7%D8%B3%D8%A8%D9%88%D8%B9/c213208012?filters[category_id]=213208012";
                    } else if (subscriptionPeriod === 'شهري') {
                        window.location.href = "https://salla.design/dev-hesyra7kqowfowva/redirect/categories/1448931609";
                    }
                }, 1000);
            });
        } else {
            console.warn('لم يتم العثور على زر salla-button.');
        }
    }, 500); // تأخير قدره نصف ثانية
});


const firstSection = document.querySelector(".s-block.s-block--fixed-banner.wide-placeholder");
const button = `<a class="btn-orderNow" href="https://makfi.co/ar/%D9%85%D9%86%D8%AA%D8%AC-%D9%88%D9%87%D9%85%D9%8A/p726753193"> اطلب الان </a>`
firstSection.innerHTML += button;
const sections = document.querySelectorAll('.s-block.s-block--fixed-banner.wide-placeholder');
sections[3].classList.add("add-footer");
const templateContent = `<div class="template-content">
     <h2>تابعنا</h2>
      <ul>
        <li><img src="https://cdn.salla.sa/form-builder/Wyr8dWF8xWpnBs9crJv1UEThZfLKIVW9WCNip3Y1.jpg" alt=""></li>
        <li><img src="" alt=""></li>
        <li><img src="https://cdn.salla.sa/form-builder/zE6wBDO0s2Vz4twWtJjqSg2fWWrGLhGteuC098H3.jpg" alt=""></li>
        <li><img src="https://cdn.salla.sa/form-builder/GuXBzheDkpgE2j5raIK38VktBaiLNSsKXZAIeEFh.jpg" alt=""></li>
         <li><img src="https://cdn.salla.sa/form-builder/KltyNlhNFQL8d9WMUdS4hxbA3CQcnxGqWIVEaPzL.jpg" alt=""></li>
      </ul>
    </div>`
    const menuFooter = `<div class="menu-footer">
      <ul>
        <li><a href=""> من نحن </a></li>
        <li><a href="">تواصل معنا </a></li>
        <li><a href=""> الوصفات </a></li>
      </ul>
    </div>`
sections[3].innerHTML += templateContent
sections[3].innerHTML += menuFooter

function handleMobileView() {
if (window.innerWidth <= 768) {
document.querySelector('.app-inner').innerHTML += `
<section class="footer-mobile">
${templateContent}
${menuFooter}
<p class="copyrights-text">Makfi©All rights reserved.20024</p>
</section>
`
}
}
handleMobileView();