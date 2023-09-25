import React, { useState } from "react";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import './Project.css';
import { PortfolioButton } from "../PortfolioButton/PortfolioButton";
import { Container, Card } from "react-bootstrap";

//PROJECT COMPONENT
export const Project = ({ title, description, images, gitHubLink, playLink }) => {
    const [galleryVisible, setGalleryVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //SWITC ON/OFF GALLERY
    const toggleGallery = () => {
        setGalleryVisible(!galleryVisible);
        setCurrentImageIndex(0);
    };

    //VERIFY IF IS NOT FIRST IMAGE, AND SHOW THE PREVIUS ONE
    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    //VERIFY IF IS NOT THE LAST IMAGE, AND SHOW THE NEXT ONE
    const nextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (

        //CARDS PROJECTS    
        <Container >
            <Card className="mt-2 projectCards"
                style={{
                    maxWidth: '22em',
                    padding: '0.86em',
                    margin: '0.1em',
                    borderRadius: '2.5em'
                }}>
                <h5 style={{
                    fontSize: '1.6em',
                }}><strong>{title}</strong></h5>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    {/* USE ImageGallery TO SHOW GALLERY OF THE PROJECT */}
                    <ImageGallery
                        images={images}
                        galleryVisible={galleryVisible}
                        toggleGallery={toggleGallery}
                        currentImageIndex={currentImageIndex}
                        prevImage={prevImage}
                        nextImage={nextImage}
                        description={description}
                    />

                    {/* BUTTONS TO PLAY, GO TO REPOSITORY AND SEE THE GALLERY OF MY PROJECTS */}
                    <div className="buttonContainer">
                        {/* PLAY BUTTON */}
                        <PortfolioButton
                            href={playLink}
                            text={"Play"}
                        />

                        {/* REPOSITORY BUTTON */}
                        <PortfolioButton
                            href={gitHubLink}
                            text={"Repository"}
                        />

                        {/* IMAGE GALLERY BUTTON */}
                        <PortfolioButton
                            onClick={toggleGallery}
                            text={"Pics"}
                        />
                    </div>
                </div>
            </Card>
        </Container>
    );
};