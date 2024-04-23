import React from "react";
import { Modal } from "react-bootstrap";

//IMAGE GALLERY
export const ImageGallery = ({ description, images, toggleGallery, galleryVisible, currentImageIndex, prevImage, nextImage }) => {
    
    return (
        <div>
            {/* MODAL SHOWING THE PROJECTS PICTURES */}
            <Modal show={galleryVisible} onHide={toggleGallery}>
                <Modal.Header closeButton>
                    <Modal.Title>Gallery</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className="text-center img-fluid">
                        <img src={images[currentImageIndex]} alt="" style={{
                            minHeight: '13em',
                            maxHeight: '24em',
                            // minWidth: '20em',
                            boxShadow: '0 0 1em rgba(82, 80, 83, 0.638)',
                            maxWidth: '100%',
                            borderRadius: '1em',
                            marginBottom: '0.7em'
                        }} />
                    </div>
                    <div className="d-flex">
                        <div
                            onClick={prevImage}
                            className="buttonGallery"
                        >🡰</div>
                        <div
                            onClick={nextImage}
                            className="buttonGallery"
                        >🡲</div>
                    </div>
                    {description}
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    )
};