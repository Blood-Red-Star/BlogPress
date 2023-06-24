import React from 'react'

function Section_5() {
    const build_lst = [{
        img: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/real-support-image-2x.webp",
        title: "Real support",
        description: "Our Happiness Engineers are always on hand to help. From live chat and expert email guidance to lively community forums – if you get stuck, or just need a hand getting set up, we’re here to make things happen.",
        btn: "Get Help"
    },
    {
        img: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/built-by-image-2x.webp",
        title: "Website design service",
        description: "Creating a site or store from scratch can take time. Sit back as our expert team builds a site you’ll fall in love with. From single page sites to full-blown stores, we’ll help you make it happen, sooner.",
        btn: "Get started"
    }]
    return (
        <section className='sec5'>
            <div className='f-s-5'>
                <div className='cont-t'>
                    <h1>
                        <span>You’ll never build alone </span>
                    </h1>
                </div>
                <div className='cont-c-5'>
                    <p>Wherever you are in your journey, you don’t need to build your site alone. From direct support by email and live chat, to done-for-you sites built by our expert team, we’ve got your back every step of the way.</p>
                </div>
            </div>
            <div className='builds'>
                {build_lst.map((val, key) => {
                    return (
                        <div className='build'>
                            <img src={val.img} alt='Image Not Found' />
                            <div className='content'>
                                <div className='content-title'>
                                    <h1>{val.title}</h1>
                                </div>
                                <div className='content-desc'>
                                    <p>{val.description}</p>
                                </div>
                                <div className='content-btn'>
                                    <button>{val.btn}</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Section_5;