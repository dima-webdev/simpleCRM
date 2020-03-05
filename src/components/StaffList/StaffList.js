import React, { Component } from 'react'
import StaffCard from '../../components/StaffCard/StaffCard'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import styled from 'styled-components'
import NewStaffCard from '../../components/NewStaffCard/NewStaffCard'

const StyledList = styled.div`
    padding: 30px 0 30px 0
`

/** Class representing a list of staff members */
class StaffList extends Component {
    render() {
        return (
            <StyledList>
                <Row className="justify-content-md-start align-items-center">
                {
                    this.props.staff.map((user, i) => 
                        <StaffCard key={i} {...user} />
                    )
                }
                <NewStaffCard />
                </Row>
            </StyledList>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        staff: state.staff,
        filter: state.filter
    }
}

export default connect(mapStateToProps)(StaffList)