import style from './buttonСross.module.css';
import { TchildrenProps } from '../../Types/types';


export const ButtonСross = ({ children }: TchildrenProps) => {

    return (
        <button className={style.button}>
            { children }
        </button>
    )
}