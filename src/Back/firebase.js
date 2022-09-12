import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqJB-U42pD_XssC-UrmU9ksaNXFDswcIY",
  authDomain: "monasmundial-d3c29.firebaseapp.com",
  projectId: "monasmundial-d3c29",
  storageBucket: "monasmundial-d3c29.appspot.com",
  messagingSenderId: "901983484723",
  appId: "1:901983484723:web:7cd6ff961d412d7e065c46",
  measurementId: "G-8QEMLCQNPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getFirestore(app);
var equipos = ['QAT','ECU','SEN','NED','ENG','IRN','USA','WAL','ARG','KSA','MEX','POL','FRA','AUS','DEN','TUN','ESP','CRC','GER','JPN','BEL','CAN','MAR','CRO','BRA','SRB','SUI','CMR','POR','GHA','URU','KOR'];
var jugadores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
export function crearDirectorio(){
  console.log('Oprimir');
  var instanciaDirectorio = database.collection('directorio').document(0);
  var instanciaEquipo = instanciaDirectorio.collection(equipos[0]);
  var posicion = '';
  if( jugadores[0] == 1){
      posicion = 'escudo';
  }
  instanciaEquipo
  .add(
      {
          name: equipos[0],
          number : jugadores[0],
          posicion : posicion
      }
  )
}
export {auth}
export {database}