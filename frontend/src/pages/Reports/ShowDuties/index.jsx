import React from 'react';
import {Card, Container} from 'react-bootstrap';
import './ShowDuties.css';

const ShowDuties = ({duties}) => {
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

export default ShowDuties;
