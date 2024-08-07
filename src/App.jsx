import React, { useState } from 'react';
import './bootstrap.min.css';

const portfolios = [
    {
        projectName: "Bekasi City Dashboard",
        projectImg: "bekasi-city-dashboard.png",
        linkDemo: "",
        projectDocs: "",
        info: {
            year: 2021,
            stack: ["Web Design"]
        },
        id: "1"
    },
    {
        projectName: "Pande.log",
        projectImg: "pandelog.png",
        linkDemo: "https://github.com/doobeedoobeedam/pande.log",
        projectDocs: "",
        info: {
            year: 2022,
            stack: ["CodeIgniter", "Bootstrap"]
        },
        id: "2"
    },
    {
        projectName: "B-log",
        projectImg: "b-log.png",
        linkDemo: "https://github.com/doobeedoobeedam/b-log",
        projectDocs: "",
        info: {
            year: 2022,
            stack: ["Laravel", "Bootstrap"]
        },
        id: "4"
    },
    {
        projectName: "HostingIn",
        projectImg: "hostingin.png",
        linkDemo: "https://doobeedoobeedam.github.io/web-hosting/",
        projectDocs: "",
        info: {
            year: 2022,
            stack: ["Web Design", "Bootstrap"]
        },
        id: "3"
    },
    {
        projectName: "Jokes Generator",
        projectImg: "jokes-api.png",
        linkDemo: "https://doobeedoobeedam.github.io/joke-maker",
        projectDocs: "",
        info: {
            year: 2022,
            stack: ["JavaScript"]
        },
        id: "5"
    },
    {
        projectName: "Quotes Generator",
        projectImg: "quotes-api.png",
        linkDemo: "https://doobeedoobeedam.github.io/random-quote-generator/",
        projectDocs: "",
        info: {
            year: 2022,
            stack: ["JavaScript"]
        },
        id: "6"
    },
    {
        projectName: "SheTalk",
        projectImg: "SheTalk.png",
        linkDemo: "https://shetalk-app.netlify.app/",
        projectDocs: "SheTalk.pdf",
        info: {
            year: 2024,
            stack: ["React", "Sequalize"]
        },
        id: "7"
    },
    {
        projectName: "Visual Identity Webpage",
        projectImg: "visual-identity-webpage.png",
        linkDemo: "https://doobeedoobeedam.github.io/visual-identity-webpage",
        projectDocs: "",
        info: {
            year: 2021,
            stack: ["Web Design", "Bootstrap"]
        },
        id: "8"
    },
    {
        projectName: "FashiON",
        projectImg: "FashiON.png",
        linkDemo: "",
        projectDocs: "",
        info: {
            year: 2023,
            stack: ["UIUX", "Figma"]
        },
        id: "9"
    },
    {
        projectName: "MediConnect",
        projectImg: "MediConnect.png",
        linkDemo: "",
        projectDocs: "MediConnect.pdf",
        info: {
            year: 2024,
            stack: ["UIUX", "Figma"]
        },
        id: "10"
    }
];

function App() {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({ title: "", projectDocs: "", demoLink: "" });

    const showProjectDetails = (title, projectDocs, demoLink) => {
        if (!projectDocs) {
            window.location.href = demoLink;
        } else {
            setModalData({ title, projectDocs, demoLink });
            setShow(true);
        }
    };

    const closeModal = () => {
        setModalData({ title: "", projectDocs: "", demoLink: "" });
        setShow(false);
    };

    return (
        <div className="w-full d-flex justify-content-center">
            <div id="display-data" className="container mt-5 p-md-5 m-md-5" style={{ fontFamily: "'Reddit Sans Condensed', sans-serif" }}>
                <h2 className="fw-semibold">Eureka! I'm sooo glad you came here.</h2>
                <p className="mb-5">You're now on Citra's project-collection page 🌟🚀🤸🏻‍♀️📝🏋️‍♀️👩‍💻💻✨</p>
                <div id="projects-container" className="row row-cols-1 row-cols-md-2 g-5 mb-5">
                    {portfolios.map((project, index) => (
                        <div key={index} className="project">
                            <div
                                className={`col ${project.projectDocs || project.linkDemo ? "clickable" : ""}`}
                                onClick={() =>
                                    (project.projectDocs || project.linkDemo) &&
                                    showProjectDetails(project.projectName, project.projectDocs, project.linkDemo)
                                }
                            >
                                <div className="card border-0 bg-transparent">
                                    <img
                                        src={`assets/images/${project.projectImg}`}
                                        className="card-img-top rounded-0 mb-3"
                                        alt={project.projectName}
                                    />
                                    <h6 className="card-title fw-bold text-uppercase">
                                        {project.projectName}─
                                    </h6>
                                    <p className="card-text text-uppercase font-xs">
                                        {project.info.year} / {project.info.stack.join(" / ")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <footer className="d-flex justify-content-between">
                    <p>&copy; Kusuma Wecitra</p>
                    <span>
                        <a href="https://github.com/doobeedoobeedam" className="mx-1"><i className="bx bxl-github text-dark"></i></a>
                        <a href="mailto:wecitra49@gmail.com"><i className="bx bxl-gmail text-dark"></i></a>
                    </span>
                </footer>
            </div>

            {/* Modal */}
            {show && (
                <div className="modal fade" style={{ display: "block" }} id="projectModal" tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                        <div className="modal-content bg-transparent border-0 rounded-0">
                            <div className="modal-header border-0 mb-1 p-0">
                                <h6 className="modal-title text-white" id="projectModalLabel">{modalData.projectName}</h6>
                                <button type="button" className="close border-0 bg-transparent text-white" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                    <span aria-hidden="true" className="ms-5">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body p-0">
                                <iframe id="pdfIframe" src={`assets/docs/${modalData.projectDocs}`} width="100%" height="500px" title={modalData.projectName}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;