import { useEffect, useState } from 'react'
import User from './User'
import UserForm from './UserForm'
import UserDetails from './UserDetails' // - Importam componenta nouă
import './UserList.css'

const SERVER = 'http://localhost:8080'

function UserList (props) {
  const [users, setUsers] = useState([])
  
  const [selectedUser, setSelectedUser] = useState(null) 

  const getUsers = async () => {
    const response = await fetch(`${SERVER}/users`)
    const data = await response.json()
    setUsers(data)
  }

  const addUser = async (user) => {
    await fetch(`${SERVER}/users`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='user-list'>
      {/* 1. Componenta de detalii apare prima daca exista un user selectat */}
      <UserDetails 
        user={selectedUser} 
        onClear={() => setSelectedUser(null)} 
      />

      {/* 2. Lista de utilizatori */}
      <div className="list-container">
        {
          users.map(e => (
         
            <div key={e.id} onClick={() => setSelectedUser(e)} style={{ cursor: 'pointer' }}>
              <User item={e} />
            </div>
          ))
        }
      </div>

      <UserForm onAdd={addUser} />
    </div>
  )
}

export default UserList