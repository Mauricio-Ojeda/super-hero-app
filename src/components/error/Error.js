import React from 'react'

const Error = ( { message } ) => {
    return (
        <div>
            <p className="text-danger"> { message } </p>
        </div>
    )
}

export default Error
