import { createContext, useContext, useState, useEffect } from "react"; 
import { TchildrenProps, Istates, ImainDatas } from '../Types/types';

const context: ImainDatas = {
    states: [],
    addTask: () => {},
    getTasksByState: () => {return []},                   
    removeTask: () => {},
    moveTask: () => {},
    getTasksByExcludedState: () => {return []},
    updateTask: () => {},
    getActiveTaskCount: () => {},
    getFinishedTaskCount: () => {},
    getTaskById: () => {},
   }

export const TaskContext = createContext<ImainDatas>(context);
export const useGlobalContext = () => useContext(TaskContext);

export const ContextWrapper = ({ children }: TchildrenProps): JSX.Element => {

    const [tasks, setTasks] = useState<Istates[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [idCounter, setIdCounter] = useState<number>(0);

    const getTaskById = (id: number | string) => tasks.find((task) => task.id === id);
    
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    }, [tasks, isLoaded])

    useEffect(() => {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            setTasks(JSON.parse(tasks))
        }
        setIsLoaded(true);
    }, [])

    const [states] = useState<Istates[]>([
        {id: 1, name: 'backlog', state: 'backlog'},
        {id: 2, name: 'ready', state: 'ready'},
        {id: 3, name: 'in progress', state: 'inProgress'},
        {id: 4, name: 'finished', state: 'finished'}
    ]);
   
        const addTask = (name: string | undefined): void => {
            const id = idCounter + 1;
            const task = {
                id,
                name,
                state: 'backlog'
            }
            
            setIdCounter(id);
            setTasks([...tasks, task])
        };
        
        const updateTask = (item: Istates) => {
            const task = tasks.find((task) => task.id === item.id);
            if(task !== undefined){
                task.name = item.name;
                task.description = item.description;
            }
            setTasks([...tasks])
        }

         const removeTask = (id: number): void => {
                const task = tasks.find((task) => task.id === id);
                if(task){
                    setTasks([...tasks.filter(item => item.id !== id)])
                } 
        }; 
    
        const getTasksByState = (state: string): Istates[] => {
            return tasks.filter(task => task.state === state);
        };

        const getTasksByExcludedState = (state: string): Istates[] => {
            return tasks.filter(task => task.state !== state);
        }

        const moveTask = (id: number | undefined, state: string) => {
            const task = tasks.find((task) => task.id === id);
            if (task) {
                task.state = state;
            }
            setTasks([...tasks]);
        }

        const getActiveTaskCount = () =>
            tasks.filter(task => task.state === 'ready' || task.state === 'inProgress').length;

        const getFinishedTaskCount = () =>
            tasks.filter(task => task.state === 'finished').length;
        
    return <TaskContext.Provider value={{states, addTask, getTasksByState, removeTask, moveTask, getTasksByExcludedState, updateTask, getTaskById, getActiveTaskCount, getFinishedTaskCount}}>
                { /* isLoaded && */ children }
            </TaskContext.Provider>
}