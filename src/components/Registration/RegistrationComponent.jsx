import React from "react";
import {
    RegistrationContainer,
    RegistrationDiv,
    RegistrationDivForm,
} from "./Registration.styles";
import FormComponent from "./FormComponent";
import GalleryComponent from "./GalleryComponent";

function Registration() {
    return (
        <>
            <RegistrationContainer>
                <GalleryComponent />
                <FormComponent />
            </RegistrationContainer>
        </>
    );
}

export default Registration;
