import React from 'react'

const Error = ( { message } ) => {
    return (
        <div>
            <p className="text-white py-2 fw-bold bg-danger w-60 mx-auto"> { message } </p>
        </div>
    )
}

export default Error
