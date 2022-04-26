import React, {useState} from "react";
import {
    SectionGuide,
    GuideContainer,
    NeonButton,
    NeonATag,
    GuideContainerDiv,
    GuidelinesPoints,
    GuidelinesPointsDiv,
    GridSection,
    ImageDiv,
} from "./Guideliness.styles";
import OnlyLogo_White from "../../assets/Trojans_logo/OnlyLogo_White.png";
import NeonEffectVideo from "../../assets/NeonEffect.mp4";

function FirstSection() {
    const [neonEffect, setNeonEffect] = useState(false);
    const [scrollEffect, setScrollEffect] = useState(false);

    return (
        <>
            <section
                style={{
                    width: "100%",
                    height: "100vh",
                    transition: "all 2s ease-in-out",
                    scrollBehavior: "smooth",
                    overflow: scrollEffect ? "visible" : "hidden",
                }}
            >
                <SectionGuide>
                    <video loop autoPlay muted>
                        <source src={NeonEffectVideo} type="video/mp4" />
                    </video>
                    <GuideContainer>
                        <GuideContainerDiv>
                            <h1>Guidelines</h1>
                            <p>
                                Talent win games but teamwork and intelligent
                                wins championships.
                            </p>
                            <NeonButton>
                                <a href="">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Know More
                                </a>
                            </NeonButton>
                        </GuideContainerDiv>
                        <ImageDiv>
                            <a href="#points">
                                <img
                                    onMouseOver={() => setNeonEffect(true)}
                                    onMouseLeave={() => setNeonEffect(false)}
                                    onClick={() =>
                                        setScrollEffect(!scrollEffect)
                                    }
                                    src={OnlyLogo_White}
                                />
                            </a>
                            <div
                                style={{display: neonEffect ? "flex" : "none"}}
                            >
                                <p>Click to scroll Down</p>
                            </div>
                        </ImageDiv>
                    </GuideContainer>
                </SectionGuide>

                <GuidelinesPoints>
                    <GuidelinesPointsDiv>
                        <div id="points">
                            <h1>Guidelines</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ex similique ullam illum
                                consequatur repellat obcaecati sapiente. Quis,
                                inventore modi quidem aliquam sint ad iusto non
                                suscipit ipsam nesciunt, commodi in.
                            </p>
                        </div>
                    </GuidelinesPointsDiv>
                    <GridSection>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </GridSection>
                </GuidelinesPoints>
            </section>
        </>
    );
}

export default FirstSection;
