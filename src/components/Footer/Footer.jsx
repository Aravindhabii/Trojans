import React from "react";
import {FooterContainer, FooterDiv, FooterSubDiv} from "./Footer.styles";
import Footer1 from "../../assets/footer/footer1.mp4";

function Footer() {
    return (
        <FooterContainer>
            <FooterDiv>
                <FooterSubDiv>
                    <p>
                        Trojans is a national level technical symposium
                        organised by the IT department of Chennai Institute of
                        Technology. <br /> Trojans aims to make the process of
                        gaining technical knowledge into a more interactive and
                        fun activity by organising various events in their
                        symposium.
                    </p>
                    <p>
                        <a href="">
                            <img src="https://img.icons8.com/ios/40/ffffff/instagram-new--v1.png" />
                        </a>
                        <a href="">
                            <img src="https://img.icons8.com/ios/50/ffffff/youtube-play--v1.png" />
                        </a>
                    </p>
                </FooterSubDiv>
                <FooterSubDiv>
                    <video loop autoPlay muted>
                        <source src={Footer1} type="video/mp4" />
                    </video>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </FooterSubDiv>
            </FooterDiv>
        </FooterContainer>
    );
}

export default Footer;
