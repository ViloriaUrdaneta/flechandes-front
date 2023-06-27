import { Flete } from "../../types"

interface Props {
    fletes: Array<Flete>
}

export default function List ({fletes}: Props) {
    return (
        <ul>
            {
                fletes.map(flete => {
                    return (
                        <li key={flete.origen}>
                            <p>{flete.origen}</p>
                            <p>{flete.destino}</p>
                        </li>
                    )
                })
            }
        </ul> 
    )
}