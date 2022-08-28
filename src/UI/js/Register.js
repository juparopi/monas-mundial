import {useState} from 'react'
import '../css/forms.css'
import {auth} from '../../Back/firebase'
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from '../../Back/AuthContext'
import {ManejoError} from '../../Back/ManejaDeError'

function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive} = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Las contraseñas no coinciden.')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)   
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          })
        .catch((err) => {
          var error = ManejoError(err);
          alert(error);
        })
        })
        .catch(err => setError(ManejoError(err)))
    }
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className='center'>
      <div className='auth'>
        <h1>Registrate</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={register} name='registration_form'>
          <input 
            type='email' 
            value={email}
            placeholder="Ingresa tu email"
            required
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password} 
            required
            placeholder='Ingresa tu contraseña'
            onChange={e => setPassword(e.target.value)}/>

            <input 
            type='password'
            value={confirmPassword} 
            required
            placeholder='Confirma tu contraseña'
            onChange={e => setConfirmPassword(e.target.value)}/>

          <button type='submit'>Registro</button>
        </form>
        <span>
          ¿Ya tienes una cuenta?  
          <Link to='/login'>Login</Link>
        </span>
      </div>
    </div>
  )
}

export default Register