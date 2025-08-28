import icon1 from "../../assets/images/facebook.svg"
import icon2 from "../../assets/images/twitter.svg"
import icon3 from "../../assets/images/linkedin.svg"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LMFooter.css';
import icon4 from "../../assets/images/email.svg"
import icon5 from "../../assets/images/phone.svg"
import icon6 from "../../assets/images/location.svg"

const LMFooter = ({ image, items }) => {
    const socialIcons = [
        { name: "Facebook", url: "https://www.facebook.com/focal.x.agency/", icon: icon1 },
        { name: "Twitter", url: "https://twitter.com/focal_x_agency?t=4jk3EdcOYPA9mvvWFnjuww&s=09", icon: icon2 },
        { name: "LinkedIn", url: "https://www.linkedin.com/company/focal-x-agency/", icon: icon3 },
    ];

    const openSocialLink = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <footer className="lm_whitespacing_x">
                <motion.div
                    className="lm_footer_Part1"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.div
                        className="lm_img"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <img src={image} alt="logo" />
                    </motion.div>

                    <div className='lm_line_for_img'></div>

                    <motion.ul
                        className="lm_navItems"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: false }}
                    >
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link to={item?.url} className="lm_font_size_weight2">{item?.content}</Link>
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div
                        className='lm_stay_Connected'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        <p className="lm_font_size_weight2">Stay Connected</p>
                        <div className="lm_socialIcons">
                            {socialIcons.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="lm_socialLink"
                                    onClick={() => openSocialLink(item.url)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="lm_socialIcon"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="lm_footer_Part2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
viewport={{ once: false, amount: 0.2 }}
                >
                    <div className='lm_contactIcons'>
                        <div className='lm-contactIcon'>
                            <img src={icon4} alt="icon" />
                            <span className='lm_font_size_weight2'>hello@squareup.com</span>
                        </div>
                        <div className='lm-line'></div>
                        <div className='lm-contactIcon'>
                            <img src={icon5} alt="icon" />
                            <span className='lm_font_size_weight2'>+91 91813 23 2309</span>
                        </div>
                        <div className='lm-line'></div>
                        <div className='lm-contactIcon'>
                            <img src={icon6} alt="icon" />
                            <span className='lm_font_size_weight2'>Somewhere in the World</span>
                        </div>
                        <div className='lm-line'></div>
                    </div>
                    <p className='lm_font_size_weight2'>&copy; 2023 SquareUp. All rights reserved.</p>
                </motion.div>
            </footer>
        </>
    )
}

export default LMFooter;