import style from './board.module.css';
import { Column } from './Column/column';


export const Board = () => {

    return (
        <div className={style.board}>
            <Column />
        </div>
    )
}