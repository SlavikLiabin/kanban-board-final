import { createContext, useContext } from "react"; 
import { useState } from "react";
import { TchildrenProps, Istates, ImainDatas } from '../Types/types';


export const TaskContext = createContext<Istates[]>([]);
export const useGlobalContext = () => useContext(TaskContext);

export const ContextWrapper = ({ children }: TchildrenProps): JSX.Element => {

    const [tasks, setTasks] = useState<Istates[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [idCounter, setIdCounter] = useState<number>(0);

    const [states] = useState<Istates[]>([
        {id: 1, name: 'backlog', state: 'backlog'},
        {id: 2, name: 'ready', state: 'ready'},
        {id: 3, name: 'in progress', state: 'inProgress'},
        {id: 4, name: 'finished', state: 'finished'}
    ]);

   const context: ImainDatas = {
    states
   }

    return <TaskContext.Provider value={states}>
                { children }
            </TaskContext.Provider>
}