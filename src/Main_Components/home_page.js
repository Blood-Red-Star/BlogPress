import React, { useEffect, useState } from 'react'
import "../Styles/home_page.css"
import Section_1 from '../components/Sections/section_1';
import Section_2 from '../components/Sections/section_2';
import Section_3 from '../components/Sections/Section_3';
import Section_4 from '../components/Sections/section_4';
import Section_5 from '../components/Sections/section_5';

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