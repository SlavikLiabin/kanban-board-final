import style from './column.module.css';
import { Card } from './Card/card';
import { Istates } from '../../Types/types';
import { useGlobalContext } from '../../Context/taskContext';
import { useState } from 'react';
import React, { ChangeEvent } from 'react';


export const Column = ({ id, name, state }: Istates) => {
    const [isNewTaskInputShown, setIsNewTaskInputShown] = useState<boolean>(false);
    const [inputCardName, setInputCardName] = useState<string | undefined>();

    const {addTask, getTasksByState, removeTask} = useGlobalContext();

    const tasks = getTasksByState(state);
    const hasTask = tasks.length > 0;

    const onInputCard = (e: ChangeEvent<HTMLInputElement>) => {
        setInputCardName(e.target.value);
    }
    
    return (
        <div className={style.column}> 
            <div className={style.header}><h2 className={style.title}>{name}</h2></div>
            <div className={style.wrapper + ' ' + style.scroll}>
                <div className={style.body}>
                    {hasTask && 
                        tasks.map((task) => <Card key={task.id} id={task.id} name={task.name} state={task.state} onRemove={(id) => removeTask(id)} />)
                        }
                    {isNewTaskInputShown &&
                    <div>                                                             
                        <input className={style.input} onInput={onInputCard} />
                    </div>
                    }
                </div>
            </div>
            <div className={style.footer}>
                <button className={style.button} onClick={() => 
                    state === 'backlog' && setIsNewTaskInputShown(true)
                }>+ Add card</button> 
            </div>
        </div>
    )
}