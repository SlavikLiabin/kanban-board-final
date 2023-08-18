import style from './column.module.css';
import { Card } from './Card/card';
import { Istates } from '../../Types/types';
import { useGlobalContext } from '../../Context/taskContext';
import { useState } from 'react';
import React, { ChangeEvent } from 'react';


export const Column = ({ name, state }: Istates) => {
    const [isNewTaskInputShown, setIsNewTaskInputShown] = useState<boolean>(false);
    const [inputCardName, setInputCardName] = useState<string>();

    const [isNewTaskSelectShown, setIsNewTaskSelectShown] = useState<boolean>(false);
    const [selectedTaskId, setSelectedTaskId] = useState<undefined>(undefined);

    const {addTask, getTasksByState,  moveTask, getTaskById} = useGlobalContext();
   
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
                        tasks.map((task) => <Card key={task.id} id={task.id} name={task.name} state={task.state} />)
                        }
                    {isNewTaskInputShown &&  
                    <div>                                                             
                        <input className={style.input} onInput={onInputCard} />
                    </div>
                    }
                </div>
            </div>
            <div className={style.footer}>
                {(!isNewTaskInputShown && !isNewTaskSelectShown) &&
                    <button className={style.buttonAdd} onClick={() => 
                        state === 'backlog' 
                        ? setIsNewTaskInputShown(true)
                        : setIsNewTaskSelectShown(true)}>+ Add card
                    </button>} 
                {(isNewTaskInputShown || isNewTaskSelectShown) &&
                <button className={style.buttonSub} onClick={() => {
                    if (state === 'backlog') {
                        setIsNewTaskInputShown(false)
                        addTask(inputCardName);
                        setInputCardName(undefined);
                    } else {
                        setIsNewTaskSelectShown(false);
                        moveTask(selectedTaskId, state);
                    }
                }}
                >Submit</button>
                }
            </div>
        </div>
    )
}