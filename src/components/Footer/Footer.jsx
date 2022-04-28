import React from "react";
import {FooterContainer, FooterDiv, FooterSubDiv} from "./Footer.styles";

function Footer() {
    return (
        <FooterContainer>
            <FooterDiv>
                <FooterSubDiv>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est natus inventore maxime odio? Nostrum inventore esse
                        nihil repellat vero labore tempora iusto, aperiam culpa
                        illo veritatis delectus itaque aliquid modi.
                    </p>
                    <p>
                        <a href=""><img src="https://img.icons8.com/ios/40/ffffff/instagram-new--v1.png"/></a>
                        <a href=""><img src="https://img.icons8.com/ios/50/ffffff/youtube-play--v1.png"/></a>
                    </p>
                </FooterSubDiv>
                <FooterSubDiv>
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
