

import React from 'react'
import UserCardT from './UserCardT'

const UsersListT = () => {
    return (
        <tbody>
            <UserCardT />
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
            <tr>
                <td>2</td>
                <td>
                    <div className="user-cell">
                        <div className="avatar avatar-green">SN</div>
                        <span>Sara Nikpour</span>
                    </div>
                </td>
                <td>28</td>
                <td><span className="role-badge role-editor">Editor</span></td>
                <td className="action-cell"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                    height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                </svg></td>
            </tr>
            <tr>
                <td>3</td>
                <td>
                    <div className="user-cell">
                        <div className="avatar avatar-orange">RH</div>
                        <span>Reza Hosseini</span>
                    </div>
                </td>
                <td>22</td>
                <td><span className="role-badge role-user">User</span></td>
                <td className="action-cell"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                    height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                </svg></td>
            </tr>
            <tr>
                <td>4</td>
                <td>
                    <div className="user-cell">
                        <div className="avatar avatar-pink">MN</div>
                        <span>Mina Nazari</span>
                    </div>
                </td>
                <td>27</td>
                <td><span className="role-badge role-moderator">Moderator</span></td>
                <td className="action-cell"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                    height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                </svg></td>
            </tr>
            <tr>
                <td>5</td>
                <td>
                    <div className="user-cell">
                        <div className="avatar avatar-blue">KB</div>
                        <span>Kian Bahrami</span>
                    </div>
                </td>
                <td>31</td>
                <td><span className="role-badge role-user-blue">User</span></td>
                <td className="action-cell"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                    height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                </svg></td>
            </tr>
        </tbody>
    )
}

export default UsersListT