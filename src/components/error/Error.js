import React from 'react'

const Error = ( { menssage } ) => {
    return (
        <div>
            <p className="text-danger"> { menssage } </p>
        </div>
    )
}

export default Error
