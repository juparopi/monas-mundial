import {useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/forms.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from '../../Back/firebase'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from '../../Back/AuthContext'
import {ManejoError} from '../../Back/ManejaDeError'

function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
      .catch(err => alert(ManejoError(err)))
    }else{
      navigate('/')
    }
    })
    .catch(err => setError(ManejoError(err)))
  }

  return(
    <div className='center'>
      <div className='auth'>
        <h1>Log in</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={login} name='login_form'>
          <input 
            type='email' 
            value={email}
            required
            placeholder="Ingresa tu email"
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password}
            required
            placeholder='Ingresa tu contraseña'
            onChange={e => setPassword(e.target.value)}/>

          <button type='submit'>Login</button>
        </form>
        <p>
          ¿No tienes una cuenta?  
          <Link to='/register'>Registrate aquí</Link>
        </p>
      </div>
    </div>
  )
}

export default Login