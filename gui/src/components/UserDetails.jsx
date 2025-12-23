// UserDetails.jsx
function UserDetails (props) {
  const { user, onClear } = props

  if (!user) return null // Dacă nu e user, nu desenează nimic

  return (
    <div className='user-details' style={{ background: '#f0f0f0', padding: '20px', border: '1px solid black' }}>
      <h2>Detalii pentru {user.username}</h2>
      <p>Nume: {user.fullName}</p>
      <p>Tip: {user.type}</p>
      <button onClick={onClear}>Închide</button>
    </div>
  )
}
export default UserDetails