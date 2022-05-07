import React from "react";

import Trojans from "../../assets/Trojans_logo/trojans_logo.png";
import CIT from "../../assets/Trojans_logo/cit_white_logo.png";

import {FooterContainer} from "./Footer.styles";

const FooterlLinksContainer = ({title, links}) => {
    return (
        <div className="footer-links-container">
            <h2>{title}</h2>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

function Footer() {
    return (
        <FooterContainer>
            <div className="footer-top">
                <div className="footer-logo-container">
                    <div>
                        <img src={Trojans} alt="Trojans" />
                    </div>
                    {/* <div>
						<img src={Trojans} alt='Trojans' />
					</div> */}
                </div>
                <div>
                    <FooterlLinksContainer
                        title="Events"
                        links={[
                            {url: "/events", name: "Technical"},
                            {url: "/events", name: "Non - Technical"},
                            {url: "/events", name: "Workshops"},
                        ]}
                    />
                    <FooterlLinksContainer
                        title="About"
                        links={[
                            {url: "/", name: "Trojans"},
                            {url: "/", name: "Department"},
                            {url: "/", name: "College"},
                        ]}
                    />
                    <FooterlLinksContainer
                        title="Connect"
                        links={[
                            {
                                url: "https://www.instagram.com/trojans_cit/",
                                name: "Instagram",
                            },
                            {
                                url: "https://www.linkedin.com/in/trojans-cit-363404239/",
                                name: "LinkedIn",
                            },
                            {
                                url: "https://www.youtube.com/channel/UC5pM39xn_AYsaldF2DPpI3A",
                                name: "Youtube",
                            },
                            {url: "/#contact", name: "Contact Us"},
                        ]}
                    />
                    
                    <FooterlLinksContainer
                        title="Guidelines"
                        links={[
                            {
                                url: "/guidelines",
                                name: "Terms and Conditions",
                            },
                        ]}
                    />
                </div>
                <div className="footer-logo-container">
                    {/* <div>
                        <img src={Trojans} alt="Trojans" />
                    </div> */}
                    <div>
                        <img className="citLogo" src={CIT} alt="CIT" />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>COPYRIGHT © TROJANS </p>
            </div>
        </FooterContainer>
    );
}

export default Footer;
