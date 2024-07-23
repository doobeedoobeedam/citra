import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (project.projectDocs) {
            const pdfUrl = `/assets/docs/${project.projectDocs}`;
            window.open(pdfUrl);
        } else {
            window.location.href = project.linkDemo;
        }
    };

    return (
        <div className="col clickable" onClick={handleClick}>
            <div className="card border-0 bg-transparent">
                <img src={`assets/images/${project.projectImg}`} className="card-img-top rounded-0 mb-3" alt={project.projectName} />
                <h6 className="card-title fw-bold text-uppercase">{project.projectName}─</h6>
                <p className="card-text text-uppercase font-xs">{project.info.year} / {project.info.stack.join(" / ")}</p>
            </div>
        </div>
    );
};

export default Project;
