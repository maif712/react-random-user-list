

import React from 'react'
import UserCardT from './UserCardT'

const UsersListT = ({ userData }) => {
    return (
        <tbody>
            {
                userData.map((user, i) => {
                    return (
                        <UserCardT key={user.id} index={i} {...user} />
                    )
                })
            }
        </tbody>
    )
}

export default UsersListT