import { React, useState, useEffect } from 'react'
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Section_4() {
    const img_list = ["https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/time-logo.svg",
        "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/slack-logo.svg",
        "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/disney-logo.svg",
        "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/cnn-logo.svg",
        "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/salesforce-logo.svg",
        "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/facebook-logo.svg",
        "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/condenast-logo.svg",
        "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/bloomberg-logo.svg"]
    const [monthly, set_monthly] = useState(false)
    const [yearly, set_yearly] = useState(true)
    const func_1 = () => {
        set_monthly(true)
        set_yearly(false)
        console.log(monthly)
    }
    const func_2 = () => {
        set_monthly(false)
        set_yearly(true)
        console.log(yearly)
    }
    return (
        <>
            <section className='section-4'>
                <h1 className='sec4-title'>Choose your flavor of WordPress</h1>
                <div className='chosers'>
                    <div className={monthly ? "choser-active" : "choser"} onClick={func_1}>
                        <p>Pay Monthly</p>
                    </div>
                    <div className={yearly ? "choser-active" : "choser"} onClick={func_2}>
                        <p>Pay Annually</p>
                    </div>
                </div>
                <div className='flavors'>
                    <div className='flavor-free'>
                        <div className='free-title'>
                            <h1>Free</h1>
                        </div>
                        <div className='free-ut'>
                            <p>Get a taste of the world’s most popular CMS & blogging software.</p>
                        </div>
                        <div className='free-price'>
                            <AttachMoneyIcon />
                            <div className='price-num'>
                                <p>0</p>
                            </div>
                            <div className='price-content'>
                                <p>No expiration date</p>
                            </div>
                        </div>
                        <div className="free-btn">
                            <button>Get Free</button>
                        </div>
                        <div className='free-content'>
                            <ul>
                                <li className='li'>Beautiful themes and patterns</li>
                                <li className='li'>Unlimited pages</li>
                                <li className='li'>Unlimited users</li>
                                <li className='li'>Time machine for post edits</li>
                                <li className='li'>Built-in newsletters & RSS</li>
                                <li className='li'>Brute-force protection</li>
                                <li className='li'>Smart redirects</li>
                                <li className='li'>Online forever</li>
                                <div className='cont-2'>
                                    <BoltSharpIcon className='bolt-icon' style={{ color: "white" }} fontSize='small' />
                                    <li className='li'>Visitor stats</li>
                                    <li className='li'>Spam protection with Akismet</li>
                                    <li className='li'>Limited automatic shares in social media</li>
                                    <li className='li'>Contact form</li>
                                </div>
                            </ul>
                        </div>
                        <div className='storage'>
                            <div className='storage-title'>
                                <p>STORAGE</p>
                            </div>
                            <div className='storage-num'>
                                <p>1 GB</p>
                            </div>
                        </div>
                    </div>
                    <div className='flavor-personal'>
                        <div className='free-title'>
                            <h1>Personal</h1>
                        </div>
                        <div className='free-ut'>
                            <p>Create your home on the web with a custom domain name.</p>
                        </div>
                        <div className='free-price'>
                            <AttachMoneyIcon />
                            <div className='price-num'>
                                <p>{yearly ? "4" : monthly ? "9" : ""}</p>
                            </div>
                            <div className='price-content'>
                                <p> {yearly ? "per month, $48 billed annually" : monthly ? "per month, billed monthly" : ""}</p>
                            </div>
                        </div>
                        <div className='free-btn-2'>
                            <button>Get Personal</button>
                        </div>
                        <div className='free-content'>
                            <ul>
                                <p className='addition'>Everything in Free, plus:</p>
                                <li className={yearly ? "more" : monthly ? "more-2" : ""}>Free domain for one year</li>
                                <li className='li'>Ad-free experience</li>
                                <li className='li'>Extremely fast DNS with SSL</li>
                                <li className='li'>Support via email</li>
                                <div className='cont-2'>
                                    <BoltSharpIcon className='bolt-icon' style={{ color: "white" }} fontSize='small' />
                                    <li className='li'>Paid subscribers</li>
                                    <li className='li'>Premium content gating</li>
                                </div>
                            </ul>
                        </div>
                        <div className='storage-2'>
                            <div className='storage-title'>
                                <p>STORAGE</p>
                            </div>
                            <div className='storage-num'>
                                <p>6 GB</p>
                            </div>
                        </div>
                    </div>
                    <div className='flavor-pre'>
                        <div className='reco'>
                            <p>Popular</p>
                        </div>
                        <div className='free-title'>
                            <h1>Premium</h1>
                        </div>
                        <div className='free-ut'>
                            <p>Build a unique website with powerful design tools.</p>
                        </div>
                        <div className='free-price'>
                            <AttachMoneyIcon />
                            <div className='price-num'>
                                <p>{yearly ? "8" : monthly ? "18" : ""}</p>
                            </div>
                            <div className='price-content'>
                                <p>{yearly ? "per month, $96 billed annually" : monthly ? "per month, billed monthly" : ""}</p>
                            </div>
                        </div>
                        <div className='free-btn-3'>
                            <button>Get premium</button>
                        </div>
                        <div className='free-content'>
                            <ul>
                                <p className='addition-2'>Everything in Personal, plus:</p>
                                <li className={yearly ? "more" : monthly ? "more-2" : ""}>Free domain for one year</li>
                                <li className={yearly ? "li" : monthly ? "li-2" : ""}>Live chat support</li>
                                <li className='li'>Premium themes</li>
                                <li className='li'>Earn with WordAds</li>
                                <li className='li'>Style customization</li>
                                <div className='cont-2'>
                                    <BoltSharpIcon className='bolt-icon' style={{ color: "white" }} fontSize='small' />
                                    <li className='li'>4K Videos with VideoPress</li>
                                    <li className='li'>Unlimited automatic shares in social media</li>
                                    <li className='li'>Site activity log</li>
                                </div>
                            </ul>
                        </div>
                        <div className='storage-3'>
                            <div className='storage-title'>
                                <p>STORAGE</p>
                            </div>
                            <div className='storage-num'>
                                <p>13 GB</p>
                            </div>
                        </div>
                    </div>
                    <div className='flavor-bus'>
                        <div className='reco-2'>
                            <p>Best for devs</p>
                        </div>
                        <div className='free-title'>
                            <h1>Business</h1>
                        </div>
                        <div className='free-ut'>
                            <p>Unlock the power of WordPress with plugins and cloud tools.</p>
                        </div>
                        <div className='free-price'>
                            <AttachMoneyIcon />
                            <div className='price-num'>
                                <p>{yearly ? "25" : monthly ? "40" : ""}</p>
                            </div>
                            <div className='price-content'>
                                <p>{yearly ? "per month, $300 billed annually" : monthly ? "per month, billed monthly" : ""}</p>
                            </div>
                        </div>
                        <div className='free-btn-4'>
                            <button>Get premium</button>
                        </div>
                        <div className='free-content'>
                            <ul>
                                <p className='addition-3'>Everything in Premium, plus:</p>
                                <li className={yearly ? "more" : monthly ? "more-2" : ""}>Free domain for one year</li>
                                <li className='li'>Install plugins & themes</li>
                                <li className='li'>Unrestricted bandwidth</li>
                                <li className='li'>Global edge caching</li>
                                <li className='li'>Web application firewall (WAF)</li>
                                <li className='li'>Global CDN with 28+ locations</li>
                                <li className='li'>High-frequency CPUs</li>
                                <li className='li'>Automated datacenter failover</li>
                                <li className='li'>Isolated site infrastructure</li>
                                <li className='li'>Managed malware protection</li>
                                <li className='li'>DDOS mitigation</li>
                                <li className='li'>SFTP/SSH, WP-CLI, Git tools</li>
                                <li className='li'>Free staging site</li>
                                <li className='li'>Automated WordPress updates</li>
                                <li className='li'>High-burst capacity</li>
                                <li className='li'>Centralized site management</li>
                                <div className='cont-2'>
                                    <BoltSharpIcon className='bolt-icon' style={{ color: "white" }} fontSize='small' />
                                    <li className='li'>Real-time backups</li>
                                    <li className='li'>One-click restores</li>
                                    <li className='li'>Uptime monitor</li>
                                    <li className='li'>Built-in Elastic Search</li>
                                    <li className='li'>Plugin auto-updates</li>
                                    <li className='li'>Tools for SEO</li>
                                </div>
                            </ul>
                        </div>
                        <div className='storage-4'>
                            <div className='storage-title'>
                                <p>STORAGE</p>
                            </div>
                            <div className='storage-num'>
                                <p>200 GB</p>
                            </div>
                        </div>
                    </div>
                    <div className='flavor-personal'>
                        <div className='free-title'>
                            <h1>Commerce</h1>
                        </div>
                        <div className='free-ut'>
                            <p>Create a powerful online store with built-in premium extensions</p>
                        </div>
                        <div className='free-price'>
                            <AttachMoneyIcon />
                            <div className='price-num'>
                                <p>{yearly ? "45" : monthly ? "70" : ""}</p>
                            </div>
                            <div className='price-content'>
                                <p> {yearly ? "per month, $540 billed annually" : monthly ? "per month, billed monthly" : ""}</p>
                            </div>
                        </div>
                        <div className='free-btn-5'>
                            <button>Get Commerce</button>
                        </div>
                        <div className='free-content'>
                            <ul>
                                <p className='addition'>Everything in Business, plus:</p>
                                <li className={yearly ? "more" : monthly ? "more-2" : ""}>Free domain for one year</li>
                                <li className='li'>Ad-free experience</li>
                                <li className='li'>Extremely fast DNS with SSL</li>
                                <li className='li'>Premium store themes</li>
                                <li className='li'>Powerful store design tools</li>
                                <li className='li'>Unlimited products</li>
                                <li className='li'>Display products by brand</li>
                                <li className='li'>Product add-ons</li>
                                <li className='li'>Assembled products and kits</li>
                                <li className='li'>Min/max order quantities</li>
                                <li className='li'>Back-in-stock notifications</li>
                                <li className='li'>Dynamic product upsells</li>
                                <li className='li'>Referral and loyalty programs</li>
                                <li className='li'>Custom marketing automation</li>
                                <li className='li'>Offer bulk discounts</li>
                                <li className='li'>Inventory management</li>
                                <li className='li'>Streamlined checkout</li>
                                <li className='li'>Sell in 60+ countries</li>
                                <li className='li'>Integrations with top shipping carriers</li>
                            </ul>
                        </div>
                        <div className='storage-5'>
                            <div className='storage-title'>
                                <p>STORAGE</p>
                            </div>
                            <div className='storage-num'>
                                <p>200 GB</p>
                            </div>
                        </div>
                    </div>
                    <div className='flavor-personal'>
                        <div className='free-title'>
                            <h1>Enterprise</h1>
                        </div>
                        <div className='free-ut'>
                            <p>Deliver an unmatched performance with the highest security standards on our enterprise content platform.</p>
                        </div>
                        <div className='free-price-2'>
                            <div className='price-content'>
                                <p>Starts at US$25,000 yearly.</p>
                            </div>
                        </div>
                        <div className='free-btn-6'>
                            <button>Learn more</button>
                        </div>
                        <div className='brands'>
                            {img_list.map((val, id) => {
                                return (
                                    <div className='brand'>
                                        <img src={val} alt='Img Not found' />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='lst-btn'>
                    <button>Compare Plans <ArrowForwardIosIcon fontSize='small' className='forward-icon' /></button>
                </div>
            </section>
        </>
    )
}

export default Section_4;