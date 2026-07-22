
import React from 'react'

const UserCardT = ({index, user}) => {
    return (
        <tr>
            <td>1</td>
            <td>
                <div className="user-cell">
                    <div className="avatar avatar-purple">AM</div>
                    <span>Amin Mehran</span>
                </div>
            </td>
            <td>24</td>
            <td><span className="role-badge role-admin">Admin</span></td>
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