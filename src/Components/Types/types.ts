import { ReactNode } from "react";


export type TchildrenProps = {
    children: ReactNode;
}

export interface Istates {
    id: number,
    name?: string,
    state: string,
    description?: string,
}

export interface ImainDatas {
    states: Istates[],
    addTask: (name: string | undefined) => void,
    getTasksByState: (state: string) => Istates[],                    
    removeTask: (id: number) => void,
    moveTask: (id: number | undefined, state: string) => void,
    getTasksByExcludedState: (state: string) => Istates[],
    updateTask: (item: Istates) => void,
    findById: (id: number) => void
}
