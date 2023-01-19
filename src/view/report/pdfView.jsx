import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

function PdfView(object) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file = {object.pdfLink}
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </div>
    );
}
export default PdfView