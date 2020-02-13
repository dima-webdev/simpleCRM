import React from 'react'
import { Container } from 'react-bootstrap'
import StaffList from '../../components/StaffList/StaffList'
// import FormQuant from '../../components/FormQuant/FormQuant'

/** Home function representing home page content */
export default function Home() {
    return (
        <div className="content">
            <Container fluid>
                {/* <FormQuant /> */}
                <StaffList />
            </Container>
        </div>
    )
}