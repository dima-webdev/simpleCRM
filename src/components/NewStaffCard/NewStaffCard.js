import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, Card, Col, Spinner } from 'react-bootstrap'
import axios from 'axios'
import { getUser } from '../../actions/actions'
// import { getIsFeching } from '../../reducers/rootReducer'

const API = 'https://randomuser.me/api/?results=1'

class NewStaffCard extends Component {

    addStaff = e => {
        return axios
                .get(API)
                .then(response => {
                    const url = response.data.results[0]
                    
                    let name = url.name.first + ' ' + url.name.last
                    let picUrl = url.picture.large
                    let email = url.email
                    let location = url.nat
                    
                    this.props.getUser({ name, email, location, picUrl })  
                })
                .catch(error => {
                    console.error("error: ", error)
                })
    }

    render() {

        const { isLoading } = this.props
        
        if (isLoading) {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        }

        return (
            <Col md={3}>
                <Card>
                    <Button variant="primary" size="lg" onClick={this.addStaff}>Добавить сотрудника</Button>
                </Card>
            </Col>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: newUser => dispatch(getUser(newUser))
    }
}

// const mapStateToProps = (state) => {
//     isFetching: getIsFeching(state)
// }

export default connect(
    null,
    mapDispatchToProps,
    // mapStateToProps
)(NewStaffCard)
