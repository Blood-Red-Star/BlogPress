import React, { useEffect, useState } from 'react'
import "./home_page.css"
import Section_1 from './section_1';
import Section_2 from './section_2';
import Section_3 from './Section_3';
import Section_4 from './section_4';
import Section_5 from './section_5';

function HomePage() {
    return (
        <>
            <Section_1 />
            <Section_2 />
            <Section_3/>
            <Section_4/>
            <Section_5/>
        </>
    )
}

export default HomePage;