import { database } from "./firebase";

var equipos = ['QAT','ECU','SEN','NED','ENG','IRN','USA','WAL','ARG','KSA','MEX','POL','FRA','AUS','DEN','TUN','ESP','CRC','GER','JPN','BEL','CAN','MAR','CRO','BRA','SRB','SUI','CMR','POR','GHA','URU','KOR'];
var jugadores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

/**
export function crearDirectorio(){
    console.log('Opimir');
    var instanciaDirectorio = database.collection('directorio').document(0);
    equipos.forEach(equipo => {
        var instanciaEquipo = instanciaDirectorio.collection(equipo);
        jugadores.forEach(jugador => {
            var posicion = '';
            if( jugador == 1){
                posicion = 'escudo';
            }
            instanciaEquipo
            .add(
                {
                    name: equipo,
                    number : jugador,
                    posicion : posicion
                }
            );
        })
    });
}

 */

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