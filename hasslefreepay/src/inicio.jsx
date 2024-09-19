import './css/inicio.css';
import { IoMdHome, IoMdCard, IoMdSwap, IoIosSettings  } from "react-icons/io";


export function Inicio(){
    return(
        <>
        <div className='comp'>
            <div className='menu'>
                <div height='2.5vh'></div>
                <div className='mc'>
                    <h1 className='e'>Menu</h1>
                </div>
                <br />
                <div className='mc'>
                    <IoMdHome className='icn' size={20}/>
                    <p className='e2'>Inicio</p>
                </div>

                <div className='mc'>
                    <IoMdCard className='icn' size={20}/>
                    <p className='e2'>Tarjetas</p>
                </div>

                <div className='mc'>
                    <IoMdSwap className='icn' size={20}/>
                    <p className='e2'>Movimientos</p>
                </div>

                <div className='mc'>
                    <IoIosSettings className='icn' size={20}/>
                    <p className='e2'>Configuracion</p>
                </div>

            </div>

            <div className='pantalla'></div>
        </div>
        </>
    )
}