import React from "react";
import {
    GalleryDiv,
    ImageContainer,
    ImageDiv,
    ImageMainDiv,
} from "./GalleryComponent.styles";
// import Video1 from "../../assets/video/Video.mp4";
import Video1 from "../../assets/Video.mp4";

function GalleryComponent() {
    return (
        <>
            <GalleryDiv>
                <ImageContainer>
                    <ImageMainDiv>
                        <ImageDiv>
                            <span></span>
                            <span></span>
                            <h1>Love For All, Hatred For None</h1>
                            <img
                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                alt=""
                            />
                        </ImageDiv>
                        <ImageDiv>
                            <span></span>
                            <span></span>
                            <h1>Change the world by being yourself</h1>
                            <img
                                src="https://love-shayari.co/wp-content/uploads/2021/10/sun-rise.jpg"
                                alt=""
                            />
                        </ImageDiv>
                        <ImageDiv>
                            <span></span>
                            <span></span>
                            <h1>Every moment is a fresh beginning</h1>
                            <video controls>
                                <source src={Video1} type="video/mp4" />
                            </video>
                        </ImageDiv>
                        <ImageDiv>
                            <span></span>
                            <span></span>
                            <h1>Never regret anything that made you smile</h1>
                            <img
                                src="https://love-shayari.co/wp-content/uploads/2021/10/sun-rise.jpg"
                                alt=""
                            />
                        </ImageDiv>
                        <ImageDiv>
                            <span></span>
                            <span></span>
                            <h1>Die with memories, not dreams</h1>
                            <img
                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                alt=""
                            />
                        </ImageDiv>
                        <ImageDiv>
                            <span></span>
                            <span></span>
                            <h1>Aspire to inspire before we expire</h1>
                            <img
                                src="https://love-shayari.co/wp-content/uploads/2021/10/sun-rise.jpg"
                                alt=""
                            />
                        </ImageDiv>
                    </ImageMainDiv>
                </ImageContainer>
            </GalleryDiv>
        </>
    );
}

export default GalleryComponent;
