import style from './board.module.css';
import { Column } from './Column/column';
import { useGlobalContext } from '../Context/taskContext';


export const Board = () => {

    const state = useGlobalContext();
    console.log(state)
    
    return (
        <div className={style.board}>
            <Column />
        </div>
    )
}