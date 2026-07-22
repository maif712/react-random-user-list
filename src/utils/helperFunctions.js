


export const getRoleClasses = (role) => {
    switch (role) {
        case 'admin': return { avatar: "avatar-purple", badge: "role-admin" }
        case 'editor': return { avatar: "avatar-green", badge: "role-editor" }
        case 'user': return { avatar: "avatar-blue", badge: "role-user-blue" }
        case 'moderator': return { avatar: "avatar-pink", badge: "role-moderator" }
    }
}

export const getInitials = (name) => {
    if (!name || name.trim() === '') return ''


    return name.trim().split(/\s+/).map(part => part.charAt(0).toUpperCase()).join('')
}