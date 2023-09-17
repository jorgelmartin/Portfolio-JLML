import React from "react";
import { Modal } from "react-bootstrap";
import { PortfolioButton } from "../PortfolioButton/PortfolioButton";

//IMAGE GALLERY
export const ImageGallery = ({ description, images, toggleGallery, galleryVisible, currentImageIndex, prevImage, nextImage }) => {
    return (
        <div>
            {/* MODAL SHOWING THE PROJECTS PICTURES */}
            <Modal show={galleryVisible} onHide={toggleGallery} style={{
                // backgroundColor:'black'
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>Gallery</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className="text-center">
                        <img src={images[currentImageIndex]} alt="" style={{
                            minHeight: '13em',
                            maxHeight: '24em',
                            minWidth: '20em'
                        }} />

                    </div>
                    {description}
                </Modal.Body>
                <Modal.Footer>
                    <PortfolioButton
                        onClick={prevImage}
                        text={"Anterior"}
                    />
                    <PortfolioButton
                        onClick={nextImage}
                        text={"Siguiente"}
                    />
                </Modal.Footer>
            </Modal>
        </div>
    )
};