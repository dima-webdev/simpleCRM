import React, { Component } from 'react'
import axios from 'axios'
import StaffCard from '../../components/StaffCard/StaffCard'
import { Row, Spinner } from 'react-bootstrap'
import '../../components/StaffList/StaffList.css'
// import {Link} from 'react-router-dom'
// import StaffCardPage from '../../pages/StaffCardPage/StaffCardPage'

/** API link from randomuser.me */
const API = 'https://randomuser.me/api/?results=20'

/** Class representing a list of staff members */
class StaffList extends Component {
    constructor() {
        super()
        // Component have a state with 3 keys
        this.state = {
            isLoading: false,
            staff: [],
            error: null
        }
    }
    /** Get data from API with axios */
    loadData = () => {
        this.setState({isLoading: true}) // Set state to 'true'
        return axios
                .get(API)
                .then(response => {
                    console.log(response)
                    this.setState({
                        isLoading: false,
                        staff: response.data.results,
                        error: null
                    })
                })
                .catch(error => {
                    console.error("error: ", error)
                    this.setState({
                        error: `${error}`,
                        isLoading: false
                    })
                })
    }

    componentDidMount() {
        this.loadData() // Run the get function 
    }

    render() {
        const {isLoading, error, staff} = this.state
        /** If 'true' render 'Loading' text on the screen */
        if (isLoading) {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        }
        if (error) {
            return (
                <p>There was an error loading data...</p>
            )
        }
        return (
            <div className="staff-list">
                    <Row className="justify-content-md-center">
                    {
                        staff.map((user, i) => 
                            <StaffCard key={i} {...user} />
                            // <Link to="/staffpage"><p>{user.name}</p></Link>
                        )
                    }
                    </Row>
            </div>
        )
    }
}

export default StaffList