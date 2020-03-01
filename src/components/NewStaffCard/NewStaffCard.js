import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button } from 'react-bootstrap'

class NewStaffCard extends Component {
    
    render() {
        return (
            <div>
                <Button variant="primary" size="lg">Добавить сотрудника</Button>
            </div>
        )
    }
}

export default NewStaffCard
