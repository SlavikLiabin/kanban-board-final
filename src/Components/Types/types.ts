import { ReactNode } from "react";


export type TchildrenProps = {
    children: ReactNode;
}

export interface Istates {
    id: number | undefined,
    name: string,
    state: string,
}


