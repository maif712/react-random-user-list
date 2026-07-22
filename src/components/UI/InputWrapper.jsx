

import React from 'react'

const InputWrapper = ({cls="", icon, children}) => {
    return (
        <div className={`input-wrapper ${cls}`}>
            {icon}
            {children}
        </div>
    )
}

export default InputWrapper