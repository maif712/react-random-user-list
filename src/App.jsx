import React from 'react'
import CardHeader from './components/CardHeader'
import UserForm from './components/UserForm'

const App = () => {
  return (
    <div className="app-container">

      <div className="main-grid">

        <div className="left-column">

          <div className="card form-card">
            <CardHeader />
            <UserForm />
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
              <div className="badge-count">5</div>
            </div>

            <div className="table-container">
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
                <tbody>
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
              </table>
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

              <h1 className="result-name">Mina Nazari</h1>

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
                  27 years old
                </div>
                <div className="info-badge badge-moderator">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  Moderator
                </div>
              </div>

              <button className="btn btn-secondary btn-roll-again">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15">
                  </path>
                </svg>
                Roll Again
              </button>

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
          </div>
        </div>

      </div>
    </div>
  )
}

export default App