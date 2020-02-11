import React from 'react'
import { Container, Row, Col, Jumbotron, ListGroup } from 'react-bootstrap'

const AccountPage = (props) => {
    // const name = props.location.state
    return (
        <div className="content">
            <Container fluid>
                <Row>
                    <Col md="3">
                        <div className="sidebar">
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" active>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item as="li" disabled>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col md="auto">
                        <div className="account-content">
                            <Jumbotron>
                                <h1>Account Data will be here</h1>
                                <p>There will be all information about contact</p>
                            </Jumbotron>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AccountPage