import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Header from './components/Header/header.jsx';
import "./css/new.css"
import "./css/hover.css"
import Home from './pages/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import Translate from './translate'
import Dashboard from './pages/Dashboard/Dashboard.jsx'; 
import DashResume from './pages/DashResume/DashResume.jsx';
import DashCv from './pages/DashCv/DashCv.jsx';
import DashCover from './pages/DashCover/DashCover.jsx';
import Faqs from './pages/Faqs/Faqs.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Pricing from './pages/Pricing/Pricing.jsx';
import Payment from './pages/Payment/Payment.jsx';
import Login from './pages/Login/Login.jsx';
import Forgetpass from './pages/Forgetpass/Forgetpass.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Terms from './pages/Terms/Terms.jsx';
import Privacy from './pages/Privacy/Privacy.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import BlackHeader from './components/BlackHeader/BlackHeader.jsx';
import ChooseResume from './pages/Choose_Resume/ChooseResume.jsx';
import ChooseCv from './pages/Choose_Cv/ChooseCv.jsx';
import ChooseCover from './pages/Choose_Cover/ChooseCover.jsx';
import Templets from './components/Templets/Templets.jsx';
// import Templet from './pages/Templet/Templet.jsx';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <BlackHeader/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/dash_resume' element={<DashResume/>} />
        <Route path='/dash_cv' element={<DashCv/>} />
        <Route path='/dash_cover' element={<DashCover/>} />
        <Route path='/faqs' element={<Faqs/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blogs/:id' element={<Blog/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgetpass' element={<Forgetpass/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/terms' element={<Terms/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/choose_resume' element={<ChooseResume/>} />
        <Route path='/choose_cv' element={<ChooseCv/>} />
        <Route path='/choose_cover' element={<ChooseCover/>} />
        {/* <Route path='/templet' element={<Templet/>} /> */}
        <Route path='/templets' element={<Templets/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    <Translate/>
    </>
  );
}
export default App;
