import '../css/profile.css'
import {useAuthValue} from '../../Back/AuthContext'

function Profile() {
  const {currentUser} = useAuthValue()

  return (
      <div className='center'>
        <div className='profile'>
          <h1>Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
        </div>
      </div>
  )
}

export default Profile
