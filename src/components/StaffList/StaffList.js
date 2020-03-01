import React, { Component } from 'react'
import axios from 'axios'
import StaffCard from '../../components/StaffCard/StaffCard'
import { Row, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import styled from 'styled-components'
import NewStaffCard from '../../components/NewStaffCard/NewStaffCard'

/** API link from randomuser.me */
const API = 'https://randomuser.me/api/?results=2'

const StyledList = styled.div`
    padding: 30px 0 30px 0
`

/** Class representing a list of staff members */
class StaffList extends Component {
    // constructor() {
    //     super()
    //     // Component have a state with 3 keys
    //     this.state = {
    //         isLoading: false,
    //         staff: [],
    //         error: null
    //     }
    // }
    // /** Get data from API with axios */
    // loadData = () => {
    //     this.setState({isLoading: true}) // Set state to 'true'
    //     return axios
    //             .get(API)
    //             .then(response => {
    //                 console.log(response)
    //                 this.setState({
    //                     isLoading: false,
    //                     staff: response.data.results,
    //                     error: null
    //                 })
    //             })
    //             .catch(error => {
    //                 console.error("error: ", error)
    //                 this.setState({
    //                     error: `${error}`,
    //                     isLoading: false
    //                 })
    //             })
    // }

    // componentDidMount() {
    //     this.loadData() // Run the get function 
    // }

    render() {
        // const {isLoading, error, staff} = this.state
        // /** If 'true' render 'Loading' text on the screen */
        // if (isLoading) {
        //     return (
        //         <Spinner animation="border" role="status">
        //             <span className="sr-only">Loading...</span>
        //         </Spinner>
        //     )
        // }
        // if (error) {
        //     return (
        //         <p>There was an error loading data...</p>
        //     )
        // }
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