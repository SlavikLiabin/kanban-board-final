import { ReactNode } from "react";


export type TchildrenProps = {
    children: ReactNode;
}

export interface Istates {
    id: number,
    name?: string,
    state: string,
}

export interface ImainDatas {
    states: Istates[],
    addTask: (name: string | undefined) => void,
    getTasksByState: (state: string) => Istates[],
    findById: (id: number) => void,                    
    removeTask: (id: number) => void,
}
