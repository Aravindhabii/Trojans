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
import OnlyLogo_White from "../../assets/Trojans_logo/OnlyLogo_White.webp";
import NeonEffectVideo from "../../assets/NeonEffect.mp4";

function FirstSection() {
    const [neonEffect, setNeonEffect] = useState(false);
    const [scrollEffect, setScrollEffect] = useState(false);

    return (
        <>
            <section
            class="mainSection"
                style={{
                    width: "100%",
                    height: "100vh",
                    transition: "all 5s ease-in-out",
                    scrollBehavior: "smooth",
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
                                <a href="#know_more" id="know_more">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Know More
                                </a>
                            </NeonButton>
                        </GuideContainerDiv>
                        <ImageDiv>
                            <a href="#know_more">
                                {/* <img
                                    onMouseOver={() => setNeonEffect(true)}
                                    onMouseLeave={() => setNeonEffect(false)}
                                    onClick={() =>
                                        // setScrollEffect(!scrollEffect)
                                        setScrollEffect(true)
                                    }
                                    src={OnlyLogo_White}
                                /> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    onMouseOver={() => setNeonEffect(true)}
                                    onMouseLeave={() => setNeonEffect(false)}
                                    onClick={() =>
                                        // setScrollEffect(!scrollEffect)
                                        setScrollEffect(true)
                                    }
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                    />
                                </svg>
                            </a>
                            <div
                                style={{display: neonEffect ? "flex" : "none"}}
                            >
                                <p>Click to scroll Down</p>
                            </div>
                        </ImageDiv>
                    </GuideContainer>
                </SectionGuide>
            </section>
        </>
    );
}

export default FirstSection;
