import React, { useEffect, useState } from 'react'
import "../Styles/home_page.css"
import Section_1 from '../components/Home_sections/section_1';
import Section_2 from '../components/Home_sections/section_2';
import Section_3 from '../components/Home_sections/Section_3';
import Section_4 from '../components/Home_sections/section_4';
import Section_5 from '../components/Home_sections/section_5';

function HomePage() {
    return (
        <>
            <Section_1 />
            <Section_2 />
            <Section_3 />
            <Section_4 />
            <Section_5 />
        </>
    )
}

export default HomePage;