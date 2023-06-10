import React from 'react'
import ShieldIcon from '@mui/icons-material/Shield';
import LockIcon from '@mui/icons-material/Lock';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import CodeIcon from '@mui/icons-material/Code';
import DoneIcon from '@mui/icons-material/Done';


const Section_1 = () => {
    const cards_list = [
        {
            icon: <CodeIcon id="code-icon" style={{ color: "white" }} />, title: "Extensibility",
            note1: "Install 50,000+ plugins and themes. Deploy custom code.",
            note2: "Multi-site management.",
            note3: "SSH, WP-CLI, and Git tools."
        },
        {
            icon: <BoltSharpIcon id="code-icon" style={{ color: "white" }} />, title: "Performance",
            note1: "Global CDN with 28+ locations.",
            note2: "Highly scalable CPU bursting",
            note3: "Lightning-fast high-frequency CPUs."
        },
        {
            icon: <LockIcon id="code-icon" style={{ color: "white" }} />, title: "Security",
            note1: "Real-time activity log.",
            note2: "DDOS mitigation and firewall protection.",
            note3: "Isolated site environment."
        },
        {
            icon: <ShieldIcon id="code-icon" style={{ color: "white" }} />, title: "Reliability",
            note1: "Datacenter fail-over.",
            note2: "Real-time backups.",
            note3: "Unmetered bandwidth and pageviews."
        },
    ]
    return (
        <section className='sec1'>
            <div className='f-s'>
                <div className='cont-t'>
                    <h1>
                        <span>Basically, the best managed</span><br />
                        <span>WordPress hosting on the planet.</span>
                    </h1>
                </div>
                <div className='cont-c'>
                    <p>Say hello to the next-level hosting performance made possible when you deeply integrate every piece of hardware and line of code to run WordPress at speed and scale.</p>
                </div>
                <div className='cont-b'>
                    <button>Explore hosting</button>
                </div>
            </div>
            <div className='cards'>
                {cards_list.map((val, key) => {
                    return (
                        <div className='card'>
                            {val.icon}
                            <div className='card-t'>
                                <h1>{val.title}</h1>
                            </div>
                            <div className='notes'>
                                <div className='note'>
                                    <p> <DoneIcon className='done-icon' style={{ color: "white" }} />{val.note1}</p>
                                </div>
                                <div className='note'>
                                    <p> <DoneIcon className='done-icon' style={{ color: "white" }} />{val.note2}</p>
                                </div>
                                <div className='note'>
                                    <p> <DoneIcon className='done-icon' style={{ color: "white" }} />{val.note3}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Section_1

