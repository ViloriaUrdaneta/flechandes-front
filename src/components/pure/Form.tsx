import useNewFleteForm from '../../hooks/useNewFleteForm';
import { Flete } from '../../types';
import style from "./pure.module.css";


interface FormProps {
    onNewFlete: (newFlete: Flete) => void
}

function Form({onNewFlete}: FormProps) {

    const [inputValues, dispatch] = useNewFleteForm()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewFlete(inputValues);
        handleClear();
    }

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const {name, value} = e.target
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.origen} type='text' className={`form-control m-1 ${style.input}`} name='origen' placeholder='Origen de carga' />
                <input onChange={handleChange} value={inputValues.destino} type='text' className={`form-control m-1 ${style.input}`}  name='destino' placeholder='Destino de carga' />
                <input onChange={handleChange} value={inputValues.carga} type='text' className={`form-control m-1 ${style.input}`}  name='carga' placeholder='¿Qué transporta?' />
                <input onChange={handleChange} value={inputValues.foto} type='text' className={`form-control m-1 ${style.input}`}  name='foto' placeholder='Agregar imágenes del flete' />
                <input onChange={handleChange} value={inputValues.vehiculo} type='text' className={`form-control m-1 ${style.input}`}  name='foto' placeholder='¿Qué vehiculo necesitas?' />
                <input onChange={handleChange} value={inputValues.fecha} type='text' className={`form-control m-1 ${style.input}`}  name='foto' placeholder='¿Cuándo lo necesitas?' />
                <input onChange={handleChange} value={inputValues.ayudante} type='text' className={`form-control m-1 ${style.input}`}  name='ayudante' placeholder='¿Necesitas ayudante?' />
                <input onChange={handleChange} value={inputValues.oferta} type='text' className={`form-control m-1 ${style.input}`}  name='oferta' placeholder='Oferta un precio' />
                <button onClick={handleClear} type='submit' className={`btn btn-info m-2 ${style.button}`}>Flete!</button>
                <button type='button'>Cancelar</button>
            </form>
        </div>
    )
}

export default Form
