import React from "react";
import {LoadingScreen} from "./Loading.styles";
import Logo from "../../assets/Trojans_logo/trojans_logo.webp";

function Loading() {
    return (
        <LoadingScreen>
            <div id="loading-wrapper">
                <div id="loading-text">
                    <img src={Logo} alt="" />
                </div>
                <div id="loading-content"></div>
            </div>
        </LoadingScreen>
    );
}

export default Loading;
