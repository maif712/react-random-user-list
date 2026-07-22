
import React from 'react'
import Button from './UI/Button'
import { RandomIcon } from './UI/icons/Icons'
import { getRoleClasses } from '../utils/helperFunctions'

const UserInfo = ({ handleRndUser, user }) => {

    const { name, age, role } = user || {}
    const { badge } = getRoleClasses(role)

    
    return (
        <div className="result-content">
            <div className="large-avatar-container">
                <div className="large-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"
                        fill="none" stroke="#5c4ee5" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
            </div>

            {
                !user ?
                    <p className='empty'>No selected user Yet!</p>
                    :
                    <>
                        <h1 className="result-name">{name}</h1>

                        <div className="result-badges">
                            <div className="info-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                {age} years old
                            </div>
                            <div className={`info-badge ${badge}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                {role}
                            </div>
                        </div>

                        {/* TODO: Add onClick event handler to the button */}
                        <Button onClick={handleRndUser} icon={<RandomIcon />} lebel={"Roll Again"} cls='btn-secondary btn-roll-again' />
                    </>
            }


            <div className="footer-note">
                Each click selects a random user
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
            </div>
        </div>
    )
}

export default UserInfo