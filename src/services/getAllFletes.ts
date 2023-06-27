import { Flete, FletesResponseFromApi } from '../types';

const url = "http://localhost:3000/api/flete/"

export const getAllFletes = () => {
    return fetchFletes().then(mapFromApiToFletes)
}

const fetchFletes = (): Promise<FletesResponseFromApi> => {
    return fetch(url).then(res => res.json())
}

const mapFromApiToFletes = (apiResponse: FletesResponseFromApi): Array<Flete> => {
    return apiResponse.map(fleteFromApi => {
        const {
            origen, destino, carga, foto, vehiculo, fecha, ayudante, oferta
        } = fleteFromApi
        return {
            origen, destino, carga, foto, vehiculo, fecha, ayudante, oferta
        }
    })

}