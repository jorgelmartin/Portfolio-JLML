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
                    // minWidth: '22em',
                    // maxHeight: '100%',
                    // minHeight: '10em',
                    // backgroundColor: '#b758df84',
                    // background: 'rgb(69,150,224)',
                    // background: 'linear-gradient(90deg, rgba(69,150,224,1) 14%, rgba(159,83,185,1) 74%)',
                    padding: '1em',
                    // color: 'black',
                    margin: '0.2em',
                    borderRadius: '2em',
                    // border: 'solid #b758df84 0.2em',
                    // boxShadow: 'rgba(50, 50, 93, 0.25) 0em 3.125em 6.25em -1.25em, rgba(0, 0, 0, 0.3) 0em 1.875em 3.75em -1.875em, rgba(10, 37, 64, 0.35) 0em -0.125em 0.375em 0em inset'

                }}>
                <h5 style={{
                    fontSize: '1.6em',
                    textShadow: '0.05em 0.05em 0.06em rgba(232, 221, 98, 0.5)'
                }}><strong>{title}</strong></h5>
                {/* Botón "Images" en el componente Project */}
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
                    {/* <Card
                    style={{
                        maxWidth: '22em',
                        backgroundColor: '#b758df84',
                        padding: '0.9em',
                        color: 'white',
                        borderRadius: '2em',
                        margin: '1em'
                    }}>
                    <div className="cardDescription">

  </div>
                </Card> */}


                    {/* BUTTONS TO PLAY, GO TO REPOSITORY AND SEE THE GALLERY OF MY PROJECTS */}
                    <div className="buttonContainer">

                        {/* PLAY BUTTON */}
                        <PortfolioButton
                            href={playLink}
                            text={"Play"}
                            imageSrc={""}
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