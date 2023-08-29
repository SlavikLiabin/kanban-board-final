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
    getActiveTaskCount: () => {return 0},
    getFinishedTaskCount: () => {return 0},
    getTaskById: () => {return undefined},
   }

export const TaskContext = createContext<ImainDatas>(context);
export const useGlobalContext = () => useContext(TaskContext);

export const ContextWrapper = ({ children }: TchildrenProps): JSX.Element => {

    const [tasks, setTasks] = useState<Istates[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [idCounter, setIdCounter] = useState<number>(0);

    const [states] = useState<Istates[]>([
        {id: 1, name: 'Backlog', state: 'backlog'},
        {id: 2, name: 'Ready', state: 'ready'},
        {id: 3, name: 'In progress', state: 'inProgress'},
        {id: 4, name: 'Finished', state: 'finished'}
    ]);

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

        const getTaskById = (id: number): Istates | undefined => {return tasks.find((task) => task.id === id);}
        
        const addTask = (name: string | undefined): void => {  //принимаем в аргумент значение инпута (название задачи) 
            const id = idCounter + 1;                          //прибавляем к состоянию
            const task = {
                id,
                name,
                state: 'backlog'
            }
            setIdCounter(id);                             //записываем в состояние
            setTasks([...tasks, task])                    //push-им задачи в основной массив задач
        };
        
        const updateTask = (item: Istates | undefined) => {
            const task = tasks.find((task) => task.id === item!.id);
            if(task !== undefined){
                task.name = item!.name;
                task.description = item!.description;
            }
            setTasks([...tasks])
        }

         const removeTask = (id: number): void => {
                const task = tasks.find((task) => task.id === id);
                if(task){
                    setTasks([...tasks.filter(item => item.id !== id)])
                } 
        }; 
    
        const getTasksByState = (state: string): Istates[] => {       //получаем все задачи со своими state-ами
            return tasks.filter(task => task.state === state);
        };

        const getTasksByExcludedState = (state: string): Istates[] => {  //полумаем все задачи не равные state (для select)
            return tasks.filter(task => task.state !== state);
        }
        
        const moveTask = (id: number, state: string) => {          //принимаем значение селекта как id и сам state
            const task = getTaskById(id)                           //tasks.find((task) => task.id === id);
            if (task) {
                task.state = state;
            }
            setTasks([...tasks]);                                 //обновили массив задач
        }

        const getActiveTaskCount = () =>
            {return tasks.filter(task => task.state === 'backlog' || task.state === 'ready' || task.state === 'inProgress').length;}

        const getFinishedTaskCount = () =>
            {return tasks.filter(task => task.state === 'finished').length;}
        
    return <TaskContext.Provider value={{states, addTask, getTasksByState, removeTask, moveTask, getTasksByExcludedState, updateTask, getTaskById, getActiveTaskCount, getFinishedTaskCount}}>
                { /* isLoaded && */ children }
            </TaskContext.Provider>
}