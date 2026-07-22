

import React from 'react'

const Button = ({cls = "btn-primary", lebel, icon, onClick, dis = false}) => {
    return (
        <button disabled={dis} onClick={onClick} className={`btn ${cls}`}>
            {icon}
            {lebel}
        </button>
    )
}

export default Button