import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

/**
 * Represents a sraff item in card
 * @param {name} name - The name value
 * @param {email} email - The email value
 * @param {location} location - The location value
 * @param {picture} picture - The picture value 
 * @param {nat} nat - The nationality value
 */

const picCircleStyles = {
    borderRadius: '50%',
    // width: '100px',
    // height: '100px'
}

export default function StaffCard({name, email, location, picUrl}) { // , picture, nat, id
    return (
        <Col md={3}>
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{email}</Card.Text>
                    <Card.Text>{location}</Card.Text>
                    {/* <img src={picUrl} alt="pic" style={picCircleStyles} />  */}
                </Card.Body>
            </Card>
        </Col>
    )
}