import React from 'react';
import { Document, Page } from 'react-pdf';
import { useParams } from 'react-router-dom';

const PdfViewer = () => {
    const { pdfUrl } = useParams();
    const decodedUrl = decodeURIComponent(pdfUrl);
    const pdfPath = `/assets/docs/${decodedUrl}`;

    return (
        <div>
            <h1>PDF Viewer</h1>
            <Document file={pdfPath} onLoadError={console.error} >
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default PdfViewer;
