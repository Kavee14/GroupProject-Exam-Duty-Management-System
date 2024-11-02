import React, {useEffect} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {Card, Container} from "react-bootstrap";

const DownloadDutiesReport = ({duties, downloadDuties, setDownloadDuties}) => {

    const downloadDutiesPDF = () => {

        const input = document.getElementById('duties-table');

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 190;
            const pageHeight = pdf.internal.pageSize.height;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            let position = 0;

            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('Duties_Report.pdf');
        });
    };

    useEffect(() => {
        if (downloadDuties && duties.length > 0) {
            downloadDutiesPDF();
            setDownloadDuties(false);
        }
    }, [downloadDuties, duties])

    return (
        <Container fluid className="content-container" id="duties-table">
            <h1 className="report-title">Examination Duties Report</h1>
            <Card className="report mb-4">
                <Card.Body>
                    <table className="duties-table">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Course Code</th>
                            <th>Exam Hall</th>
                        </tr>
                        </thead>
                        <tbody>
                        {duties.map((duty) => (
                            <tr key={duty.duty_id}>
                                <td>{duty.duty_date}</td>
                                <td>{duty.start_time}</td>
                                <td>{duty.end_time}</td>
                                <td>{duty.course_code}</td>
                                <td>{duty.exam_hall}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default DownloadDutiesReport;
