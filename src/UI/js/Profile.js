import '../css/profile.css'
import {useAuthValue} from '../../Back/AuthContext'
import {crearDirectorio} from '../../Back/firebase'

function Profile() {
  const {currentUser} = useAuthValue();
  
  crearDirectorio();

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
