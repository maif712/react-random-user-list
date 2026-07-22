
import React from 'react'
import UsersListT from './UsersListT'

const UserTable = () => {
    return (
        <table className="users-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th></th>
                </tr>
            </thead>
            <UsersListT />
        </table>
    )
}

export default UserTable