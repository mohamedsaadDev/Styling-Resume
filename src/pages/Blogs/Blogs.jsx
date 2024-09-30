import React from 'react'
import { blogs } from '../../data/data'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

const Blogs = () => {
  const { i18n} = useTranslation();
  const revisionBlogs = blogs.map((blog) =>
    i18n.language ==="en"? blog:{
      " title":blog.title_ar,
      "blog":blog.blog_ar,
      "image":blog.image
    }

  )
  return (
    <div className="main__content">
        <div className="container">
            <div className="blogs row">
              {
                revisionBlogs.map((blog,index) =>
                <div key={index} className="blog col-md-4 my-3 ">
                  <div className="card mx-auto" >
                      <img src={blog.image} className="card-img-top" alt="..."/>
                      <div className="card-body">
                          <h5 className="card-title">{blog.title}</h5>
                          <p className="card-text">{blog.blog.split(" ").slice(0,10).join(" ")}</p>
                          <Link to={`/blogs/${index}`} className="main__btn blue_btn hvr-sweep-to-left">{t('readmore')}</Link>
                      </div>
                  </div>
              </div>)
              }
            </div>
        </div>
    </div>
  )
}

export default Blogs