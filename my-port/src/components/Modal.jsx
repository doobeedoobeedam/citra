import React from 'react';

const Modal = ({ title, projectDocs, demoLink, closeModal }) => {
    return (
        <div className="modal custom-modal fade show" style={{ display: "block" }} tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true" dialogClassName="custom-modal">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                <div className="modal-content bg-transparent border-0 rounded-0">
                    <div className="modal-header border-0 mb-1 p-0">
                        <h6 className="modal-title text-white" id="projectModalLabel">{title}</h6>
                        <button type="button" className="close border-0 bg-transparent text-white" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true" className="ms-5">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-0">
                        <iframe id="pdfIframe" src={`assets/docs/${projectDocs}`} width="100%" height="500px" border="0"
            style={{ border: "none" }}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
