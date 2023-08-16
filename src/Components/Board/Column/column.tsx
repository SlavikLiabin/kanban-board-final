import style from './column.module.css';
import { Card } from './Card/card';
import { Istates } from '../../Types/types';
import { useGlobalContext } from '../../Context/taskContext';


export const Column = ({ id, name, state }: Istates) => {

    const {addTask, getTasksByState} = useGlobalContext();

    const tasks = getTasksByState(state);
    const hasTask = tasks.length > 0;
    
    return (
        <div className={style.column}> 
            <div className={style.header}><h2 className={style.title}>{name}</h2></div>
            <div className={style.wrapper + ' ' + style.scroll}>
                <div className={style.body}>
                    {hasTask && 
                        tasks.map((task) => <Card key={task.id} id={task.id} name={task.name} state={task.state} />)
                        }
                </div>
            </div>
            <div className={style.footer}>
                <button className={style.button}>+ Add card</button>
            </div>
        </div>
    )
}