import '../css/verifyEmail.css'
import {useAuthValue} from '../../Back/AuthContext'
import {useState, useEffect} from 'react'
import {auth} from '../../Back/firebase'
import {sendEmailVerification} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

function VerifyEmail() {

  const {currentUser} = useAuthValue()
  const [time, setTime] = useState(60)
  const {timeActive, setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(interval)
          navigate('/')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    }, 1000)
  }, [navigate, currentUser])

  useEffect(() => {
    let interval = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive])

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
    })
  }

  return (
    <div className='center'>
      <div className='verifyEmail'>
        <h1>Verifica tu dirección de correo.</h1>
        <p>
          <strong>Un email de verificación fue enviado al correo:</strong><br/>
          <span>{currentUser?.email}</span>
        </p>
        <span>Sigue las instrucciones de este correo para ingresar. Revisa tu carpeta de spam.</span>  
        <p/>     
        <button 
          onClick={resendEmailVerification}
          disabled={timeActive}
        >Reenviar email {timeActive && time}</button>
      </div>
    </div>
  )
}

export default VerifyEmail