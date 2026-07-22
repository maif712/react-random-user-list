
import React from 'react'
import { getInitials, getRoleClasses } from '../utils/helperFunctions'

const UserCardT = ({ index, name, age, role }) => {

    const { avatar, badge } = getRoleClasses(role)
    const initialName = getInitials(name)

    
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="user-cell">
                    <div className={`avatar ${avatar}`}>{initialName}</div>
                    <span>{name}</span>
                </div>
            </td>
            <td>{age}</td>
            <td><span className={`role-badge ${badge}`}>{role}</span></td>
            <td className="action-cell"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
            </svg></td>
        </tr>
    )
}

export default UserCardT