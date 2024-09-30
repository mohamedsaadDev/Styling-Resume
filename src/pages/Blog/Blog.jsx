import React from 'react'
import { useParams } from 'react-router-dom'
import { blogs } from '../../data/data'
import { useTranslation } from 'react-i18next';
const Blog = () => {
  // const blog =[]
  const { i18n} = useTranslation();
  const {id} = useParams()
  console.log(id)
  const blog = blogs[id]
  console.log(blog)
  return (
    <>
    <div >
        <div className="blog w-75 my-3 mx-auto">
            <div className="card w-100">
                <img src={blog.image} className="card-img-top" alt="..."/>
                <div className="card-body border-0">
                    <h5 className="card-title">{i18n.language === "en" ?blog.title:blog.title_ar}</h5>
                    <p className="card-text">{i18n.language === "en"? blog.blog : blog.blog_ar}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog