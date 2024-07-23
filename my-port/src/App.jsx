import React, { useState } from 'react';
import { Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
// import Modal from './components/Modal';
import projectsData from './projectsData';
import PdfViewer from './components/PdfViewer';

const App = () => {
  // const [selectedProject, setSelectedProject] = useState(null);
  // const navigate = useNavigate();

  // const showProjectDetails = (title, projectDocs, demoLink) => {
  //   if (!projectDocs) {
  //     window.location.href = demoLink;
  //   } else {
  //     navigate(`/view-pdf/${encodeURIComponent(projectDocs)}`);
  //   }
  // };

  // const closeModal = () => {
  //   setSelectedProject(null);
  // };

  return (
    <div className="d-flex justify-content-center">
      <div className="container mt-5 p-md-5 m-md-5" style={{ fontFamily: "'Reddit Sans Condensed', sans-serif" }}>
        <Header />
        <div id="projects-container" className=" justify-content-center row row-cols-1 row-cols-md-2 g-5 mb-5">
          {projectsData.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
        <Footer />
      </div>
      <Routes>
        <Route path="/view-pdf/:pdfUrl" element={<PdfViewer />} />
      </Routes>
    </div>
  );
};

export default App;
