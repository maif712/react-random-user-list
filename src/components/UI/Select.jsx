
import React from 'react'

const Select = ({ options = [], placeHolder = "Select an option", value, handleSetter }) => {

    {/* ["admin", "editor", "user", "moderator"] */ }
    {/* [{value: "admin", label: "Admin"}, {value: editor, label: "Editor"}] */ }

    const normalizedOptions = options.map(opt =>
        typeof opt === "string" ? { value: opt, label: opt } : opt
    )


    return (
        <select value={value} onChange={e => handleSetter(e.target.value)}>
            <option value="" disabled>{placeHolder}</option>

            {
                normalizedOptions.map(opt => {
                    return (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    )
                })
            }
        </select>
    )
}

export default Select