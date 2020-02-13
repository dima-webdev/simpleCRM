import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

/** About function representing about page content */
export default function About() {
    return (
        <div className="content">
            <Container fluid>
                <Row>
                    <Col><h1>About Page</h1></Col>
                </Row>
            </Container>
        </div>
    )
}