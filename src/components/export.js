import React from 'react';
import html2canvas from 'html2canvas';
import JsPdf from 'jspdf';

const printPDF = function printPDF() {
    const page = document.getElementById('overallPage');
    html2canvas(page)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            const imgWidth = 210;
            const pageHeight = 530;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            const doc = new JsPdf('p', 'mm');
            let position = 0;

            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            
            doc.save('Roger Teles Curriculum.pdf');
        });
};

const Export = ({ children }) => (
    <div className="exportButton">
        <button className="btn btn-info" onClick={() => printPDF()}>Download PDF</button>
        {children}
    </div>
);

export default Export