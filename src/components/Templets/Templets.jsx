import React, { useContext, useState} from 'react'
import Image from 'react-bootstrap/Image';
import "./styleTemplet.css"
import { Context } from '../../context/Context';
const Templets = ({dataCV,color,lineheight,}) => {
    const { 
        fullData,
        personalData,setPersonalData,
        setFullData,
        education,
        employment, 
        skills,
        languages, 
        section1,
        section2,
        section3,
        section4,
        section5, 
        // data,
        // setData
        
    } =useContext(Context);
    const [fontSize, setfontSize]=useState('font-Medium')
    // const datao = [education,employment, skills,languages, section1,section2,section3,section4,section5]
    // const dataBody = data.filter((onedata, index) => index % 2 === 0);
    // const dataHeader = data.filter((onedata, index) => index % 2!== 0);
    console.log('education',education)
    // const handleDownloadPDF = useCallback(() => {
    //     const input = document.querySelector('.container-templet')
    //     html2canvas(input).then((canvas) => {
    //         const imgData = canvas.toDataURL('image/png');   
    //         const pdf = new jsPDF('p', 'mm', 'a4');
    //         const imgWidth = 210;
    //         const pageHeight = 297;
    //         const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //         // const imgHeight = pageHeight;
    //         let heightLeft = imgHeight;
    //         let position = 0;
    //         pdf.setFontSize(12);
    //     pdf.setTextColor(0, 0, 0);
    //     pdf.text('This content will be converted to a ', 15, 50); // النص العادي
    //     pdf.setTextColor(0, 0, 255); // تعيين لون النص إلى أزرق للرابط
    //     pdf.textWithLink('PDF document', 80, 50, { url: 'https://resumeapps.netlify.app/' });
    //     // pdf.textWithLink('Click here to visit OpenAI', 15, 50, { url: 'https://resumeapps.netlify.app/' });
    //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //       heightLeft -= pageHeight;
    
    //       while (heightLeft >= 0) {
    //         position = heightLeft - imgHeight;
    //         pdf.addPage();
    //         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //         heightLeft -= pageHeight;
    //       }
    
    //       pdf.save('download.pdf');
    //     });
    //   }, []);
    // const personalData = fullData.find((item) => item.id === 'personal Data');

    return (
        <>
        <div dir='ltr' className="wraaper-templet">
            <div  style={{ lineHeight: lineheight }}  className="container-templet d-flex">
                <div className="body-templet col-8">
                <section className="praymry-info">
                        <h1>{personalData.name} {personalData.familyName}</h1>
                        <ul className='p-0'>
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <span className='text-dark'> {personalData.phone}</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-at"></i>
                                <a className='text-dark' href="https://resumeapps.netlify.app/">{personalData.email}</a>
                            </li>
                            <li>
                                <svg  width="17" height="17" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><path d="M28.999 4.518c-7.298 0-12.999 5.779-12.999 12.909v30.573h5v-10h16v10h5v-30.573c0-7.13-5.7-12.909-13.001-12.909zm-24.999-2.518l7.364 12h.768c.466-5 3.868-9.104 8.868-10.957v-1.043h-17z"/></svg>
                                <a className='text-dark' href="https://resumeapps.netlify.app/"> </a>
                                <span>{personalData.postcode}</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-location-dot icon-location"></i>
                                <span className=' text-dark'> {personalData.city} , {personalData.state}</span>
                            </li>
                        </ul>
                    </section>
                    
                    {
                        fullData.slice(0,4).map((section)=>
                            <section className={`section${section.title}`}>
                                <h4 className='title-section'>{section.title}</h4>
                                <div className='d-flex justify-content-between'>
                                    {section.education? <h5>{section.education}</h5>  : <h5>{section.position}</h5> }
                                    {section.startDateYear || section.endDateYear ? <p>{section.startDateYear} - {section.endDateYear}</p>:""}
                                </div>
                                <div className='d-flex justify-content-between'>
                                    {section.school&& <p>{section.school}</p> }
                                    <p>{section.employer}</p>
                                    <p>{section.city}</p>

                                    <p>

                                        {/* {section.skills[0]} */}
                                    </p>
                                </div>
                                {section.skills?
                                section.skills.map((skill)=>
                                    <div className='d-flex justify-content-between'>
                                        <p className='m-0 p-0'>{skill.titleSkill}</p>
                                        {
                                            skill.rangeSkill >= 1 && (
                                                <div className="circle-container">
                                                    {Array.from({ length: 5 }).map((_, index) => (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                width: '15px',
                                                                height: '15px',
                                                                borderRadius: '50%',
                                                                backgroundColor: index < skill.rangeSkill ? color : 'lightgray',
                                                                margin: '0 3px'
                                                            }}
                                                            // className={`circle ${index < skill.rangeSkill ? 'active' : ''}`}
                                                        ></div>
                                                    ))}
                                                </div>
                                            )
                                        }

                                    </div>)
                                :''}
                                {
                                    section.language&& (
                                        section.language.map((lang)=>
                                            <div className='d-flex justify-content-between'>
                                                <p>{lang.titleLanguage}</p>
                                                {
                                            lang.rangeLanguage >= 1 && (
                                                <div className="circle-container">
                                                    {Array.from({ length: 5 }).map((_, index) => (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                width: '15px',
                                                                height: '15px',
                                                                borderRadius: '50%',
                                                                backgroundColor: index < lang.rangeLanguage ? color : 'lightgray',
                                                                margin: '0 3px'
                                                            }}
                                                        ></div>
                                                    ))}
                                                </div>
                                            )
                                        }
                                            </div>
                                        )
                                    )
                                }
                            </section>
                        )
                    }

                    {/* <section className='experince'>
                        <h3>experince </h3>
                        <div className="container-section">
                            <div className='d-flex justify-content-between'>
                                <h5>Lead Business Analyst</h5>
                                <span> 2019 - present  </span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <h5>Network Solution LCC</h5>
                                <span>Dallas , TX</span>
                            </div>
                            <ol  >
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit .</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit .</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit .</li>
                            </ol>
                        </div>
                        <div className="container-section">
                            <div className='d-flex justify-content-between'>
                                <h5>Lead Business Analyst</h5>
                                <span> 2019 - present  </span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <h5>Network Solution LCC</h5>
                                <span>Dallas , TX</span>
                            </div>
                            <ol  >
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit .</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit .</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit .</li>
                            </ol>
                        </div>
                        <div className="container-section">
                            <div className='d-flex justify-content-between'>
                                <h5>Lead Business Analyst</h5>
                                <span> 2019 - present  </span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <h5>Network Solution LCC</h5>
                                <span>Dallas , TX</span>
                            </div>
                            <ol  >
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit .</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit .</li>
                            </ol>
                        </div>
                    </section> */}
                </div>
                <div style={{backgroundColor:color,color:"white"}} className="header-templet col-4 ">
                    <section className='d-flex justify-content-center'>
                        <Image className='w-50 ' src="img/cv/images (1).jpeg" rounded />
                    </section>
                    {
                        fullData.slice(4).map((section)=>
                            <section className={section.id}>
                                {/* <p>{section.title}</p> */}
                                {section.elements?.length? 'existing':'not existing'}
                                {(section.elements?.length || section.valueElements?.length) ? (
                                    <div>
                                        <p>{section.id}</p>
                                        <h5 className='title-CustomSection'>{section.title}</h5>
                                        {/* {
                                            section.valueElements.map((value, i) =>
                                                <div key={i}>
                                                    <p>{value}</p>
                                                </div>
                                            )
                                        } */}
                                        {/* {section.title} */}
                                    </div>
                                ):''}
                            </section>
                        )
                    }
                    <section className='achievemeents'>
                        <div>
                            <div>   
                                <svg className='me-2' fill="#ffffff" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" ><g><g><polygon points="81.776,52.133 0,170.254 109.034,170.254"/></g></g><g><g><polygon points="114.771,14.992 142.468,135.013 209.982,14.992"/></g></g><g><g><polygon points="256,15.796 169.118,170.254 342.882,170.254"/></g></g><g><g><polygon points="302.02,14.992 369.532,135.013 397.229,14.992"/></g></g><g><g><polygon points="392.196,210.757 304.794,478.1 510.443,210.757"/></g></g><g><g><polygon points="430.226,52.133 402.967,170.254 512,170.254"/></g></g><g><g><polygon points="119.806,210.757 1.558,210.757 207.206,478.1"/></g></g><g><g><polygon points="162.418,210.757 256,497.008 349.582,210.757"/></g></g></svg> 
                                <span className={fontSize}>GE Key Contributor Award - Alstom Inegration project </span>
                            </div>
                            <p className={fontSize}>Met 7% deflation targer and augmented cash impact through negotions for LATAM lega services total saving = $90k+ </p>
                        </div>
                        <div>
                            <div>
                                <i className="fa-solid fa-bolt mx-2"></i>
                                <span className={fontSize}>GE Key Contributor Award - Alstom Inegration project </span>
                            </div>
                            <p className={fontSize}>Met 7% deflation targer and augmented cash impact through negotions for LATAM lega services total saving = $90k+ </p>
                        </div>
                        <div>
                            <div>
                                <i className="fa-solid fa-gears mx-2"></i>
                                <span className={fontSize}>GE Key Contributor Award - Alstom Inegration project </span>
                            </div>
                            <p className={fontSize}>Met 7% deflation targer and augmented cash impact through negotions for LATAM lega services total saving = $90k+ </p>
                        </div>
                        
                        <div>
                            <div>
                                <i className="fa-solid fa-phone mx-2"></i>
                                <span className={fontSize}>GE Key Contributor Award - Alstom Inegration project </span>
                            </div>
                            <p className={fontSize}>Met 7% deflation targer and augmented cash impact through negotions for LATAM lega services total saving = $90k+ </p>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h5 className={fontSize}>TRAINING / COURSES </h5>
                            <p className={fontSize}>Open Text Provision Modelling workshop </p>
                            <p className={fontSize}>(3 days - Dallas, TX)</p>
                        </div>
                        <div>
                            <h5 className={fontSize}>TRAINING / COURSES </h5>
                            <p className={fontSize}>Open Text Provision Modelling workshop </p>
                            <p className={fontSize}>(3 days - Dallas, TX)</p>
                        </div>
                        <div>
                            <h5 className={fontSize}>TRAINING / COURSES </h5>
                            <p className={fontSize}>Open Text Provision Modelling workshop </p>
                            <p className={fontSize}>(3 days - Dallas, TX)</p>
                        </div>
                        <div>
                            <h5 className={fontSize}>TRAINING / COURSES </h5>
                            <p className={fontSize}>Open Text Provision Modelling workshop </p>
                            <p className={fontSize}>(3 days - Dallas, TX)</p>
                        </div>
                    </section>
                </div>
            </div>
            {/* <img src="img/cv/IMG1070.png" alt="" /> */}
        </div>
        <button className='btn d-none ' onClick={()=>setfontSize('font-Medium')}>medium</button>
        {/* <button className='btn d-block' onClick={()=>setfontSize('font-Medium')}>medium</button>
        <button className='btn d-block' onClick={()=>setfontSize('font-Large')}>large</button>
        <button className='btn d-block' onClick={()=>setfontSize('font-X-large')}>x-large</button> */}
        {/* <button className='btn d-block' onClick={handleDownloadPDF}>Download PDF</button> */}
        </>
    )
}

export default Templets
// {
//     dataBody.map((item, index) => {
//         if (item.title === "Education") {
//             return (
//                 <div className='content-education' key={index}>
//                     <h3>{item.title}</h3>
//                     {/* محتوى التعليم */}
//                 </div>
//             );
//         } else if (item.title === "employment") {
//             return (
//                 <div className='content-employment' key={index}>
//                     <h3>{item.title}</h3>
//                     {/* محتوى العمل */}
//                 </div>
//             );
//         } 
//         else if (item.title) {
//             return (
//                 <div className='content-employment' key={index}>
//                     <h3>{item.title}</h3>
//                     {/* محتوى العمل */}
//                 </div>
//             );
//         } else if (item.title === "Skills") {
//             return (
//                 <div className='content-skills' key={index}>
//                     <h3>{item.title}</h3>
//                     {/* محتوى المهارات */}
//                 </div>
//             );
//         } else if (item.title === "languages") {
//             return (
//                 <div className='content-languages' key={index}>
//                     {/* محتوى اللغات */}
//                 </div>
//             );
//         } else if (item.title === "CustomSection") {
//             return (
//                 <div className='content-CustomSection' key={index}>
//                     {/* محتوى القسم المخصص */}
//                 </div>
//             );
//         }
//         return null; // لتجنب ظهور العناصر التي لا تطابق الشروط
//     })
// }
{/* <section className="praymry-info">
                        <h1>{fullData.personalData.name} {fullData.personalData.familyName}</h1>
                        <ul className='p-0'>
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <span className='text-dark'> {fullData.personalData.phone}</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-at"></i>
                                <a className='text-dark' href="https://resumeapps.netlify.app/">{fullData.personalData.email}</a>
                            </li>
                            <li>
                                <svg  width="17" height="17" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><path d="M28.999 4.518c-7.298 0-12.999 5.779-12.999 12.909v30.573h5v-10h16v10h5v-30.573c0-7.13-5.7-12.909-13.001-12.909zm-24.999-2.518l7.364 12h.768c.466-5 3.868-9.104 8.868-10.957v-1.043h-17z"/></svg>
                                {/* <svg width="17" height="17" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>hyperlink</title><path d="M60.54,34.07A7.65,7.65,0,0,1,49.72,23.25l13-12.95a35.38,35.38,0,0,1,49.91,0l.07.08a35.37,35.37,0,0,1-.07,49.83l-13,12.95A7.65,7.65,0,0,1,88.81,62.34l13-13a20.08,20.08,0,0,0,0-28.23l-.11-.11a20.08,20.08,0,0,0-28.2.07l-12.95,13Zm14,3.16A7.65,7.65,0,0,1,85.31,48.05L48.05,85.31A7.65,7.65,0,0,1,37.23,74.5L74.5,37.23ZM62.1,89.05A7.65,7.65,0,0,1,72.91,99.87l-12.7,12.71a35.37,35.37,0,0,1-49.76.14l-.28-.27a35.38,35.38,0,0,1,.13-49.78L23,50A7.65,7.65,0,1,1,33.83,60.78L21.12,73.49a20.09,20.09,0,0,0,0,28.25l0,0a20.07,20.07,0,0,0,28.27,0L62.1,89.05Z"/></svg> */}
                                {/* <a className='text-dark' href="https://resumeapps.netlify.app/"> </a> */}
                    //             <span>{fullData.personalData.postcode}</span>
                    //         </li>
                    //         <li>
                    //             <i className="fa-solid fa-location-dot icon-location"></i>
                    //             <span className=' text-dark'> {fullData.personalData.city} , {fullData.personalData.state}</span>
                    //         </li>
                    //     </ul>
                    // </section> */}