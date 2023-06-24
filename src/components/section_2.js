import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react'

function Section_2 () {
    const blog_image = "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/blog-2x.webp"
    const nl_image = "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/newsletter-2x.webp"
    const lib_image = "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/link-in-bio-2x.webp"
    const video_image = "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/video-2x.webp"
    const store_image = "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/store-2x.webp"
    const course_image = "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/course-2x.webp"
    const [curr_val, setcurr_val] = useState("Get Started")
    const [blog, setblog] = useState(true)
    const [nl, set_nl] = useState(false)
    const [lib, set_lib] = useState(false)
    const [video, setvideo] = useState(false)
    const [store, set_store] = useState(false)
    const [course, setcourse] = useState(false)
    const func_blog = () => {
        setcurr_val("Get Started")
        setblog(true)
        set_nl(false)
        set_lib(false)
        setvideo(false)
        set_store(false)
        setcourse(false)
        console.log(curr_val)
    }
    const func_nl = () => {
        setcurr_val("Countinue with Newletter")
        setblog(false)
        set_nl(true)
        set_lib(false)
        setvideo(false)
        set_store(false)
        setcourse(false)
        console.log(curr_val)
    }
    const func_lib = () => {
        setcurr_val("Countinue with Link in Bio")
        setblog(false)
        set_nl(false)
        set_lib(true)
        setvideo(false)
        set_store(false)
        setcourse(false)
        console.log(curr_val)
    }
    const func_video = () => {
        setcurr_val("Countinue with Video")
        setblog(false)
        set_nl(false)
        set_lib(false)
        setvideo(true)
        set_store(false)
        setcourse(false)
        console.log(curr_val)
    }
    const func_store = () => {
        setcurr_val("Countinue with store")
        setblog(false)
        set_nl(false)
        set_lib(false)
        setvideo(false)
        set_store(true)
        setcourse(false)
        console.log(curr_val)
    }

    const func_course = () => {
        setcurr_val("Countinue with course")
        setblog(false)
        set_nl(false)
        set_lib(false)
        setvideo(false)
        set_store(false)
        setcourse(true)
        console.log(curr_val)
    }
    const li_list = [{ name: "Blog", func: func_blog, id: blog ? "active" : "" },
    { name: "Newsletter", func: func_nl, id: nl ? "active" : "" },
    { name: "Link in Bio", func: func_lib, id: lib ? "active" : "" },
    { name: "Video", func: func_video, id: video ? "active" : "" },
    { name: "Store", func: func_store, id: store ? "active" : "" },
    { name: "Course", func: func_course, id: course ? "active" : "" }];
  return (
    <section id='section-2'>
                <div className='s-s'>
                    <div className='cont-t-2'>
                        <h1>
                            <span>Build anything with</span><br />
                            <span>WordPress.com</span>
                        </h1>
                    </div>
                    <div className='cont-c-2'>
                        <p>Whatever you're building, there's a fast, intuitive way to get started.</p>
                    </div>
                </div>
                <div className='t-s'>
                    <nav className='n-f'>
                        <ul>
                            {li_list.map((val, key) => {
                                return (
                                    <li><a id={val.id} onClick={val.func}>{val.name} <ArrowForwardIcon className='arrow-icon' fontSize='small' /> </a></li>
                                )
                            })}
                        </ul>
                    </nav>
                    <img src={blog ? blog_image : nl ? nl_image : lib ? lib_image : video ? video_image : store ? store_image : course ? course_image : ""} alt='' />
                    <div className='cont-btn'>
                        <button>{curr_val}</button>
                    </div>
                </div>
            </section>
  )
}

export default Section_2