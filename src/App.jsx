import React, { useState } from 'react'
import CardHeader from './components/CardHeader'
import UserForm from './components/UserForm'
import UserTable from './components/UserTable'
import UserInfo from './components/UserInfo'

const App = () => {

  const [usersList, setUsersList] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  const addUser = (newUser) => {
    setUsersList(prev => [...prev, newUser])
  }

  const handleRandomUser = () => {
    const rndNumber = Math.floor(Math.random() * usersList.length)
    const user = usersList[rndNumber]
    setSelectedUser(user)
  }

  return (
    <div className="app-container">

      <div className="main-grid">

        <div className="left-column">

          <div className="card form-card">
            <CardHeader handlRndUser={handleRandomUser} />
            <UserForm handleAddUser={addUser} />
          </div>

          <div className="card list-card">
            <div className="card-header flex-between">
              <div className="header-title-group">
                <div className="icon-box purple-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h2 className="card-title">Users List</h2>
              </div>
              <div className="badge-count">{usersList.length}</div>
            </div>

            <div className="table-container">
              {
                usersList.length === 0 ?
                <p className='empty'>No user Yet!</p>
                :
                <UserTable userData={usersList}/>
              }
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="card result-card">
            <div className="card-header flex-start">
              <div className="icon-box light-purple-bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="#5c4ee5" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                  </path>
                </svg>
              </div>
              <div>
                <h2 className="card-title">Randomly Selected User</h2>
                <p className="card-subtitle">Click the button to pick a user</p>
              </div>
            </div>

            <UserInfo user={selectedUser} handleRndUser={handleRandomUser} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App