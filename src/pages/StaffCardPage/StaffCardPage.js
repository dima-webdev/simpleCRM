import React from 'react'

const StaffCardPage = (props) => {
    const name = props.location.state
    return (
        <div className="content">
            <div>Hello, {name.nameFirst}</div>
        </div>
    )
}

export default StaffCardPage