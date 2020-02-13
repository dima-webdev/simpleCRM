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
export default function StaffCard({name, email, location, picture, nat, id}) {
    return (
        <Col md={3}>
            <Card className="mb-3">
                <Card.Body>
                    <img src={picture.large} alt='' className="mb-4" />
                    <Card.Title>{name.first} {name.last}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{nat}</Card.Subtitle>
                    <Card.Text>
                        {location.city}
                    </Card.Text>
                    <Card.Link href={'mailto:' + email}>{email}</Card.Link><br/><br/>
                     {/* Send values to common account page template */}
                    <Link to={{
                        pathname: `/accountpage/${name.first}`,
                        state: {
                            name: `${name.first}`,
                            imgURL: `${picture.large}`,
                            location: `${location.city}`,
                            email: `${email}`,
                            lastName: `${name.last}`
                        }
                    }}
                    >
                        <Button variant="primary">Посмотреть профиль</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}