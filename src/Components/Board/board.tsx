import style from './board.module.css';
import { Column } from './Column/column';
import { useGlobalContext } from '../Context/taskContext';
import { Istates } from '../Types/types';


export const Board = () => {

    const states = useGlobalContext();
   //console.log(states)
    return (
        <div className={style.board}>
            {states.map(
            (state) =>
                <Column key={state.id} />
            )}
        </div>
    )
}