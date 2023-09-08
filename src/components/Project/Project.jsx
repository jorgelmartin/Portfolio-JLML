import React, { useState } from "react";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import './Project.css';
import { PortfolioButton } from "../PortfolioButton/PortfolioButton";
import { Container, Card } from "react-bootstrap";

export const Project = ({ title, description, images, gitHubLink, playLink }) => {
    const [galleryVisible, setGalleryVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const toggleGallery = () => {
        setGalleryVisible(!galleryVisible);
        setCurrentImageIndex(0); // Reinicia el índice de la imagen al abrir la galería
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const nextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <>
            <Container >
                <Card className="mt-2"
                    style={{
                        maxWidth: '22em',
                        // minWidth: '22em',
                        // maxHeight: '100%',
                        // minHeight: '10em',
                        // backgroundColor: '#b758df84',
                        background: 'rgb(199,101,235)',
                        background: 'radial-gradient(circle, rgba(199,101,235,1) 1%, rgba(151,70,181,1) 41%, rgba(159,83,185,1) 75%, rgba(157,131,179,1) 92%, rgba(157,131,179,0.9136904761904762) 99%, rgba(192,135,203,1) 100%)',
                        padding: '1em',
                        color: 'black',
                        margin: '1em',
                        borderRadius: '2em',
                        // border: 'solid #b758df84 0.2em',
                        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'

                    }}>
                    <h2>{title}</h2>
                    {/* Botón "Images" en el componente Project */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        {/* Usa ImageGallery para la galería del proyecto */}
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

                        <div className="buttonContainer">
                            <PortfolioButton
                                href={playLink}
                                text={"Play"}
                                imageSrc={""}
                            />
                            <PortfolioButton
                                href={gitHubLink}
                                text={"Repository"}
                            />
                            <PortfolioButton
                                onClick={toggleGallery}
                                text={"Pics"}
                            />
                        </div>
                    </div>
                </Card>
            </Container>
        </>
    );
};